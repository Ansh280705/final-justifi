const FormData = require('form-data');
const https = require('https');

const token = "e1601cb366199f5aafc2a98dc2dc96588de8d2a0f6e262ef473159e49dae8c37";
const pdfBuffer = Buffer.from('JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+', 'base64');

async function uploadDocument() {
  return new Promise((resolve, reject) => {
    const form = new FormData();
    form.append('file', pdfBuffer, {
      filename: 'test.pdf',
      contentType: 'application/pdf'
    });

    const req = https.request({
      hostname: 'api.signnow.com',
      path: '/document',
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        ...form.getHeaders()
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
            resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch {
            resolve({ status: res.statusCode, body: data });
        }
      });
    });

    req.on('error', reject);
    form.pipe(req);
  });
}

async function run() {
  console.log("Uploading document...");
  const res = await uploadDocument();
  console.log("Upload Status:", res.status);
  console.log("Upload Response:", res.body);
}

run();
