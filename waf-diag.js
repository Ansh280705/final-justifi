const https = require('https');
const fs = require('fs');

async function probe(name, headers) {
    return new Promise((resolve) => {
        const url = new URL("https://sandbox.leegality.com/api/v3.0/workflow/list");
        const options = {
            hostname: url.hostname,
            path: url.pathname,
            method: "GET",
            headers: {
                ...headers,
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
                "Accept": "*/*"
            },
            timeout: 5000
        };

        const req = https.request(options, (res) => {
            let data = '';
            res.on('data', (chunk) => data += chunk);
            res.on('end', () => resolve({ name, status: res.statusCode, body: data, server: res.headers.server }));
        });

        req.on('error', (e) => resolve({ name, error: e.message }));
        req.end();
    });
}

async function run() {
    const realToken = "19ecPZmjeaAmguptqCPbRgQk7e98PKGD";
    const fakeToken = "ABCDEFGHIJKLMNOPQRSTUVWXYZ012345";
    
    const tests = [
        { name: "Real Token", headers: { "X-Auth-Token": realToken } },
        { name: "Fake Token", headers: { "X-Auth-Token": fakeToken } },
        { name: "No Token", headers: {} },
        { name: "Alternative Header", headers: { "X-Authorization-Token": realToken } }
    ];

    const results = [];
    for (const t of tests) {
        console.log(`Running ${t.name}...`);
        results.push(await probe(t.name, t.headers));
    }

    fs.writeFileSync('waf_results_fixed.json', JSON.stringify(results, null, 2), 'utf8');
    console.log("Done. Results in waf_results_fixed.json");
}

run();
