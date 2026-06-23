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

  return { statusCode: 200, headers, body: JSON.stringify({ ok: true, leadPriority: lead.leadPriority }) };
};
