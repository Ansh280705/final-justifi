const dotenv = require('dotenv');
const fetch = require('node-fetch');

dotenv.config();

const LEEGALITY_BASE_URL = process.env.LEEGALITY_BASE_URL?.trim().replace(/\/$/, "");
const LEEGALITY_AUTH_TOKEN = process.env.LEEGALITY_AUTH_TOKEN?.trim();
const LEEGALITY_PROFILE_ID = process.env.LEEGALITY_PROFILE_ID?.trim();

async function runTest(headerName, headerValue) {
  console.log(`\n--- Testing Header: ${headerName} ---`);
  const url = `${LEEGALITY_BASE_URL}/workflow/list`; // Get is easier
  const headers = {
    "Accept": "application/json",
    [headerName]: headerValue,
    "User-Agent": "Mozilla/5.0"
  };

  try {
    const res = await fetch(url, { method: "GET", headers });
    console.log(`Status (${headerName}):`, res.status);
    const text = await res.text();
    console.log("Body:", text.slice(0, 100) || "[EMPTY]");
    if (res.status === 200) console.log("✅ SUCCESS WITH " + headerName);
  } catch (e) {
    console.log("Error:", e.message);
  }
}

async function run() {
  console.log("--- Leegality Header Diagnostic ---");
  await runTest("X-Auth-Token", LEEGALITY_AUTH_TOKEN);
  await runTest("Auth-Token", LEEGALITY_AUTH_TOKEN);
  await runTest("Authorization", LEEGALITY_AUTH_TOKEN);
  await runTest("Authorization", `Bearer ${LEEGALITY_AUTH_TOKEN}`);
}

run();
