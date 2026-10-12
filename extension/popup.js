document.addEventListener("DOMContentLoaded", async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.id) return;

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: runInPageDiagnostic
  }, (results) => {
    if (!results || !results[0] || !results[0].result) {
      document.getElementById("results").innerHTML = "<div style='color:#f87171;'>Unable to inspect this page (restricted browser page).</div>";
      return;
    }

    const data = results[0].result;
    const titleLen = data.title.length;
    const metaLen = data.description.length;

    const html = `
      <div class="metric-row">
        <div class="metric-label">
          <span>Title Tag (${titleLen} chars)</span>
          <span class="badge ${titleLen >= 30 && titleLen <= 60 ? 'badge-ok' : 'badge-warn'}">
            ${titleLen >= 30 && titleLen <= 60 ? 'Optimal' : 'Needs Check'}
          </span>
        </div>
        <div class="metric-val">${data.title || '<em style="color:#f87171;">Missing Title Tag</em>'}</div>
      </div>

      <div class="metric-row">
        <div class="metric-label">
          <span>Meta Description (${metaLen} chars)</span>
          <span class="badge ${metaLen >= 100 && metaLen <= 160 ? 'badge-ok' : 'badge-warn'}">
            ${metaLen >= 100 && metaLen <= 160 ? 'Optimal' : 'Needs Check'}
          </span>
        </div>
        <div class="metric-val">${data.description || '<em style="color:#f87171;">Missing Meta Description</em>'}</div>
      </div>

      <div class="metric-row">
        <div class="metric-label">
          <span>H1 Header Count (${data.h1Count})</span>
          <span class="badge ${data.h1Count === 1 ? 'badge-ok' : 'badge-err'}">
            ${data.h1Count === 1 ? 'Perfect' : 'Must Have 1 H1'}
          </span>
        </div>
        <div class="metric-val">${data.firstH1 || 'No H1 found'}</div>
      </div>

      <div class="metric-row">
        <div class="metric-label">
          <span>Subheadings & Structure</span>
          <span class="badge badge-ok">${data.h2Count} H2s • ${data.h3Count} H3s</span>
        </div>
        <div class="metric-val" style="font-size:11px; color:#94a3b8;">
          Images: ${data.totalImages} (${data.imagesWithoutAlt} missing alt tags)
        </div>
      </div>

      <div class="metric-row">
        <div class="metric-label">
          <span>Structured Data / Schema</span>
          <span class="badge ${data.hasSchema ? 'badge-ok' : 'badge-warn'}">
            ${data.hasSchema ? 'Detected' : 'No Schema Found'}
          </span>
        </div>
        <div class="metric-val" style="font-size:11px;">
          Canonical: ${data.canonical ? '✓ Set' : '⚠️ Missing Canonical Tag'}
        </div>
      </div>

      <a href="https://pagespeed.web.dev/analysis?url=${encodeURIComponent(tab.url)}" target="_blank" class="btn">
        ⚡ Check Core Web Vitals (PageSpeed)
      </a>
    `;

    document.getElementById("results").innerHTML = html;
  });
});

function runInPageDiagnostic() {
  const title = document.title || "";
  const metaDesc = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";
  const canonical = document.querySelector('link[rel="canonical"]')?.getAttribute("href") || "";
  const h1s = document.querySelectorAll("h1");
  const h2s = document.querySelectorAll("h2");
  const h3s = document.querySelectorAll("h3");
  const images = document.querySelectorAll("img");
  let imagesWithoutAlt = 0;
  images.forEach(img => {
    if (!img.getAttribute("alt") || img.getAttribute("alt").trim() === "") {
      imagesWithoutAlt++;
    }
  });

  const schemaScripts = document.querySelectorAll('script[type="application/ld+json"]');

  return {
    title,
    description: metaDesc,
    canonical,
    h1Count: h1s.length,
    firstH1: h1s[0] ? h1s[0].innerText.trim() : "",
    h2Count: h2s.length,
    h3Count: h3s.length,
    totalImages: images.length,
    imagesWithoutAlt,
    hasSchema: schemaScripts.length > 0
  };
}
