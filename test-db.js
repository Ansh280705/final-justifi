const { db } = require('./lib/prisma');

async function testQuery() {
  try {
    const user = await db.user.findFirst({
      select: { city: true }
    });
    console.log('SUCCESS: "city" column accessible.');
  } catch (error) {
    console.error('FAILURE:', error.message);
  } finally {
    process.exit();
  }
}

testQuery();
