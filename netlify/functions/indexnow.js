// Netlify Function: submits all site URLs to IndexNow.
// Triggered by the 'Deploy succeeded' outgoing webhook configured in
// Netlify (Site configuration -> Build & deploy -> Deploy notifications).
// Public endpoint: https://jerseyshorehomeinfo.com/.netlify/functions/indexnow
//
// URLs are read dynamically from sitemap.xml so new pages added to the
// sitemap are automatically submitted to IndexNow with no code changes.

const KEY = 'bbc58e58e2a543c0897a90ce8aacce3c';
const KEY_LOCATION = 'https://jerseyshorehomeinfo.com/' + KEY + '.txt';
const HOST = 'jerseyshorehomeinfo.com';
const ENDPOINT = 'https://api.indexnow.org/IndexNow';
const SITEMAP_URL = 'https://www.jerseyshorehomeinfo.com/sitemap.xml';

async function fetchSitemapUrls() {
    const res = await fetch(SITEMAP_URL);
    if (!res.ok) {
          throw new Error('Failed to fetch sitemap: ' + res.status);
    }
    const xml = await res.text();
    const matches = xml.match(/<loc>([^<]+)<\/loc>/g) || [];
    return matches.map(function (m) {
          return m.replace(/<\/?loc>/g, '').trim();
    }).filter(Boolean);
}

exports.handler = async function () {
    try {
          const urlList = await fetchSitemapUrls();

      if (!urlList.length) {
              return {
                        statusCode: 500,
                        body: JSON.stringify({ error: 'No URLs found in sitemap.xml' })
              };
      }

      const payload = {
              host: HOST,
              key: KEY,
              keyLocation: KEY_LOCATION,
              urlList: urlList
      };

      const res = await fetch(ENDPOINT, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json; charset=utf-8' },
              body: JSON.stringify(payload)
      });
          const text = await res.text();
          return {
                  statusCode: 200,
                  body: JSON.stringify({
                            submitted: urlList.length,
                            urls: urlList,
                            indexNowStatus: res.status,
                            indexNowBody: text
                  })
          };
    } catch (err) {
          return {
                  statusCode: 500,
                  body: JSON.stringify({ error: String(err) })
          };
    }
};
