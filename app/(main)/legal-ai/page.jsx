"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import dynamic from "next/dynamic";
import { Mic, Send, Bot, User, Scale, FileText, AlertCircle, Loader2 } from "lucide-react";
import { useVoice } from "@/hooks/useVoice";

// Dynamic import for ReactMarkdown to handle ESM/SSR issues
const ReactMarkdown = dynamic(() => import("react-markdown").then(mod => mod.default), { 
  ssr: false,
  loading: () => <div className="animate-pulse h-4 bg-gray-100 rounded w-3/4" />
});

const QUICK_ACTIONS = [
  { label: "Contract Review", icon: <FileText size={16} />, prompt: "Assess this contract for primary risks: " },
  { label: "Risk Analysis", icon: <AlertCircle size={16} />, prompt: "Identify potential legal risks in this scenario: " },
  { label: "Legal Research", icon: <Scale size={16} />, prompt: "Research the primary legal precedents for: " },
];

const BackgroundEffect = () => (
  <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-[#F9FAFB]">
    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00C896]/5 blur-[120px] rounded-full animate-pulse" />
    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full animate-pulse delay-700" />
    {/* Subtle Grid effect */}
    <div className="absolute inset-0 opacity-[0.4] bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px]"></div>
  </div>
);

export default function LegalAIChat() {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content: "Welcome to **Justifi Intelligence**. I am your dedicated AI legal advocate. How can I assist you with your professional inquiries today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef(null);
  const sendMessageRef = useRef(null);

  // 1. handleTranscript (uses ref to avoid dependency on sendMessage)
  const handleTranscript = useCallback((transcript) => {
    setInput(transcript);
    if (sendMessageRef.current) sendMessageRef.current(transcript);
  }, []);

  // 2. useVoice (provides speak)
  const { isListening, startListening, speak } = useVoice(handleTranscript);

  // 3. sendMessage (uses speak)
  const sendMessage = useCallback(async (text = input) => {
    if (!text.trim() || isLoading) return;

    const userMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/groq", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      if (data.error) throw new Error(data.error);

      const aiMessage = { role: "assistant", content: data.content };
      setMessages((prev) => [...prev, aiMessage]);
      speak(data.content.replace(/[#*`]/g, ""));
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "I encountered an error. Please check your connection and try again." },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading, messages, speak]);

  // 4. Connect ref to function
  useEffect(() => {
    sendMessageRef.current = sendMessage;
  }, [sendMessage]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="relative min-h-screen bg-[#F9FAFB] text-gray-900 selection:bg-[#00C896]/20 font-sans overflow-hidden">
      <BackgroundEffect />

      {/* Header */}
      <header className="relative z-20 px-6 py-5 flex items-center justify-between border-b border-gray-200 backdrop-blur-xl bg-white/70 shadow-sm">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[#00C896] rounded-[10px] shadow-[0_0_20px_rgba(0,200,150,0.2)] transition-transform hover:scale-105">
              <Scale className="text-white" size={20} />
            </div>
            <h1 className="text-lg font-black tracking-tight uppercase text-gray-900">
              Justifi <span className="text-[#00C896]">Intelligence</span>
            </h1>
          </div>
          
          <div className="hidden sm:flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-[0.2em] font-bold bg-gray-50 px-4 py-2 rounded-full border border-gray-100">
            <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full animate-pulse"></span>
            Secure Neural Link
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <main className="relative z-10 max-w-[750px] mx-auto h-[calc(100vh-160px)] flex flex-col p-4 md:p-6">
        <div 
          ref={scrollRef}
          className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-hide mb-6 pt-4"
        >
          <AnimatePresence initial={false}>
            {messages.map((msg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`flex gap-4 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
              >
                {/* Avatar */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 border transition-all ${
                  msg.role === "assistant" 
                    ? "bg-white text-[#00C896] border-gray-200 shadow-sm" 
                    : "bg-[#00C896] text-white border-transparent shadow-md"
                }`}>
                  {msg.role === "assistant" ? <Bot size={20} /> : <User size={20} />}
                </div>

                {/* Message Bubble */}
                <div className={`relative max-w-[85%] rounded-[24px] px-5 py-4 text-[15px] leading-relaxed transition-all shadow-sm ${
                  msg.role === "assistant" 
                    ? "bg-white text-gray-800 border border-gray-100 shadow-[0_2px_15px_rgba(0,0,0,0.02)]" 
                    : "bg-[#00C896] text-white font-medium shadow-[0_8px_20px_rgba(0,200,150,0.15)]"
                }`}>
                  <div className={`prose max-w-none prose-sm prose-p:leading-relaxed ${msg.role === 'user' ? 'prose-invert text-white' : 'text-gray-800'}`}>
                    <ReactMarkdown>
                      {msg.content || ""}
                    </ReactMarkdown>
                  </div>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex gap-4"
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-[#00C896] border border-gray-200 shadow-sm">
                  <Bot size={20} />
                </div>
                <div className="bg-white rounded-[24px] px-6 py-5 border border-gray-100 flex gap-1.5 items-center shadow-sm">
                  <div className="w-1.5 h-1.5 bg-[#00C896]/40 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 bg-[#00C896]/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 bg-[#00C896] rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Input & Controls */}
        <div className="space-y-4 pt-2">
          {/* Quick Actions */}
          {messages.length < 3 && (
            <div className="flex flex-wrap gap-2 justify-center">
              {QUICK_ACTIONS.map((action, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setInput(action.prompt);
                    sendMessage(action.prompt);
                  }}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-gray-50 border border-gray-200 text-[11px] font-bold text-gray-500 hover:text-[#00C896] transition-all duration-300 shadow-sm hover:shadow-md backdrop-blur-sm"
                >
                  {action.icon}
                  {action.label}
                </button>
              ))}
            </div>
          )}

          {/* Input Bar */}
          <div className="relative group max-w-2xl mx-auto w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00C896]/10 to-blue-500/10 rounded-full blur opacity-0 group-focus-within:opacity-100 transition duration-500"></div>
            <div className="relative flex items-center gap-2 p-2 rounded-full bg-white border border-gray-200 shadow-[0_10px_40px_rgba(0,0,0,0.04)] transition-all group-focus-within:border-[#00C896]/30 group-focus-within:shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
              <button
                onClick={startListening}
                className={`ml-1 p-3 rounded-full transition-all duration-300 ${
                  isListening 
                    ? "bg-[#00C896] text-white shadow-[0_0_20px_rgba(0,200,150,0.4)] scale-110" 
                    : "text-gray-400 hover:text-[#00C896] hover:bg-gray-50"
                }`}
              >
                <Mic size={20} className={isListening ? "animate-pulse" : ""} />
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                placeholder="Describe your legal concern..."
                className="flex-1 bg-transparent border-none focus:ring-0 text-[15px] px-2 placeholder:text-gray-300 text-gray-800"
              />
              
              <button
                onClick={() => sendMessage()}
                disabled={!input.trim() || isLoading}
                className="p-3 rounded-full bg-[#00C896] text-white hover:bg-[#00DDA6] transition-all disabled:opacity-30 disabled:grayscale shadow-lg transform active:scale-95"
              >
                {isLoading ? <Loader2 size={20} className="animate-spin" /> : <Send size={20} />}
              </button>
            </div>
          </div>
          
          <p className="text-[9px] text-center text-gray-400 uppercase tracking-[0.3em] font-black">
            Powered by Justifi Neural Engine • End-to-End Encrypted
          </p>
        </div>
      </main>

      <style jsx global>{`
        .prose p { margin-bottom: 0.5rem; }
        .prose ul { list-style-type: disc; padding-left: 1.25rem; margin-bottom: 0.5rem; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
