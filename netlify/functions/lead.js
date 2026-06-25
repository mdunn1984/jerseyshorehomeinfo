// netlify/functions/lead.js
// Unified lead-capture endpoint for Jersey Shore Home Info.
// Shared foundation only: validates and normalizes a standardized lead payload,
// applies honeypot spam protection, and returns a consistent JSON result.
// CRM, email delivery, and automation are intentionally NOT implemented here.
// Future integration point: forward the normalized lead object to a CRM/email
// provider where indicated below.

"use strict";

const ALLOWED_TYPES = [
  "buyer", "seller", "valuation", "commercial", "land",
  "investment", "relocation", "luxury", "consultation", "question", "general"
];

const PRIORITY_BY_TYPE = {
  valuation: "high",
  seller: "high",
  consultation: "high",
  luxury: "high",
  buyer: "medium",
  relocation: "medium",
  commercial: "medium",
  land: "medium",
  investment: "medium",
  question: "low",
  general: "low"
};

function clean(v, max) {
  if (typeof v !== "string") return "";
  return v.trim().slice(0, max || 2000);
}

function isEmail(v) {
  return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v);
}


// ---- Email delivery (Sprint 4.1) ----
// Delivers every successful, normalized lead to Matt via Resend.
// Configuration comes only from environment variables; no secrets are hardcoded.
function escHtml(v){return String(v==null?'':v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}

function buildRows(lead){
  var f = [
    ['Lead Type', lead.leadType],
    ['Lead Source', lead.leadSource],
    ['Lead Intent', lead.leadIntent],
    ['Lead Priority', lead.leadPriority],
    ['Name', lead.name],
    ['Phone', lead.phone],
    ['Email', lead.email],
    ['Message', lead.message],
    ['Page URL', lead.pageUrl],
    ['Timestamp', lead.receivedAt]
  ];
  return f;
}

function leadEmailText(lead){
  var f = buildRows(lead);
  var out = [];
  for (var i=0;i<f.length;i++){ out.push(f[i][0] + ": " + (f[i][1]==null?"":String(f[i][1]))); }
  return "New lead from Jersey Shore Home Info" + "\n\n" + out.join("\n");
}

function leadEmailHtml(lead){
  var f = buildRows(lead);
  var rows = "";
  for (var i=0;i<f.length;i++){
    var label = escHtml(f[i][0]);
    var val = escHtml(f[i][1]==null?"":f[i][1]);
    rows += "<tr><td style=\"padding:6px 12px;font-weight:600;color:#1B3D5C;vertical-align:top;white-space:nowrap\">" + label + "</td>" +
            "<td style=\"padding:6px 12px;color:#222\">" + (val || "&mdash;") + "</td></tr>";
  }
  return "<div style=\"font-family:Inter,Arial,sans-serif;max-width:640px;margin:0 auto\">" +
    "<h2 style=\"color:#1B3D5C;margin:0 0 4px\">New lead from Jersey Shore Home Info</h2>" +
    "<p style=\"color:#555;margin:0 0 16px\">A visitor submitted a lead capture form.</p>" +
    "<table style=\"border-collapse:collapse;width:100%;border:1px solid #e3dccd\">" + rows + "</table>" +
    "<p style=\"color:#888;font-size:12px;margin-top:16px\">Sent automatically by the lead endpoint.</p></div>";
}

async function sendLeadEmail(lead){
  var apiKey = process.env.RESEND_API_KEY;
  var to = process.env.LEAD_TO_EMAIL || 'mdunn@weichert.com';
  var from = process.env.LEAD_FROM_EMAIL || 'Jersey Shore Home Info <leads@jerseyshorehomeinfo.com>';
  if (!apiKey) { throw new Error("RESEND_API_KEY is not configured"); }
  var endpoint = ["https://api", "resend", "com/emails"].join(".");
  var subject = "New " + (lead.leadPriority || "") + " lead: " + (lead.leadType || "inquiry") + " from " + (lead.name || "website");
  var resp = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Authorization': 'Bearer ' + apiKey, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: from,
      to: [to],
      reply_to: lead.email || undefined,
      subject: subject,
      html: leadEmailHtml(lead),
      text: leadEmailText(lead)
    })
  });
  if (!resp.ok) {
    var detail = "";
    try { detail = await resp.text(); } catch (e) { detail = "(no body)"; }
    throw new Error("Resend responded " + resp.status + ": " + detail);
  }
  return true;
}

exports.handler = async function (event) {
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };

  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers, body: "" };
  }
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers, body: JSON.stringify({ ok: false, error: "method_not_allowed" }) };
  }

  let data;
  try {
    data = JSON.parse(event.body || "{}");
  } catch (e) {
    return { statusCode: 400, headers, body: JSON.stringify({ ok: false, error: "invalid_json" }) };
  }

  // Honeypot: real users never fill this hidden field.
  if (clean(data.company, 200)) {
    // Silently accept to avoid tipping off bots.
    return { statusCode: 200, headers, body: JSON.stringify({ ok: true }) };
  }

  const name = clean(data.name, 120);
  const email = clean(data.email, 160);
  const phone = clean(data.phone, 40);
  const message = clean(data.message, 4000);
  let leadType = clean(data.leadType, 40).toLowerCase();
  const leadSource = clean(data.leadSource, 120) || "unknown";
  const leadIntent = clean(data.leadIntent, 120);
  const pageUrl = clean(data.pageUrl, 400);

  const errors = [];
  if (!name) errors.push("name");
  if (!email || !isEmail(email)) errors.push("email");
  if (!message) errors.push("message");
  if (!ALLOWED_TYPES.includes(leadType)) leadType = "general";

  if (errors.length) {
    return { statusCode: 422, headers, body: JSON.stringify({ ok: false, error: "validation", fields: errors }) };
  }

  const lead = {
    receivedAt: new Date().toISOString(),
    name: name,
    email: email,
    phone: phone,
    message: message,
    leadType: leadType,
    leadSource: leadSource,
    leadIntent: leadIntent,
    leadPriority: PRIORITY_BY_TYPE[leadType] || "low",
    pageUrl: pageUrl
  };

  // FUTURE CRM INTEGRATION POINT
  // Forward "lead" to a CRM / email service here (e.g. via fetch to a provider
  // API using an environment-variable key). Keep this function as the single
  // entry point so every future form plugs into the same pipeline.
  console.log("lead_received", JSON.stringify(lead));

  
  // Sprint 4.1: deliver the normalized lead by email before reporting success.
  try {
    await sendLeadEmail(lead);
  } catch (mailErr) {
    console.error("Lead email delivery failed:", mailErr && mailErr.message ? mailErr.message : mailErr);
    return {
      statusCode: 502,
      headers: headers,
      body: JSON.stringify({ ok: false, error: 'Lead received but delivery failed. Please call or email Matt directly.' })
    };
  }
  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, leadPriority: lead.leadPriority }) };
};
