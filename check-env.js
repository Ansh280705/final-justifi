const fs = require('fs');
const dotenv = require('dotenv');
const env = fs.readFileSync('.env', 'utf8');
const lines = env.split('\n');

for (const line of lines) {
    if (line.startsWith('LEEGALITY_')) {
        const [key, val] = line.split('=');
        console.log(`${key}: [${val}]`);
        console.log(`${key} bytes:`, Buffer.from(val || "").toString('hex'));
    }
}
