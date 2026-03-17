const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.LEEGALITY_AUTH_TOKEN ? process.env.LEEGALITY_AUTH_TOKEN.trim() : "";
const profileId = process.env.LEEGALITY_PROFILE_ID ? process.env.LEEGALITY_PROFILE_ID.trim() : "";

async function probe(url, headers, method = "GET", body = null) {
    return new Promise((resolve) => {
        const parsedUrl = new URL(url);
        const options = {
            hostname: parsedUrl.hostname,
            path: parsedUrl.pathname + parsedUrl.search,
            method: method,
            headers: {
                ...headers,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
                "Accept": "*/*",
                "Connection": "keep-alive"
            },
            timeout: 5000
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                resolve({
                    url,
                    headers: options.headers,
                    status: res.statusCode,
                    resHeaders: res.headers,
                    body: data.slice(0, 500)
                });
            });
        });

        req.on('error', (e) => resolve({ url, error: e.message }));
        if (body) req.write(typeof body === 'object' ? JSON.stringify(body) : body);
        req.end();
    });
}

async function run() {
    console.log("Starting exhaustive probe...");
    const results = [];
    
    const hosts = [
        "https://sandbox.leegality.com",
        "https://app.leegality.com/sandbox"
    ];

    const paths = [
        "/api/v3.0/workflow/list",
        "/api/v3/workflow/list",
        "/v3.0/api/workflow/list",
        "/api/v3.0/document/create",
        "/api/v3.0/workflow/run"
    ];

    const headerKeys = ["X-Auth-Token", "Auth-Token", "Authorization"];

    for (const host of hosts) {
        for (const path of paths) {
            for (const key of headerKeys) {
                const method = path.includes("list") ? "GET" : "POST";
                const body = (method === "POST") ? { profileId, file: { name: "t.pdf", content: "JVBERi0xLjQK" }, invitees: [{ name: "T", email: "t@e.co" }] } : null;
                
                console.log(`Testing ${key} on ${host}${path}...`);
                const res = await probe(host + path, { [key]: token }, method, body);
                results.push({ name: `${key} on ${host}${path}`, res });
            }
        }
    }

    fs.writeFileSync('mega_diag_results.json', JSON.stringify(results, null, 2));
    console.log("Done. Results in mega_diag_results.json");
}

run();
