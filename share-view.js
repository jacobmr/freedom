// Read-only renderer for a shared Freedom Trail adventure (/s/:id).
(function () {
  function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // Extract the share id from /s/:id (rewrite) or a ?id= fallback.
  function getShareId() {
    const m = location.pathname.match(/\/s\/([^/?#]+)/);
    if (m) return decodeURIComponent(m[1]);
    return new URLSearchParams(location.search).get('id');
  }

  function show(id, display) { const el = document.getElementById(id); if (el) el.style.display = display; }

  function renderError() {
    show('share-loading', 'none');
    show('share-error', 'flex');
    show('share-cta', 'block');
  }

  function render(payload) {
    const title = payload.title || 'A Freedom Trail Adventure';
    document.title = title;
    document.getElementById('share-title').textContent = title;

    const total = payload.totalSites || 16;
    const visited = payload.visitedCount != null ? payload.visitedCount : (payload.visited ? payload.visited.length : 0);
    const percent = total > 0 ? Math.round((visited / total) * 100) : 0;
    document.getElementById('share-progress-text').textContent = `${visited} of ${total} sites visited`;
    document.getElementById('share-progress-percent').textContent = `${percent}%`;
    document.getElementById('share-progress-fill').style.width = `${percent}%`;

    const container = document.getElementById('share-timeline');
    const entries = payload.entries || {};
    const keys = Object.keys(entries).sort((a, b) => Number(a) - Number(b));

    if (!keys.length) {
      container.innerHTML = `<div class="empty-state" style="display:flex;"><i class="fa-solid fa-feather-pointed" aria-hidden="true"></i><h4>No journal entries in this adventure</h4><p>${escapeHtml(visited)} of ${escapeHtml(total)} sites were checked in.</p></div>`;
    } else {
      keys.forEach((key) => {
        const e = entries[key];
        const dateStr = e.timestamp ? new Date(e.timestamp).toLocaleDateString(undefined, {
          month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit'
        }) : '';

        let photosHtml = '';
        if (Array.isArray(e.photos) && e.photos.length) {
          photosHtml = '<div class="journal-photos">' +
            e.photos.map((u) => `<img src="${escapeHtml(u)}" class="journal-photo-thumbnail" alt="Journal photo" loading="lazy">`).join('') +
            '</div>';
        }

        const card = document.createElement('div');
        card.className = 'journal-card';
        card.innerHTML = `
          <div class="journal-card-header">
            <h4>#${escapeHtml(key)} - ${escapeHtml(e.name || 'Site ' + key)}</h4>
            <span class="journal-date">${escapeHtml(dateStr)}</span>
          </div>
          ${e.text && e.text.trim() ? `<p class="journal-text">${escapeHtml(e.text)}</p>` : ''}
          ${photosHtml}
        `;
        container.appendChild(card);
      });
    }

    show('share-loading', 'none');
    show('share-timeline', 'flex');
    show('share-cta', 'block');
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
