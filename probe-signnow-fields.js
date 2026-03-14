const https = require('https');
const FormData = require('form-data');
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
  console.log("1. Uploading...");
  const form = new FormData();
  form.append('file', pdfBuffer, { filename: 'test.pdf', contentType: 'application/pdf' });
  const uploadRes = await makeRequest('/document', 'POST', form, true);
  
  if (uploadRes.status === 200 && uploadRes.body.id) {
     const docId = uploadRes.body.id;
     console.log("2. Adding generic signature field to document", docId);
     
     const fieldsRes = await makeRequest(`/document/${docId}`, 'PUT', {
       texts: [],
       signatures: [
         {
           x: 100,
           y: 100,
           width: 200,
           height: 50,
           page_number: 0,
           role: "Signer",
           required: true
         }
       ]
     });
     
     console.log("Fields Response:", fieldsRes.status, JSON.stringify(fieldsRes.body, null, 2));

     if (fieldsRes.status !== 200) {
         console.log("Trying alternative field format...");
         const altRes = await makeRequest(`/document/${docId}`, 'PUT', {
             fields: [
                 {
                     x: 100,
                     y: 100,
                     width: 200,
                     height: 50,
                     page_number: 0,
                     role: "Signer",
                     required: true,
                     type: "signature"
                 }
             ]
         });
         console.log("Alt Fields Response:", altRes.status, JSON.stringify(altRes.body, null, 2));
     }
  }
}

run();
