import { NextResponse } from "next/server";
import { Groq } from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

// System prompts for different phases of the dispute
const INTAKE_PROMPT = `You are Justifi, an expert AI Legal Mediator. 
Your goal is to interview a user who is filing a dispute to gather necessary facts.
The user has provided a brief initial description.
You must ask exactly ONE clarifying question at a time to keep it conversational.
Ask about 3-4 total questions before concluding.
When you have enough information to write a legal notice and determine legal standing, output only the word: "ANALYSIS_READY".
Keep your tone empathetic, professional, and objective.`;

const ANALYSIS_PROMPT = `You are Justifi, a top-tier Senior Legal Advocate in India.
Review the dispute transcript and provide a structured Legal Analysis.
Format your response exactly like this (use markdown):
## Summary of Facts
[Brief summary of the dispute based on user's answers]

## Legal Standing & Rights
[Explanation of the user's rights under applicable Indian laws, citing specific acts (e.g., Consumer Protection Act, Indian Contract Act)]

## Potential Risks
[Any weaknesses in the case or potential counter-arguments]

## Recommended Next Steps
[Clear steps to resolve this, usually starting with sending a Formal Legal Notice]`;

const NOTICE_PROMPT = `You are Justifi, an expert litigator in India.
Generate a formal, professional Legal Notice based on the provided dispute transcript.
The notice should be intimidating but strictly legal and factual.
Use standard Indian legal phrasing.
It must include:
1. Date
2. "Under Instructions from my client..."
3. The specific allegations/breach of duty
4. A demand for remedy (e.g., refund, compensation)
5. A deadline to respond (e.g., 15 days) before legal action is initiated.

Do NOT include placeholders for things you already know (like the user's name or the core issue).
Format exactly as a text document (no markdown conversational filler).`;

export async function POST(req) {
  try {
    const { phase, category, description, history, complainantName, opponentName } = await req.json();

    if (!phase) {
      return NextResponse.json({ error: "Missing phase" }, { status: 400 });
    }

    if (phase === "INTAKE") {
      const messages = [
        { role: "system", content: INTAKE_PROMPT },
        { role: "user", content: `My name is ${complainantName}. I am filing a ${category} dispute. Initial description: ${description}` },
        ...history.map(msg => ({
          role: msg.role === "ai" ? "assistant" : "user",
          content: msg.content
        }))
      ];

      const completion = await groq.chat.completions.create({
        messages,
        model: "llama-3.3-70b-versatile",
        temperature: 0.3,
      });

      return NextResponse.json({ reply: completion.choices[0].message.content });
    }

    if (phase === "ANALYZE") {
      const messages = [
        { role: "system", content: ANALYSIS_PROMPT },
        { 
          role: "user", 
          content: `Dispute Category: ${category}\n\nTranscript of my story:\n` + 
          history.map(h => `${h.role}: ${h.content}`).join("\n")
        }
      ];

      const completion = await groq.chat.completions.create({
        messages,
        model: "llama-3.3-70b-versatile",
        temperature: 0.2, // Low temp for factual analysis
      });

      return NextResponse.json({ analysis: completion.choices[0].message.content });
    }

    if (phase === "NOTICE") {
      const messages = [
        { role: "system", content: NOTICE_PROMPT },
        { 
          role: "user", 
          content: `Client Name: ${complainantName}\nOpposing Party Name (approximate): ${opponentName || "[Opponent Name]"}\nCategory: ${category}\n\nTranscript of my story:\n` + 
          history.map(h => `${h.role}: ${h.content}`).join("\n")
        }
      ];

      const completion = await groq.chat.completions.create({
        messages,
        model: "llama-3.3-70b-versatile",
        temperature: 0.4,
      });

      return NextResponse.json({ notice: completion.choices[0].message.content });
    }

    return NextResponse.json({ error: "Invalid phase" }, { status: 400 });

  } catch (error) {
    console.error("Groq AI Error:", error);
    return NextResponse.json({ error: "Failed to generate AI response: " + error.message }, { status: 500 });
  }
}
