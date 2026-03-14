const { pipeline } = require('@xenova/transformers');

async function test() {
  console.log("Loading model...");
  const extractor = await pipeline('feature-extraction', 'Xenova/all-MiniLM-L6-v2');
  
  const text = "Hello world";
  console.log(`Generating embedding for: "${text}"`);
  
  const output = await extractor(text, { pooling: 'mean', normalize: true });
  const vector = Array.from(output.data);
  
  console.log(`Vector length: ${vector.length}`);
  console.log(`First 5 values: ${vector.slice(0, 5)}`);
}

test();
