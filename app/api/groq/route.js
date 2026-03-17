import { NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req) {
  try {
    const { messages } = await req.json();

    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "GROQ_API_KEY is not configured in environment variables." },
        { status: 500 }
      );
    }

    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "You are a high-level Legal Intelligence AI. Your purpose is to provide structured, professional, and accurate legal assistance. Use Markdown for clarity (bolding, lists). Always include a standard legal disclaimer that you are an AI and not a lawyer.",
        },
        ...messages,
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 2048,
      top_p: 1,
      stream: false,
    });

    return NextResponse.json({
      content: completion.choices[0]?.message?.content || "",
    });
  } catch (error) {
    console.error("Groq API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch response from AI engine." },
      { status: 500 }
    );
  }
}
