const { db } = require('./lib/prisma');

async function debug() {
  console.log('DB object:', db);
  if (db) {
    console.log('Available models:', Object.keys(db).filter(key => !key.startsWith('$') && !key.startsWith('_')));
  }
}

debug();
