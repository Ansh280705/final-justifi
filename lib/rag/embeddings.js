import { pipeline } from '@xenova/transformers';

class EmbeddingPipeline {
  static instance = null;

  static async getInstance() {
    if (this.instance === null) {
      this.instance = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
    }
    return this.instance;
  }
}

export async function generateEmbedding(text) {
  try {
    const extractor = await EmbeddingPipeline.getInstance();
    const output = await extractor(text, { pooling: 'mean', normalize: true });
    
    // Convert Float32Array to regular Array for Prisma/SQL
    return Array.from(output.data);
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}
