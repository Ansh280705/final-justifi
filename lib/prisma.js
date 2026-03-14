// lib/prisma.js [REFRESHED]

// Construct standard PrismaClient
import { PrismaClient } from '@prisma/client';

export const db = globalThis.db || new PrismaClient();

// Reuse PrismaClient in development to avoid multiple connections
if (process.env.NODE_ENV !== 'production') {
  globalThis.db = db;
}