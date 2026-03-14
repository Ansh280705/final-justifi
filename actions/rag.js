"use server";

import { db as prisma } from "../lib/prisma";
import { generateEmbedding } from "../lib/rag/embeddings";
import { v4 as uuidv4 } from "uuid";

/**
 * Creates a new Legal Knowledge collection.
 */
export async function createKnowledgeBase(data) {
  try {
    if (!prisma.legalKnowledge) {
       return { success: false, error: "Knowledge Base feature is temporarily disabled." };
    }
    const kb = await prisma.legalKnowledge.create({
      data: {
        title: data.title,
        description: data.description,
        category: data.category
      }
    });
    return { success: true, data: kb };
  } catch (error) {
    console.error("Error creating KnowledgeBase:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Fetches all Knowledge Base collections.
 */
export async function getKnowledgeBases() {
  try {
    // Check if the model exists in the prisma client to avoid hard crashes
    if (!prisma.legalKnowledge) {
      console.warn("LegalKnowledge model is temporarily disabled in schema.");
      return { success: true, data: [] };
    }

    const kbs = await prisma.legalKnowledge.findMany({
      include: {
        _count: {
          select: { chunks: true }
        }
      },
      orderBy: { createdAt: 'desc' }
    });
    return { success: true, data: kbs };
  } catch (error) {
    console.error("Error fetching KnowledgeBases:", error);
    return { success: true, data: [] }; // Return empty data instead of error
  }
}

/**
 * Chunks a document and adds it to the Knowledge Base with embeddings.
 */
export async function addDocumentToKB(kbId, text) {
  try {
    if (!prisma.legalKnowledge) {
        return { success: false, error: "Feature disabled" };
    }
    console.log(`Processing document for KB: ${kbId}`);
    
    // 1. Simple Chunking (500 chars with 50 char overlap)
    const chunks = chunkText(text, 500, 50);
    console.log(`Generated ${chunks.length} chunks`);
    
    // 2. Process each chunk
    for (const content of chunks) {
      if (!content.trim()) continue;
      
      const embedding = await generateEmbedding(content);
      const id = uuidv4();
      
      // 3. Raw insert for vector storage (pgvector)
      // We use the [v1, v2, ...] string format for pgvector
      const vectorString = `[${embedding.join(',')}]`;
      
      await prisma.$executeRawUnsafe(
        `INSERT INTO "KnowledgeChunk" (id, content, "knowledgeBaseId", embedding, "createdAt") 
         VALUES ($1, $2, $3, $4::vector, NOW())`,
        id, content, kbId, vectorString
      );
    }
    
    return { success: true, count: chunks.length };
  } catch (error) {
    console.error("Error adding document chunks:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Performs a semantic search across all knowledge chunks.
 */
export async function searchLegalKnowledge(query, limit = 5) {
  try {
    if (!prisma.knowledgeChunk) {
        return { success: true, data: [] };
    }
    const embedding = await generateEmbedding(query);
    const vectorString = `[${embedding.join(',')}]`;
    
    // Semantic search using cosine distance (<=>)
    // We multiply by 100 to get a percentage-like score but 1 - distance is standard
    const results = await prisma.$queryRawUnsafe(
      `SELECT content, 1 - (embedding <=> $1::vector) as similarity 
       FROM "KnowledgeChunk" 
       ORDER BY embedding <=> $1::vector 
       LIMIT $2`,
      vectorString, limit
    );
    
    return { success: true, data: results };
  } catch (error) {
    console.error("Error searching knowledge:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Helper to split text into chunks.
 */
function chunkText(text, size, overlap) {
  const chunks = [];
  let index = 0;
  
  // Clean text of excessive whitespace
  const cleanText = text.replace(/\s+/g, ' ').trim();
  
  while (index < cleanText.length) {
    const end = Math.min(index + size, cleanText.length);
    chunks.push(cleanText.slice(index, end));
    
    if (end === cleanText.length) break;
    index += (size - overlap);
  }
  
  return chunks;
}
