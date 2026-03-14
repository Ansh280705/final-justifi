const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.LEEGALITY_AUTH_TOKEN.trim();

async function probe(url) {
    return new Promise((resolve) => {
        try {
            const parsedUrl = new URL(url);
            const options = {
                hostname: parsedUrl.hostname,
                path: parsedUrl.pathname,
                method: "GET",
                headers: {
                    "X-Auth-Token": token,
                    "User-Agent": "Mozilla/5.0"
                },
                timeout: 3000
            };

            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => resolve({ url, status: res.statusCode, body: data.slice(0, 100) }));
            });

            req.on('error', (e) => resolve({ url, error: e.message }));
            req.end();
        } catch (e) {
            resolve({ url, error: e.message });
        }
    });
}

async function run() {
    const subdomains = [
        "https://sandbox.leegality.com/api/v3.0/workflow/list",
        "https://api-sandbox.leegality.com/api/v3.0/workflow/list",
        "https://sandbox-api.leegality.com/api/v3.0/workflow/list",
        "https://api.leegality.com/api/v3.0/workflow/list",
        "https://sandbox.leegality.com/v3.0/workflow/list"
    ];

    const results = [];
    for (const url of subdomains) {
        console.log(`Probing ${url}...`);
        results.push(await probe(url));
    }

    fs.writeFileSync('subdomain_diag.json', JSON.stringify(results, null, 2));
    console.log("Done.");
}

run();
