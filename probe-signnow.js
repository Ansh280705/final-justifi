const https = require('https');

const token = "e1601cb366199f5aafc2a98dc2dc96588de8d2a0f6e262ef473159e49dae8c37";
const docId = "82b94010205c44afbfeaadecb6b143ae6c38255b";

function probe(path, method = "GET", body = null) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'api.signnow.com',
      path: path,
      method: method,
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    };
    
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    
    if (body) req.write(JSON.stringify(body));
    req.end();
  });
}

async function run() {
  console.log("Testing user endpoint...");
  const userRes = await probe('/user');
  console.log("User Status:", userRes.status);
  
  if (userRes.status === 200) {
    console.log("Token works! Testing Document API...");
    const docRes = await probe(`/document/${docId}`);
    console.log("Document Status:", docRes.status);
    console.log("Document info:", docRes.body.substring(0, 500));
  } else {
    console.log("Error:", userRes.body);
  }
}

run();
