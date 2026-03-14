import 'dotenv/config';
import { createKnowledgeBase, addDocumentToKB, searchLegalKnowledge } from '../actions/rag.js';

async function test() {
  try {
    console.log("1. Creating Knowledge Base...");
    const kbRes = await createKnowledgeBase({
      title: "Indian Penal Code Sample",
      description: "Sample IPC sections for RAG testing",
      category: "Criminal Law"
    });
    
    if (!kbRes.success) {
      console.error("KB Creation Failed:", kbRes.error);
      return;
    }
    const kbId = kbRes.data.id;
    console.log("Created KB:", kbId);
    
    console.log("2. Adding Document Content...");
    const docText = `
      Section 300: Murder. Except in the cases hereinafter excepted, culpable homicide is murder, 
      if the act by which the death is caused is done with the intention of causing death.
      
      Section 302: Punishment for murder. Whoever commits murder shall be punished with death, 
      or imprisonment for life, and shall also be liable to fine.
      
      Section 378: Theft. Whoever, intending to take dishonestly any moveable property out of 
      the possession of any person without that person's consent, moves that property in order 
      to such taking, is said to commit theft.
    `;
    
    const addRes = await addDocumentToKB(kbId, docText);
    console.log("Added doc chunks:", addRes.count);
    
    console.log("3. Testing Semantic Search...");
    const searchRes = await searchLegalKnowledge("What is the punishment for taking property without consent?");
    
    if (searchRes.success) {
      console.log("Search Results:");
      searchRes.data.forEach((r, i) => {
        console.log(`${i+1}. [${r.similarity.toFixed(4)}] ${r.content.substring(0, 100)}...`);
      });
    } else {
      console.error("Search Failed:", searchRes.error);
    }
  } catch (err) {
    console.error("Test error:", err);
  }
}

test();
