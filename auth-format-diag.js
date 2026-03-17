const fs = require('fs');
const https = require('https');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.LEEGALITY_AUTH_TOKEN.trim();

async function probe(url, headers) {
    return new Promise((resolve) => {
        try {
            const parsedUrl = new URL(url);
            const options = {
                hostname: parsedUrl.hostname,
                path: parsedUrl.pathname,
                method: "GET",
                headers: {
                    ...headers,
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                    "Accept": "application/json"
                },
                timeout: 5000
            };

            const req = https.request(options, (res) => {
                let data = '';
                res.on('data', (chunk) => data += chunk);
                res.on('end', () => resolve({ headers: Object.keys(headers), status: res.statusCode, body: data }));
            });

            req.on('error', (e) => resolve({ headers: Object.keys(headers), error: e.message }));
            req.end();
        } catch (e) {
            resolve({ headers: Object.keys(headers), error: e.message });
        }
    });
}

async function run() {
    const url = "https://sandbox.leegality.com/api/v3.0/workflow/list";
    const authVariants = [
        { "X-Auth-Token": token },
        { "Authorization": `Bearer ${token}` },
        { "X-Token": token },
        { "Auth-Token": token }
    ];

    const results = [];
    for (const variant of authVariants) {
        console.log(`Testing variant ${JSON.stringify(Object.keys(variant))}...`);
        results.push(await probe(url, variant));
    }

    fs.writeFileSync('auth_format_results.json', JSON.stringify(results, null, 2));
    console.log("Done.");
}

run();
