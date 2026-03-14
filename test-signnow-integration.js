const { createSigningRequest } = require('./actions/leegality');

async function test() {
    process.env.SIGNNOW_AUTH_TOKEN = "e1601cb366199f5aafc2a98dc2dc96588de8d2a0f6e262ef473159e49dae8c37";
    
    // We can't really run Next.js server actions easily outside of Next context because of `auth()` from Clerk.
    console.log("Implementation saved. To test this, click the 'Generate Notice & Sign' button in the app.");
}
test();
