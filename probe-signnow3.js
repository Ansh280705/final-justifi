const FormData = require('form-data');
const https = require('https');

const token = "e1601cb366199f5aafc2a98dc2dc96588de8d2a0f6e262ef473159e49dae8c37";
const pdfBuffer = Buffer.from('JVBERi0xLjQKJcOkw7zDtsOfCjIgMCBvYmoKPDwvTGVuZ3RoIDMgMCBSL0ZpbHRlci9GbGF0ZURlY29kZT4+', 'base64');

function makeRequest(path, method = "GET", body = null, isMultipart = false) {
  return new Promise((resolve, reject) => {
    let headers = { 'Authorization': `Bearer ${token}` };
    if (!isMultipart) {
        headers['Content-Type'] = 'application/json';
        headers['Accept'] = 'application/json';
    } else {
        headers = { ...headers, ...body.getHeaders() };
    }

    const req = https.request({
      hostname: 'api.signnow.com',
      path: path,
      method: method,
      headers: headers
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); } 
        catch { resolve({ status: res.statusCode, body: data }); }
      });
    });

    req.on('error', reject);
    if (isMultipart) body.pipe(req);
    else if (body) { req.write(JSON.stringify(body)); req.end(); }
    else req.end();
  });
}

async function run() {
  console.log("1. Uploading document...");
  const form = new FormData();
  form.append('file', pdfBuffer, { filename: 'test.pdf', contentType: 'application/pdf' });
  const uploadRes = await makeRequest('/document', 'POST', form, true);
  console.log("Upload:", uploadRes.status, uploadRes.body.id);
  
  if (uploadRes.status === 200 && uploadRes.body.id) {
     const docId = uploadRes.body.id;
     
     console.log("2. Creating Invite link...");
     // In signNow, to get a simple URL you can generate a freeform invite link:
     const inviteRes = await makeRequest(`/document/${docId}/invite`, 'POST', {
       to: [{ email: "test@example.com", role_id: "", role: "Signer", order: 1 }],
       from: "admin@justifi.in"
     });
     
     console.log("Invite:", inviteRes.status, inviteRes.body);

     console.log("Alternatively, creating an Embedded signing link (preferred):");
     // Usually, embedded signing requires creating a document with fields first.
     // Let's see if generic /link works
     const linkRes = await makeRequest('/link', 'POST', {
        document_id: docId
     });
     console.log("Link:", linkRes.status, linkRes.body);
  }
}

run();
