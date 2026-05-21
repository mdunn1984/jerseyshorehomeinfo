// Netlify Function: submits all site URLs to IndexNow.
// Triggered by the 'Deploy succeeded' outgoing webhook configured in
// Netlify (Site configuration -> Build & deploy -> Deploy notifications).
// Public endpoint: https://jerseyshorehomeinfo.com/.netlify/functions/indexnow

const KEY = 'bbc58e58e2a543c0897a90ce8aacce3c';
const KEY_LOCATION = 'https://jerseyshorehomeinfo.com/' + KEY + '.txt';
const HOST = 'jerseyshorehomeinfo.com';
const ENDPOINT = 'https://api.indexnow.org/IndexNow';

const URL_LIST = [
  'https://jerseyshorehomeinfo.com/',
  'https://jerseyshorehomeinfo.com/long-beach-island',
  'https://jerseyshorehomeinfo.com/stafford-township',
  'https://jerseyshorehomeinfo.com/toms-river',
  'https://jerseyshorehomeinfo.com/barnegat',
  'https://jerseyshorehomeinfo.com/waretown',
  'https://jerseyshorehomeinfo.com/little-egg-harbor',
  'https://jerseyshorehomeinfo.com/brick'
];

exports.handler = async function () {
  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: URL_LIST
  };

  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload)
    });
    const text = await res.text();
    return {
      statusCode: 200,
      body: JSON.stringify({
        submitted: URL_LIST.length,
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
