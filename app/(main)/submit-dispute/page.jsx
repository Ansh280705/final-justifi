"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2, ArrowRight, BrainCircuit, ShieldAlert, Send, FileText, Bot } from "lucide-react";
import { createDispute, saveAIQuestions, saveAIAnalysis, saveLegalNotice, updateDisputeStatus } from "@/actions/dispute";
import { useUser } from "@clerk/nextjs";
import ReactMarkdown from "react-markdown";

export default function SubmitDisputePage() {
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [disputeId, setDisputeId] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    complainantName: "",
    complainantEmail: "",
    complainantPhone: "",
    category: "",
    description: "",
  });

  // Chat State
  const [chatHistory, setChatHistory] = useState([]);
  const [chatInput, setChatInput] = useState("");
  const chatEndRef = useRef(null);

  // Analysis & Notice State
  const [analysis, setAnalysis] = useState("");
  const [noticeDraft, setNoticeDraft] = useState("");
  const [opponentName, setOpponentName] = useState("");
  const [opponentEmail, setOpponentEmail] = useState("");

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        complainantName: user.fullName || "",
        complainantEmail: user.primaryEmailAddress?.emailAddress || "",
      }));
    }
  }, [user]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chatHistory]);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // Step 1: Submit Initial Details
  const submitInitialDetails = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));

    const res = await createDispute(data);
    if (res?.success) {
      setDisputeId(res.disputeId);
      setStep(2);
      // Trigger first AI message immediately
      triggerAIPrompt([{ role: "user", content: `I need help with a ${formData.category} dispute. Here are the initial details: ${formData.description}` }]);
    } else {
      alert("Failed to create dispute: " + res?.error);
    }
    setLoading(false);
  };

  // Step 2: AI Intake Chat
  const triggerAIPrompt = async (history) => {
    try {
      setLoading(true);
      const res = await fetch("/api/dispute-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phase: "INTAKE",
          category: formData.category,
          description: formData.description,
          complainantName: formData.complainantName,
          history
        }),
      });

      const data = await res.json();
      if (data.reply) {
        if (data.reply.includes("ANALYSIS_READY")) {
          // AI knows enough, move to analysis phase
          await saveAIQuestions(disputeId, history);
          setStep(3);
          generateAnalysis(history);
        } else {
          setChatHistory((prev) => [...prev, { role: "ai", content: data.reply }]);
        }
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSendMessage = () => {
    if (!chatInput.trim() || loading) return;
    const newMsg = { role: "user", content: chatInput };
    const newHistory = [...chatHistory, newMsg];
    setChatHistory(newHistory);
    setChatInput("");
    triggerAIPrompt(newHistory);
  };

  // Step 3: Analysis
  const generateAnalysis = async (history) => {
    try {
      setLoading(true);
      const res = await fetch("/api/dispute-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phase: "ANALYZE",
          category: formData.category,
          history
        }),
      });
      const data = await res.json();
      if (data.analysis) {
        setAnalysis(data.analysis);
        await saveAIAnalysis(disputeId, data.analysis);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Step 4: Notice Generation
  const generateNotice = async () => {
    try {
      setLoading(true);
      setStep(4);
      const res = await fetch("/api/dispute-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phase: "NOTICE",
          category: formData.category,
          complainantName: formData.complainantName,
          opponentName: opponentName,
          history: chatHistory
        }),
      });
      const data = await res.json();
      if (data.notice) {
        setNoticeDraft(data.notice);
        await saveLegalNotice(disputeId, data.notice);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // Step 5: Send Notice
  const sendNoticeRequest = async () => {
    try {
      setLoading(true);
      // Save opponent details first
      await fetch('/api/dispute-opponent', { // We'll need a quick action or route for this
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ disputeId, opponentName, opponentEmail })
      });
      
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          disputeId,
          type: "LEGAL_NOTICE"
        })
      });
      if (res.ok) {
        router.push(`/dispute/${disputeId}`);
      } else {
        alert("Failed to send email");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };


  if (!isLoaded) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin h-8 w-8 text-emerald-600"/></div>;

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-3xl mx-auto px-4">
        
        {/* Progress Bar */}
        <div className="mb-8 relative">
          <div className="flex justify-between mb-2">
            {["Details", "Interview", "Analysis", "Notice"].map((label, i) => (
              <span key={i} className={`text-xs font-semibold uppercase ${step >= i+1 ? 'text-emerald-600' : 'text-gray-400'}`}>
                {label}
              </span>
            ))}
          </div>
          <div className="h-2 bg-gray-200 rounded-full w-full">
            <div 
              className="h-2 bg-emerald-500 rounded-full transition-all duration-500 ease-in-out" 
              style={{ width: `${((step - 1) / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* STEP 1: INITIAL DETAILS */}
        {step === 1 && (
          <Card className="border-emerald-100 shadow-md">
            <CardHeader className="bg-emerald-50/50 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><ShieldAlert size={24}/></div>
                <div>
                  <CardTitle className="text-xl">File a New Dispute</CardTitle>
                  <CardDescription>Tell us the basic facts. Our AI will guide you through the rest.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <form onSubmit={submitInitialDetails}>
              <CardContent className="space-y-4 pt-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="complainantName">Your Full Name</Label>
                    <Input id="complainantName" value={formData.complainantName} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="complainantEmail">Your Email (for CCs)</Label>
                    <Input id="complainantEmail" type="email" value={formData.complainantEmail} onChange={handleInputChange} required />
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="complainantPhone">Phone Number</Label>
                    <Input id="complainantPhone" type="tel" value={formData.complainantPhone} onChange={handleInputChange} required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="category">Dispute Category</Label>
                    <Select onValueChange={(v) => setFormData(p => ({...p, category: v}))} required>
                      <SelectTrigger><SelectValue placeholder="Select Category..." /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Consumer Complaint">Consumer Complaint</SelectItem>
                        <SelectItem value="Property/Tenant Dispute">Property/Tenant Dispute</SelectItem>
                        <SelectItem value="Employment/Labor">Employment/Labor</SelectItem>
                        <SelectItem value="Breach of Contract">Breach of Contract</SelectItem>
                        <SelectItem value="Family/Matrimonial">Family/Matrimonial</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="description">Brief Initial Description</Label>
                  <Textarea 
                    id="description" 
                    placeholder="E.g., I bought a fridge from XYZ Electronics but it was defective. They refuse to replace it." 
                    rows={4}
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                  />
                  <p className="text-xs text-gray-500">Don't worry about perfect details; our AI will ask clarifying questions.</p>
                </div>
              </CardContent>
              <CardFooter className="justify-end border-t border-gray-100 pt-4 bg-gray-50/50">
                <Button type="submit" disabled={loading} className="bg-emerald-600 hover:bg-emerald-700">
                  {loading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Start AI Intake"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </form>
          </Card>
        )}

        {/* STEP 2: AI INTAKE CHAT */}
        {step === 2 && (
          <Card className="border-emerald-100 shadow-md flex flex-col h-[600px]">
            <CardHeader className="bg-emerald-50/50 border-b border-emerald-100 flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><Bot size={24}/></div>
                <div>
                  <CardTitle className="text-xl">AI Fact-Finding</CardTitle>
                  <CardDescription>Justifi AI needs a few more details to assess your legal standing.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-4">
              {chatHistory.filter(m => m.role === 'ai' || m.role === 'user').map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-2xl p-3 px-4 ${
                    msg.role === 'user' 
                      ? 'bg-emerald-600 text-white rounded-br-sm' 
                      : 'bg-white border text-gray-800 rounded-bl-sm shadow-sm'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-white border rounded-2xl p-3 px-4 rounded-bl-sm shadow-sm flex items-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin text-emerald-600" />
                    <span className="text-sm text-gray-500 gap-1 flex">AI is typing<span className="animate-pulse">...</span></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </CardContent>
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <Input 
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your answer..."
                  onKeyDown={e => e.key === 'Enter' && handleSendMessage()}
                  disabled={loading}
                />
                <Button onClick={handleSendMessage} disabled={!chatInput.trim() || loading} className="bg-emerald-600">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* STEP 3: ANALYSIS */}
        {step === 3 && (
          <Card className="border-emerald-100 shadow-md">
            <CardHeader className="bg-emerald-50/50 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><BrainCircuit size={24}/></div>
                <div>
                  <CardTitle className="text-xl">Legal Assessment</CardTitle>
                  <CardDescription>Based on your input, here is the AI's legal evaluation of your case.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              {loading && !analysis ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-emerald-600 mb-4" />
                  <h3 className="text-lg font-medium text-gray-900">Analyzing Your Case</h3>
                  <p className="text-gray-500">Cross-referencing Indian Acts and Statutes...</p>
                </div>
              ) : (
                <div className="prose prose-emerald max-w-none text-gray-800">
                  <ReactMarkdown>{analysis}</ReactMarkdown>
                </div>
              )}
            </CardContent>
            {!loading && analysis && (
              <CardFooter className="justify-between border-t border-gray-100 pt-4 bg-gray-50/50">
                <div className="w-1/2 pr-2">
                  <Label>Opponent's Name</Label>
                  <Input value={opponentName} onChange={e => setOpponentName(e.target.value)} placeholder="Name of Person/Company" />
                </div>
                <div className="flex items-end">
                  <Button onClick={generateNotice} disabled={!opponentName} className="bg-emerald-600">
                    Draft Legal Notice <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </CardFooter>
            )}
          </Card>
        )}

        {/* STEP 4: NOTICE DRAFT & SEND */}
        {step === 4 && (
          <Card className="border-emerald-100 shadow-md">
            <CardHeader className="bg-emerald-50/50 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-emerald-100 rounded-lg text-emerald-600"><FileText size={24}/></div>
                <div>
                  <CardTitle className="text-xl">Formal Legal Notice</CardTitle>
                  <CardDescription>Review the drafted notice. Provide the opponent's email to send it immediately.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-4">
              {loading && !noticeDraft ? (
                <div className="py-12 flex flex-col items-center justify-center text-center">
                  <Loader2 className="h-8 w-8 animate-spin text-emerald-600 mb-4" />
                  <p className="text-gray-500">Drafting professional legal notice...</p>
                </div>
              ) : (
                <>
                  <div className="bg-gray-50 border whitespace-pre-wrap p-6 text-sm font-mono text-gray-800 rounded-lg max-h-[400px] overflow-y-auto">
                    {noticeDraft}
                  </div>
                  
                  <div className="pt-4 border-t border-gray-100">
                    <Label>Opponent's Email Address</Label>
                    <div className="flex gap-4 mt-2">
                      <Input 
                        type="email" 
                        value={opponentEmail} 
                        onChange={e => setOpponentEmail(e.target.value)} 
                        placeholder="opponent@example.com" 
                        className="max-w-md"
                      />
                      <Button 
                        onClick={sendNoticeRequest} 
                        disabled={!opponentEmail || loading || !opponentEmail.includes("@")} 
                        className="bg-blue-600 hover:bg-blue-700"
                      >
                        {loading && noticeDraft ? <Loader2 className="animate-spin h-4 w-4 mr-2"/> : <Send className="h-4 w-4 mr-2"/>}
                        Send Formal Notice
                      </Button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">The notice will be emailed directly. You will be CC'd.</p>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        )}

      </div>
    </div>
  );
}
