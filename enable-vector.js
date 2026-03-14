const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function enableVector() {
  try {
    await prisma.$executeRawUnsafe('CREATE EXTENSION IF NOT EXISTS vector;');
    console.log('pgvector extension enabled successfully (or already exists)');
  } catch (err) {
    console.error('Error enabling pgvector:', err);
  } finally {
    await prisma.$disconnect();
  }
}

enableVector();
