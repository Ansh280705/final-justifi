const fs = require('fs');
const http = require('https');
const dotenv = require('dotenv');
dotenv.config();

const token = process.env.LEEGALITY_AUTH_TOKEN.trim();
const baseUrl = process.env.LEEGALITY_BASE_URL.trim().replace(/\/$/, "");

async function test(options) {
    return new Promise((resolve) => {
        const req = http.request(options.url, {
            method: options.method || 'GET',
            headers: options.headers
        }, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => {
                resolve({
                    status: res.statusCode,
                    headers: res.headers,
                    body: data
                });
            });
        });
        req.on('error', (e) => resolve({ error: e.message }));
        if (options.body) req.write(JSON.stringify(options.body));
        req.end();
    });
}

async function run() {
    const results = [];
    const profileId = process.env.LEEGALITY_PROFILE_ID.trim();
    
    const urlPermutations = [
        "https://sandbox.leegality.com/api/v3.0/document/create",
        "https://sandbox.leegality.com/api/v3.0/workflow/run",
        "https://sandbox.leegality.com/api/v3.1/document/create",
        "https://sandbox.leegality.com/api/v3.1/workflow/run",
        "https://sandbox.leegality.com/v3.0/workflow/run"
    ];

    for (const url of urlPermutations) {
        results.push({
            name: `Auth-as-Bearer on ${url}`,
            res: await test({
                url: url,
                method: "POST",
                headers: { 
                    "Authorization": token, 
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "User-Agent": "Mozilla/5.0"
                },
                body: {
                    profileId: profileId,
                    file: { name: "test.pdf", content: "JVBERi0xLjQKJ...(placeholder)" },
                    invitees: [{ name: "Test", email: "test@example.com" }]
                }
            })
        });
    }

    fs.writeFileSync('diag_results.json', JSON.stringify(results, null, 2));
    console.log("Done. Results in diag_results.json");
}

run();
