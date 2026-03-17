const https = require('https');
require('dotenv').config();

const token = process.env.LEEGALITY_AUTH_TOKEN.trim();
const profileId = process.env.LEEGALITY_PROFILE_ID.trim();

function probe(url, headers, method = "POST") {
    return new Promise((resolve) => {
        const parsedUrl = new URL(url);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname,
            method: method,
            headers: {
                ...headers,
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
            timeout: 5000
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ url, status: res.statusCode, body: data, headers: Object.keys(headers) }));
        });

        req.on('error', (e) => resolve({ url, error: e.message }));
        if (method === "POST") req.write(JSON.stringify({ 
            profileId,
            file: { name: "test.pdf", content: "JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+" },
            invitees: [{ name: "Test", email: "test@example.com" }]
        }));
        req.end();
    });
}

async function run() {
    console.log("Testing Production URL with Sandbox Token...");
    const url = "https://app.leegality.com/api/v3.0/document/create";
    const res = await probe(url, { "X-Auth-Token": token });
    console.log("Status:", res.status);
    console.log("Body:", res.body);
}

run();
