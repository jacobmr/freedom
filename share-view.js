// Read-only renderer for a shared Freedom Trail adventure (/s/:id).
(function () {
  function escapeHtml(str) {
    if (str === null || str === undefined) return "";
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  // Fallback names so a checked-in stop with no note/photo still renders with its
  // real name (its check-in would otherwise be invisible on the shared page).
  const SITE_NAMES = {
    1: "Boston Common",
    2: "Massachusetts State House",
    3: "Park Street Church",
    4: "Granary Burying Ground",
    5: "King’s Chapel & Burying Ground",
    6: "Boston Latin School Site / Benjamin Franklin Statue",
    7: "Old Corner Bookstore",
    8: "Old South Meeting House",
    9: "Old State House",
    10: "Boston Massacre Site",
    11: "Faneuil Hall",
    12: "Paul Revere House",
    13: "Old North Church",
    14: "Copp’s Hill Burying Ground",
    15: "USS Constitution & Museum",
    16: "Bunker Hill Monument",
  };

  // Extract the share id from /s/:id (rewrite) or a ?id= fallback.
  function getShareId() {
    const m = location.pathname.match(/\/s\/([^/?#]+)/);
    if (m) return decodeURIComponent(m[1]);
    return new URLSearchParams(location.search).get("id");
  }

  function show(id, display) {
    const el = document.getElementById(id);
    if (el) el.style.display = display;
  }

  function renderError() {
    show("share-loading", "none");
    show("share-error", "flex");
    show("share-cta", "block");
  }

  // Tap a photo to enlarge it; tap anywhere (or Escape) to dismiss.
  function openLightbox(url) {
    let lb = document.getElementById("app-lightbox");
    if (!lb) {
      lb = document.createElement("div");
      lb.id = "app-lightbox";
      lb.className = "lightbox";
      lb.innerHTML =
        '<button class="lightbox-close" aria-label="Close"><i class="fa-solid fa-xmark"></i></button><img src="" class="lightbox-img" alt="Enlarged photo">';
      document.body.appendChild(lb);
      lb.addEventListener("click", () => lb.classList.remove("active"));
      document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") lb.classList.remove("active");
      });
    }
    lb.querySelector(".lightbox-img").src = url;
    lb.classList.add("active");
  }

  function visitedBadge() {
    return '<span class="badge" style="background-color: var(--status-visited-glow); color: var(--status-visited);"><i class="fa-solid fa-check" aria-hidden="true"></i> Visited</span>';
  }

  function render(payload) {
    const title = payload.title || "A Freedom Trail Adventure";
    document.title = title;
    document.getElementById("share-title").textContent = title;

    const total = payload.totalSites || 16;
    const visitedList = Array.isArray(payload.visited)
      ? payload.visited.map(Number)
      : [];
    const visitedSet = new Set(visitedList);
    const visited =
      payload.visitedCount != null ? payload.visitedCount : visitedList.length;
    const percent = total > 0 ? Math.round((visited / total) * 100) : 0;
    document.getElementById("share-progress-text").textContent =
      `${visited} of ${total} sites visited`;
    document.getElementById("share-progress-percent").textContent =
      `${percent}%`;
    document.getElementById("share-progress-fill").style.width = `${percent}%`;

    const container = document.getElementById("share-timeline");
    const entries = payload.entries || {};

    // Show every stop that was visited OR has a note/photo, so a check-in with no
    // content still appears (previously such stops were silently dropped).
    const ids = Array.from(
      new Set([...visitedList, ...Object.keys(entries).map(Number)]),
    ).sort((a, b) => a - b);

    if (!ids.length) {
      container.innerHTML =
        '<div class="empty-state" style="display:flex;"><i class="fa-solid fa-feather-pointed" aria-hidden="true"></i><h4>No sites recorded in this adventure yet</h4></div>';
    } else {
      ids.forEach((id) => {
        const e = entries[id] || {};
        const name = e.name || SITE_NAMES[id] || `Site ${id}`;
        const isVisited = visitedSet.has(id);
        const dateStr = e.timestamp
          ? new Date(e.timestamp).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            })
          : "";

        let photosHtml = "";
        if (Array.isArray(e.photos) && e.photos.length) {
          photosHtml =
            '<div class="journal-photos">' +
            e.photos
              .map(
                (u) =>
                  `<img src="${escapeHtml(u)}" class="journal-photo-thumbnail" alt="Journal photo" loading="lazy">`,
              )
              .join("") +
            "</div>";
        }

        const card = document.createElement("div");
        card.className = "journal-card";
        card.innerHTML = `
          <div class="journal-card-header">
            <h4>#${id} - ${escapeHtml(name)}</h4>
            <span class="journal-date">${escapeHtml(dateStr)}</span>
          </div>
          ${isVisited ? `<div class="site-meta-badges">${visitedBadge()}</div>` : ""}
          ${e.text && e.text.trim() ? `<p class="journal-text">${escapeHtml(e.text)}</p>` : ""}
          ${photosHtml}
        `;
        container.appendChild(card);
      });

      // One delegated handler enlarges any photo thumbnail.
      container.addEventListener("click", (ev) => {
        const img = ev.target.closest("img.journal-photo-thumbnail");
        if (img) openLightbox(img.src);
      });
    }

    show("share-loading", "none");
    show("share-timeline", "flex");
    show("share-cta", "block");
  }

  async function load() {
    const id = getShareId();
    if (!id) return renderError();
    try {
      const res = await fetch(`/api/share?id=${encodeURIComponent(id)}`);
      if (!res.ok) return renderError();
      const data = await res.json();
      if (!data || !data.payload) return renderError();
      render(data.payload);
    } catch (e) {
      console.error(e);
      renderError();
    }
  }

  load();
})();
