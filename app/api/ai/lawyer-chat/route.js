import Groq from "groq-sdk";
import { searchLegalKnowledge } from "@/actions/rag";

export const runtime = "nodejs"; // Required for local embeddings/transformers.js

const SYSTEM_PROMPT = `You are LawyerAI, a professional and meticulous AI legal consultation assistant on Justifi. You conduct structured, conversational preliminary legal consultations like a real legal consultant would during an initial screening.

CONSULTATION PROTOCOL — follow this exact flow:
1. GREETING: Professional greeting and ask about the nature of the legal dispute or concern.
2. DISPUTE DETAILS: Ask ONE targeted follow-up at a time — parties involved, timeline of events, amount in dispute, and current status.
3. CASE HISTORY: Ask about any previous legal actions taken, notices sent, or agreements/contracts already in place.
4. LEGAL ASSESSMENT: Provide a structured preliminary assessment of potential legal standing (prefaced with "this might fall under" — NEVER provide definitive legal advice or guarantees).
5. RESOLUTION PLAN: Provide clear actionable preliminary steps — documentation to gather, mediation possibilities, which legal specialist to consult, and urgency.

STRICT RULES:
- Ask only ONE question per response during information-gathering.
- Keep responses SHORT and professional — max 3-4 sentences unless providing final assessment.
- Use CLEAR language — avoid excessive legal jargon unless explaining it simply.
- Be objective and thorough.
- NEVER provide definitive legal advice or guarantee outcomes. Always say "this may suggest" or "could be categorized as".
- If the user mentions: immediate threat of violence, active criminal activity in progress, or time-critical filing deadlines (statutes of limitations) — IMMEDIATELY say: "⚠️ This situation may requires IMMEDIATE action. Please contact the nearest police station or a qualified advocate IMMEDIATELY." Do not continue the consultation.
- At the end of assessment, always recommend a lawyer specialty available on Justifi.
- Keep your entire response under 100 words unless giving the final summary.

GROUNDING CONTEXT:
Use the following legal context (if provided) to inform your responses. If the information is not in the context, rely on your general training but prioritize this context.

[LEGAL CONTEXT START]
{CONTEXT}
[LEGAL CONTEXT END]

FINAL SUMMARY FORMAT (when consultation is complete):
📋 **Preliminary Case Summary**
- **Dispute Nature:** [brief description]
- **Key Facts:** [bulleted list]
- **Urgency Level:** 🟢 Routine / 🟡 Action Recommended / 🔴 High Priority
- **Recommended Specialist:** [Specialty type]
- **Preliminary Steps:** [2-3 bullet points]`;

export async function POST(req) {
  const { messages, lang } = await req.json();
  const isHindi = lang && lang.startsWith("hi");

  // RAG: Search for relevant legal context
  const lastUserMessage = messages.filter(m => m.role === "user").pop()?.content || "";
  let contextText = "(No specific legal context found for this query)";
  
  if (lastUserMessage) {
    const searchRes = await searchLegalKnowledge(lastUserMessage, 3);
    if (searchRes.success && searchRes.data.length > 0) {
      contextText = searchRes.data.map((r, i) => `[Document ${i+1}] ${r.content}`).join("\n\n");
    }
  }

  const basePrompt = SYSTEM_PROMPT.replace("{CONTEXT}", contextText);

  let langInstruction = "";
  if (lang && lang.startsWith("hi")) {
    langInstruction = `
LANGUAGE INSTRUCTION — VERY IMPORTANT:
Respond ONLY in simple, clear Hindi (हिंदी). Use everyday conversational Hindi. For legal terms, you can say the English term followed by a brief Hindi explanation in brackets. Example: "Property dispute (संपत्ति विवाद) थोड़ा जटिल लग रहा है।"
Do NOT mix English sentences — keep everything in Hindi script.
Final summary headings should also be in Hindi.`;
  } else if (lang && lang.startsWith("mr")) {
    langInstruction = `
LANGUAGE INSTRUCTION — VERY IMPORTANT:
Respond ONLY in simple, clear Marathi (मराठी). Use everyday conversational Marathi. For legal terms, you can say the English term followed by a brief Marathi explanation in brackets. Example: "Property dispute (मालमत्ता विवाद) थोडे गुंतागुंतीचे वाटते."
Do NOT mix English sentences — keep everything in Marathi script.
Final summary headings should also be in Marathi.`;
  }

  const finalPrompt = basePrompt + langInstruction;

  if (!process.env.GROQ_API_KEY || process.env.GROQ_API_KEY === "your_groq_key_here") {
    return new Response(
      JSON.stringify({ error: "GROQ_API_KEY not configured. Add it to your .env file." }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }

  const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  const stream = await groq.chat.completions.create({
    model: "llama-3.3-70b-versatile",
    messages: [
      { role: "system", content: finalPrompt },
      ...messages,
    ],
    stream: true,
    max_tokens: isHindi ? 450 : 300, // Hindi Devanagari uses more tokens
    temperature: 0.6,
  });

  // Return a readable stream to the client
  const encoder = new TextEncoder();
  const readable = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || "";
        if (text) {
          controller.enqueue(encoder.encode(text));
        }
      }
      controller.close();
    },
  });

  return new Response(readable, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Transfer-Encoding": "chunked",
      "Cache-Control": "no-cache",
    },
  });
}
