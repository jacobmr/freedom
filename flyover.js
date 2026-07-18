// flyover.js — Strava-style animated recap, shared by the owner app and the public
// share page. Call Flyover.play(config):
//   config = {
//     title: string,
//     path:  [[lat,lng], ...],            // the line to trace (recorded track, or trail route)
//     stops: [{ id, name, lat, lng, visited, text, photos:[url] }],
//     meta:  { visited, total }
//   }
// Requires Leaflet (window.L) + an online connection for map tiles.
(function () {
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function haversine(a, b) {
    const R = 6371e3,
      r = Math.PI / 180;
    const p1 = a[0] * r,
      p2 = b[0] * r,
      dp = (b[0] - a[0]) * r,
      dl = (b[1] - a[1]) * r;
    const x =
      Math.sin(dp / 2) ** 2 +
      Math.cos(p1) * Math.cos(p2) * Math.sin(dl / 2) ** 2;
    return 2 * R * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  }

  function fmtDist(m) {
    if (!m) return "";
    return m < 1000 ? `${Math.round(m)} m` : `${(m / 1609.34).toFixed(2)} mi`;
  }

  function tileUrl() {
    const light = !document.body.classList.contains("dark-mode");
    return light
      ? "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
      : "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png";
  }

  function measure(path) {
    const cum = [0];
    for (let i = 1; i < path.length; i++)
      cum[i] = cum[i - 1] + haversine(path[i - 1], path[i]);
    return { cum, total: cum[cum.length - 1] || 1 };
  }

  function at(path, cum, d) {
    let i = 1;
    while (i < cum.length && cum[i] < d) i++;
    if (i >= cum.length)
      return { pt: path[path.length - 1], idx: path.length - 1 };
    const seg = cum[i] - cum[i - 1] || 1;
    const f = (d - cum[i - 1]) / seg;
    const a = path[i - 1],
      b = path[i];
    return { pt: [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f], idx: i };
  }

  function milestones(path, cum, stops) {
    return stops
      .map((s) => {
        let best = Infinity,
          bd = 0;
        for (let i = 0; i < path.length; i++) {
          const d = haversine(path[i], [s.lat, s.lng]);
          if (d < best) {
            best = d;
            bd = cum[i];
          }
        }
        return { stop: s, dist: bd };
      })
      .sort((a, b) => a.dist - b.dist);
  }

  function play(config) {
    if (!window.L) {
      alert("The flyover needs an internet connection for the map.");
      return;
    }
    const path = (config.path || []).filter(
      (p) =>
        Array.isArray(p) && p.length === 2 && isFinite(p[0]) && isFinite(p[1]),
    );
    if (path.length < 2) {
      alert("Not enough route data for a flyover yet.");
      return;
    }
    const stops = config.stops || [];
    const prefersReduced =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const root = document.createElement("div");
    root.className = "flyover-overlay";
    root.innerHTML = `
      <div class="flyover-map" id="fo-map"></div>
      <button class="flyover-close" id="fo-close" aria-label="Close flyover"><i class="fa-solid fa-xmark"></i></button>
      <div class="flyover-topbar"><span class="flyover-title">${esc(config.title || "Freedom Trail Recap")}</span></div>
      <div class="flyover-progress hidden" id="fo-prog">
        <div class="flyover-progress-bar"><div class="flyover-progress-fill" id="fo-fill"></div></div>
        <div class="flyover-progress-lbl" id="fo-lbl">Stop 0 of ${stops.length || 16}</div>
      </div>
      <div class="flyover-reveal" id="fo-reveal"></div>
      <div class="flyover-poster" id="fo-poster">
        <button class="flyover-play" id="fo-play" type="button"><i class="fa-solid fa-play"></i></button>
        <p>Play your Freedom Trail recap</p>
        <p id="fo-tapdbg" style="font:12px monospace;opacity:0.85;margin-top:4px">v12 · taps: 0</p>
      </div>
      <div class="flyover-summary hidden" id="fo-summary"></div>`;
    document.body.appendChild(root);

    let map = null,
      raf = null,
      started = false;
    const close = () => {
      if (raf) cancelAnimationFrame(raf);
      if (map) {
        try {
          map.remove();
        } catch (e) {}
      }
      root.remove();
      if (typeof config.onClose === "function") config.onClose();
    };
    root.querySelector("#fo-close").addEventListener("click", close);

    // All the Leaflet setup happens here, on Play, wrapped so a map hiccup can
    // never leave a dead "disabled"-looking button — it surfaces a real error.
    const start = () => {
      if (started) return;
      started = true;
      root.querySelector("#fo-poster").classList.add("hidden");
      try {
        root.querySelector("#fo-prog").classList.remove("hidden");
        const revealEl = root.querySelector("#fo-reveal");
        const fill = root.querySelector("#fo-fill");
        const lbl = root.querySelector("#fo-lbl");

        const mapEl = document.getElementById("fo-map");

        // On-screen diagnostic so a blank map can be pinned down remotely.
        const dbg = document.createElement("div");
        dbg.style.cssText =
          "position:absolute;top:56px;left:8px;z-index:30;background:rgba(0,0,0,0.78);color:#7CFC00;font:11px/1.45 monospace;padding:6px 8px;border-radius:6px;max-width:92%;white-space:pre-wrap;pointer-events:none";
        root.appendChild(dbg);
        let tOk = 0,
          tErr = 0;
        const dbgUpd = () => {
          dbg.textContent = `flyover v12 | map ${mapEl ? mapEl.clientWidth + "x" + mapEl.clientHeight : "?"} | pts ${path.length} | tiles ok:${tOk} err:${tErr}`;
        };

        map = L.map("fo-map", {
          zoomControl: false,
          attributionControl: true,
          dragging: false,
          scrollWheelZoom: false,
          doubleClickZoom: false,
          boxZoom: false,
          keyboard: false,
          touchZoom: false,
          tap: false,
        });
        const tiles = L.tileLayer(tileUrl(), {
          maxZoom: 19,
          subdomains: "abcd",
          attribution: "&copy; OSM &copy; CARTO",
        });
        tiles.on("tileload", () => {
          tOk++;
          dbgUpd();
        });
        tiles.on("tileerror", () => {
          tErr++;
          dbgUpd();
        });
        tiles.addTo(map);

        const latlngs = path.map((p) => [p[0], p[1]]);
        L.polyline(latlngs, {
          color: "#94a3b8",
          weight: 3,
          opacity: 0.5,
        }).addTo(map);
        const traveled = L.polyline([], {
          color: "#bd2f2f",
          weight: 5,
          opacity: 0.95,
          lineCap: "round",
          lineJoin: "round",
        }).addTo(map);
        const dot = L.circleMarker(latlngs[0], {
          radius: 7,
          color: "#fff",
          weight: 2,
          fillColor: "#bd2f2f",
          fillOpacity: 1,
        }).addTo(map);
        const stopDots = {};
        stops.forEach((s) => {
          if (isFinite(s.lat) && isFinite(s.lng)) {
            stopDots[s.id] = L.circleMarker([s.lat, s.lng], {
              radius: 5,
              color: "#fff",
              weight: 1.5,
              fillColor: "#94a3b8",
              fillOpacity: 1,
            }).addTo(map);
          }
        });

        // Size the map to its container, THEN frame the route — retried across a
        // few ticks in case the container isn't measured on the first pass.
        const bounds = L.latLngBounds(latlngs).pad(0.15);
        const draw = () => {
          if (!map) return;
          map.invalidateSize();
          map.fitBounds(bounds);
          dbgUpd();
        };
        map.setView(latlngs[0], 14); // initial view so tiles start loading immediately
        map.whenReady(draw);
        requestAnimationFrame(draw);
        setTimeout(draw, 200);
        setTimeout(draw, 700);
        setTimeout(draw, 1500);
        dbgUpd();

        const { cum, total } = measure(path);
        const miles = milestones(path, cum, stops);
        const dur = Math.min(42000, Math.max(16000, total * 9));

        const showReveal = (s) => {
          if (stopDots[s.id])
            stopDots[s.id].setStyle({
              fillColor: s.visited ? "#10b981" : "#bd2f2f",
              radius: 7,
            });
          const photos = (s.photos || [])
            .slice(0, 4)
            .map((u) => `<img src="${esc(u)}" alt="" loading="lazy">`)
            .join("");
          revealEl.innerHTML = `
            <div class="fo-reveal-card">
              <div class="fo-reveal-head">${s.visited ? '<i class="fa-solid fa-circle-check" style="color:#10b981"></i> ' : ""}#${esc(s.id)} ${esc(s.name)}</div>
              ${s.text && s.text.trim() ? `<p class="fo-reveal-text">${esc(s.text)}</p>` : ""}
              ${photos ? `<div class="fo-reveal-photos">${photos}</div>` : ""}
            </div>`;
          revealEl.classList.remove("pop");
          void revealEl.offsetWidth;
          revealEl.classList.add("pop");
        };

        const summary = () => {
          root.querySelector("#fo-prog").classList.add("hidden");
          revealEl.innerHTML = "";
          const m = config.meta || {};
          const montage = stops
            .flatMap((s) => s.photos || [])
            .slice(0, 8)
            .map((u) => `<img src="${esc(u)}" alt="" loading="lazy">`)
            .join("");
          const el = root.querySelector("#fo-summary");
          el.innerHTML = `
            <div class="fo-summary-card">
              <h3>${esc(config.title || "Freedom Trail Recap")}</h3>
              <div class="fo-summary-stats">
                <div><strong>${Number(m.visited != null ? m.visited : stops.filter((s) => s.visited).length) || 0}</strong><span>of ${Number(m.total) || 16} sites</span></div>
                <div><strong>${fmtDist(total)}</strong><span>walked</span></div>
              </div>
              ${montage ? `<div class="fo-summary-montage">${montage}</div>` : ""}
              <div class="fo-summary-actions">
                <button class="primary-btn" id="fo-replay" type="button"><i class="fa-solid fa-rotate-right"></i> Replay</button>
                <button class="secondary-btn" id="fo-done" type="button">Done</button>
              </div>
            </div>`;
          el.classList.remove("hidden");
          el.querySelector("#fo-done").addEventListener("click", close);
          el.querySelector("#fo-replay").addEventListener("click", () => {
            close();
            play(config);
          });
        };

        if (prefersReduced) {
          traveled.setLatLngs(latlngs);
          let k = 0;
          const tick = () => {
            if (k >= miles.length) return summary();
            showReveal(miles[k].stop);
            fill.style.width = `${Math.round(((k + 1) / miles.length) * 100)}%`;
            lbl.textContent = `Stop ${k + 1} of ${stops.length || 16}`;
            k++;
            setTimeout(tick, 1400);
          };
          tick();
          return;
        }

        let t0 = null,
          mi = 0;
        const frame = (ts) => {
          if (t0 == null) t0 = ts;
          const frac = Math.min(1, (ts - t0) / dur);
          const d = frac * total;
          const { pt, idx } = at(path, cum, d);
          dot.setLatLng(pt);
          traveled.setLatLngs(latlngs.slice(0, idx + 1).concat([pt]));
          fill.style.width = `${Math.round(frac * 100)}%`;
          while (mi < miles.length && d >= miles[mi].dist) {
            showReveal(miles[mi].stop);
            lbl.textContent = `Stop ${mi + 1} of ${stops.length || 16}`;
            mi++;
          }
          if (frac < 1) raf = requestAnimationFrame(frame);
          else summary();
        };
        raf = requestAnimationFrame(frame);
      } catch (err) {
        console.error("flyover error", err);
        alert(
          "Sorry — the recap couldn't start on this device. " +
            ((err && err.message) || err),
        );
        close();
      }
    };

    // Robustness + diagnostic: start on a tap ANYWHERE on the poster (not just the
    // small button), across click + pointerup, and count pointerdowns on screen so
    // we can see whether taps are even reaching the overlay.
    let tapN = 0;
    const tapDbg = root.querySelector("#fo-tapdbg");
    const poster = root.querySelector("#fo-poster");
    poster.addEventListener("pointerdown", () => {
      tapN++;
      if (tapDbg) tapDbg.textContent = `v12 · taps: ${tapN}`;
    });
    poster.addEventListener("click", start);
    poster.addEventListener("pointerup", start);
  }

  window.Flyover = { play };
})();
