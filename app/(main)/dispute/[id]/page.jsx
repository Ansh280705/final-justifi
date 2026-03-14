"use client";

import { useState, useEffect } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, ShieldAlert, Video, Mail, CheckSquare, Clock, BrainCircuit, FileText, MessageSquare } from "lucide-react";
import { getDispute, markResolved, escalateDispute, saveAIQuestions, saveAIAnalysis, saveLegalNotice, saveSettlementAgreement, triggerOpponentPenalty, scheduleMediation, escalateToSpecialist } from "@/actions/dispute";
import { createSigningRequest } from "@/actions/leegality";
import { LegalGateway } from "@/components/LegalGateway";
import { useUser } from "@clerk/nextjs";
import ReactMarkdown from "react-markdown";
import { toast } from "sonner";
import { jsPDF } from "jspdf";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DisputeDashboardPage() {
  const router = useRouter();
  const params = useParams();
  const searchParams = useSearchParams();
  const role = searchParams.get("role"); // "opponent" or null
  const { user, isLoaded } = useUser();
  const [dispute, setDispute] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [isSigningOpen, setIsSigningOpen] = useState(false);
  const [signingUrl, setSigningUrl] = useState(null);
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);
  const [scheduleDate, setScheduleDate] = useState("");
  const [scheduleTime, setScheduleTime] = useState("");

  useEffect(() => {
    async function loadDispute() {
      // If role is opponent, we allow guest access directly to this dispute ID
      if (role !== "opponent" && (!isLoaded || !user)) return;
      
      const res = await getDispute(params.id);
      if (res?.success) {
        setDispute(res.dispute);
      }
      setLoading(false);
    }
    loadDispute();
  }, [params.id, isLoaded, user]);

  const handlePenalty = async () => {
    if (!confirm("Are you sure? This will send a formal penalty warning to the opponent.")) return;
    setActionLoading(true);
    const toastId = toast.loading("Processing penalty...");
    try {
      const res = await triggerOpponentPenalty(dispute.id);
      if (res?.success) {
        setDispute(res.dispute);
        toast.success(`Penalty #${res.dispute.opponentPenaltyCount} recorded!`, { id: toastId });
      } else {
        toast.error(res.error || "Failed to trigger penalty", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred", { id: toastId });
    }
    setActionLoading(false);
  };

  const handleScheduleMeeting = async () => {
    if (!scheduleDate || !scheduleTime) {
      toast.error("Please select both date and time");
      return;
    }

    setActionLoading(true);
    const toastId = toast.loading("Scheduling mediation session...");
    try {
      const res = await scheduleMediation(dispute.id, scheduleDate, scheduleTime);
      if (res?.success) {
        setDispute(res.dispute);
        setIsSchedulingOpen(false);
        toast.success("Mediation session scheduled and links sent!", { id: toastId });
      } else {
        toast.error(res.error || "Failed to schedule", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("An error occurred", { id: toastId });
    }
    setActionLoading(false);
  };

  const handleGenerateMeet = () => {
    setIsSchedulingOpen(true);
  };

  const handleMarkResolved = async () => {
    setActionLoading(true);
    const isOpponent = role === "opponent";
    const res = await markResolved(dispute.id, isOpponent); 
    if (res?.success) {
      setDispute(res.dispute);
    }
    setActionLoading(false);
  };

  const handleEscalate = async () => {
    setActionLoading(true);
    const res = await escalateDispute(dispute.id);
    if (res?.success) {
      setDispute(prev => ({ ...prev, status: `ESCALATED_${res.escalatedTo}` }));
      alert(`Dispute escalated to ${res.escalatedTo} Lawyer`);
    }
    setActionLoading(false);
  };

  const handleEscalateToSpecialist = async () => {
    console.log("handleEscalateToSpecialist triggered");
    if (!confirm("Are you sure? This will escalate your case to a senior legal specialist based on your dispute category.")) {
      console.log("Escalation cancelled by user");
      return;
    }
    
    setActionLoading(true);
    const toastId = toast.loading("Finding a specialist for your case...");
    console.log("Calling escalateToSpecialist action for dispute:", dispute.id);
    
    try {
      const res = await escalateToSpecialist(dispute.id);
      console.log("escalateToSpecialist response:", res);
      
      if (res?.success) {
        setDispute(res.dispute);
        toast.success("Case escalated to a senior specialist!", { id: toastId });
        console.log("Escalation successful, updated dispute:", res.dispute);
      } else {
        toast.error(res.error || "Failed to escalate to specialist", { id: toastId });
        console.log("Escalation failed with error:", res.error);
      }
    } catch (err) {
      console.error("Error in handleEscalateToSpecialist:", err);
      toast.error("An error occurred", { id: toastId });
    }
    setActionLoading(false);
  };

  const handleSendReminder = async () => {
    setActionLoading(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          disputeId: dispute.id,
          type: "LEGAL_NOTICE"
        })
      });
      if (res.ok) {
        alert("Reminder notice sent successfully!");
      } else {
        alert("Failed to send reminder.");
      }
    } catch (err) {
      console.error(err);
    }
    setActionLoading(false);
  };

  const handleGenerateNotice = async () => {
    setActionLoading(true);
    const toastId = toast.loading("Generating Formal Legal Notice...");
    try {
      const res = await fetch("/api/dispute-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phase: "NOTICE",
          category: dispute.category,
          description: dispute.description,
          history: dispute.aiQuestions || [],
          complainantName: dispute.complainantName,
          opponentName: dispute.opponentName
        })
      });
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Server returned non-JSON response: " + text.slice(0, 50));
      }

      if (!res.ok) {
        throw new Error(data.error || `Server Error (${res.status})`);
      }

      if (data.notice) {
        const saveRes = await saveLegalNotice(dispute.id, data.notice);
        if (saveRes.success) {
          setDispute(prev => ({ ...prev, legalNotice: data.notice, status: "NOTICE_SENT" }));
          toast.success("Legal Notice Generated & Sent!", { id: toastId });
        } else {
          toast.error("Notice generated but failed to save: " + saveRes.error, { id: toastId });
        }
      } else {
        toast.error("AI failed to return a notice draft.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to generate notice.", { id: toastId });
    }
    setActionLoading(false);
  };

  const handleGenerateSettlement = async () => {
    setActionLoading(true);
    const toastId = toast.loading("Generating AI Settlement Draft...");
    try {
      const res = await fetch("/api/dispute-ai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phase: "SETTLEMENT",
          category: dispute.category,
          description: dispute.description,
          complainantName: dispute.complainantName || "Complainant",
          opponentName: dispute.opponentName || "Opposing Party",
          history: dispute.aiQuestions || []
        })
      });
      const text = await res.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch (e) {
        throw new Error("Server returned non-JSON response: " + text.slice(0, 50));
      }

      if (!res.ok) {
        throw new Error(data.error || `Server Error (${res.status})`);
      }
      
      if (data.settlement) {
        const saveRes = await saveSettlementAgreement(dispute.id, data.settlement);
        if (saveRes.success) {
          setDispute(prev => ({ ...prev, settlementDraft: data.settlement }));
          toast.success("Settlement Agreement Drafted & Saved!", { id: toastId });
        } else {
          toast.error("Agreement generated but failed to save: " + saveRes.error, { id: toastId });
        }
      } else {
        toast.error("AI failed to return a settlement draft.", { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Failed to generate settlement.", { id: toastId });
    }
    setActionLoading(false);
  };

  const handleLeegalitySign = async () => {
    if (!dispute.settlementDraft) return;
    setActionLoading(true);
    const toastId = toast.loading("Generating Visual Stamp Paper...");
    try {
      // Generate a formal PDF with a visual Stamp Duty header
      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      
      // 1. Draw Stamp Duty Header (Visual Simulation)
      doc.setDrawColor(0, 0, 0);
      doc.setLineWidth(0.5);
      doc.rect(10, 10, pageWidth - 20, 50); // Header box
      
      doc.setFont("helvetica", "bold");
      doc.setFontSize(14);
      doc.text("GOVERNMENT OF NCT OF DELHI / MAHARASHTRA", pageWidth / 2, 20, { align: "center" });
      doc.setFontSize(12);
      doc.text("CERTIFICATE OF STAMP DUTY", pageWidth / 2, 28, { align: "center" });
      
      doc.setFontSize(10);
      doc.setFont("helvetica", "normal");
      doc.text(`Certificate No: JUST-${dispute.id.split('-')[0].toUpperCase()}`, 15, 38);
      doc.text(`Date: ${new Date().toLocaleDateString()}`, 15, 43);
      doc.text(`Stamp Duty Paid By: ${dispute.complainantName}`, 15, 48);
      doc.text(`Second Party: ${dispute.opponentName || "N/A"}`, 15, 53);
      
      doc.line(10, 65, pageWidth - 10, 65); // Divider line
      
      // 2. Add Settlement Text
      const margin = 20;
      const splitText = doc.splitTextToSize(dispute.settlementDraft, 170); // Width of 170mm
      doc.setFont("helvetica", "normal");
      doc.setFontSize(11);
      doc.text(splitText, margin, 80);
      
      const pdfBase64 = doc.output('datauristring').split(',')[1];
      
      // Now using the refactored SignNow-based action
      const res = await createSigningRequest(pdfBase64, "Settlement_Agreement.pdf");
      if (res.success) {
        setSigningUrl(res.signingUrl);
        setIsSigningOpen(true);
        toast.success("Document and visual stamp generated!", { id: toastId });
      } else {
        toast.error(res.error, { id: toastId });
      }
    } catch (err) {
      console.error(err);
      toast.error("Error generating legal document.", { id: toastId });
    }
    setActionLoading(false);
  };

  if (loading || (role !== "opponent" && !isLoaded)) return <div className="min-h-screen flex items-center justify-center"><Loader2 className="animate-spin h-8 w-8 text-emerald-600"/></div>;
  if (!dispute) return <div className="min-h-screen flex items-center justify-center text-red-500">Dispute not found or unauthorized</div>;

  const steps = [
    { id: "INTAKE", label: "AI Intake" },
    { id: "ANALYZED", label: "Legal Analysis" },
    { id: "NOTICE_SENT", label: "Notice Sent" },
    { id: "MEDIATION", label: "Mediation" },
    { id: "RESOLVED", label: "Resolved" }
  ];

  const currentStepIndex = steps.findIndex(s => s.id === dispute.status) >= 0 ? steps.findIndex(s => s.id === dispute.status) : 4; // defaults to end if escalated

  return (
    <div className="min-h-screen bg-transparent pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-navy flex items-center gap-2">
            <ShieldAlert className="text-emerald-600" />
            Dispute Dashboard
          </h1>
          <p className="text-gray-500 mt-1">Manage and track resolution progress for case #{dispute.id.split('-')[0]}</p>
        </div>

        {/* Progress Tracker */}
        <Card className="border-emerald-100 shadow-sm">
          <CardContent className="pt-6">
            <div className="mb-2 relative">
              <div className="flex justify-between mb-2">
                {steps.map((step, i) => (
                  <span key={i} className={`text-xs font-semibold uppercase ${currentStepIndex >= i ? 'text-emerald-600' : 'text-gray-400'}`}>
                    {step.label}
                  </span>
                ))}
              </div>
              <div className="h-2 bg-gray-200 rounded-full w-full relative">
                 <div 
                  className="absolute top-0 left-0 h-2 bg-emerald-500 rounded-full transition-all duration-500" 
                  style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
                ></div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Main Info */}
          <div className="md:col-span-2 space-y-6">
            <Card className="border-emerald-100 shadow-sm">
              <CardHeader className="bg-emerald-50/50 border-b border-emerald-100 pb-4">
                <CardTitle className="text-lg">Case Details</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-500 block">Category</span>
                    <strong className="text-navy">{dispute.category}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Date Filed</span>
                    <strong className="text-navy">{new Date(dispute.createdAt).toLocaleDateString()}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Complainant</span>
                    <strong className="text-navy">{dispute.complainantName}</strong>
                  </div>
                  <div>
                    <span className="text-gray-500 block">Opponent</span>
                    <strong className="text-navy">{dispute.opponentName || "Not Provided"}</strong>
                  </div>
                </div>

                {/* Penalty Tracking Info */}
                {dispute.opponentPenaltyCount > 0 && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-md flex items-center justify-between">
                    <div className="flex items-center gap-2">
                       <ShieldAlert className="h-4 w-4 text-red-600" />
                       <span className="text-sm font-semibold text-red-900">
                         Opponent Penalties: {dispute.opponentPenaltyCount} / 3
                       </span>
                    </div>
                    {dispute.lastPenaltyAt && (
                      <span className="text-[10px] text-red-700">
                        Last penalty: {new Date(dispute.lastPenaltyAt).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                )}

                <div>
                  <span className="text-gray-500 block text-sm">Initial Complaint</span>
                  <p className="text-gray-800 text-sm mt-1 bg-gray-50 p-3 rounded-md border">{dispute.description}</p>
                </div>
              </CardContent>
            </Card>

            {/* AI Analysis Result */}
            {dispute.aiAnalysis && (
              <Card className="border-emerald-100 shadow-sm">
                <CardHeader className="bg-blue-50/50 border-b border-blue-100 pb-4">
                  <CardTitle className="text-lg text-blue-900 flex gap-2 items-center"><BrainCircuit className="h-5 w-5 text-blue-600"/> AI Legal Analysis</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="prose prose-sm max-w-none prose-blue">
                    <ReactMarkdown>{dispute.aiAnalysis}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Legal Notice Preview */}
            {dispute.legalNotice && (
              <Card className="border-emerald-200 shadow-md">
                <CardHeader className="bg-emerald-50 border-b border-emerald-100 pb-4">
                  <CardTitle className="text-lg text-emerald-900 flex gap-2 items-center"><Mail className="h-5 w-5 text-emerald-600"/> Formal Legal Notice</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="bg-white p-6 border rounded-sm font-serif text-sm whitespace-pre-wrap shadow-inner overflow-y-auto max-h-[400px]">
                    {dispute.legalNotice}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Settlement Draft */}
            {dispute.settlementDraft && (
              <Card className="border-amber-100 shadow-sm border-2">
                <CardHeader className="bg-amber-50 border-b border-amber-100 pb-4 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg text-amber-900 flex gap-2 items-center"><FileText className="h-5 w-5 text-amber-600"/> Settlement & Mutual Release</CardTitle>
                  <Button size="sm" onClick={handleLeegalitySign} disabled={actionLoading} className="bg-amber-600 hover:bg-amber-700">
                    <CheckCircle2 className="h-4 w-4 mr-1" /> Stamp & Sign
                  </Button>
                </CardHeader>
                <CardContent className="pt-4">
                  <div className="bg-white p-6 border rounded-sm font-serif text-sm shadow-inner overflow-y-auto max-h-[600px] prose prose-sm max-w-none prose-slate">
                    <ReactMarkdown>{dispute.settlementDraft}</ReactMarkdown>
                  </div>
                </CardContent>
              </Card>
            )}

          </div>

          {/* Sidebar Actions */}
          <div className="space-y-6">
            
            {/* Status Card */}
            <Card className="border-gray-200 shadow-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-md">Current Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 p-3 bg-emerald-50 text-emerald-700 rounded-md font-medium border border-emerald-100">
                  <Clock className="h-4 w-4" />
                  {dispute.status.replace("_", " ")}
                </div>
                
                {dispute.status.includes("ESCALATED") && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-100 rounded-md">
                    <p className="text-xs text-red-800 font-semibold mb-1">Escalation Note</p>
                    <p className="text-xs text-red-700">{dispute.escalationNotes}</p>
                  </div>
                )}

                {dispute.seniorLawyer && (
                  <div className="mt-4 p-4 bg-navy/5 border border-navy/10 rounded-lg">
                    <p className="text-[10px] font-bold text-navy uppercase tracking-wider mb-3">Assigned Specialist</p>
                    <div className="flex items-center gap-3 mb-3">
                      {dispute.seniorLawyer.imageUrl ? (
                        <img src={dispute.seniorLawyer.imageUrl} className="h-12 w-12 rounded-full border-2 border-white shadow-sm" alt="Lawyer" />
                      ) : (
                        <div className="h-12 w-12 rounded-full bg-navy/10 flex items-center justify-center text-navy font-bold">
                          {dispute.seniorLawyer.name?.charAt(0)}
                        </div>
                      )}
                      <div>
                        <p className="text-sm font-bold text-navy">{dispute.seniorLawyer.name}</p>
                        <p className="text-[10px] text-emerald-600 font-medium">{dispute.seniorLawyer.practiceArea || "Legal Specialist"}</p>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                       <Button size="sm" variant="outline" className="w-full text-[10px] h-7 border-navy/20 text-navy hover:bg-navy/5">
                         <MessageSquare className="h-3 w-3 mr-1" /> Contact Specialist
                       </Button>
                    </div>
                  </div>
                )}

                {dispute.intern && !dispute.seniorLawyer && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-100 rounded-lg">
                    <p className="text-[10px] font-bold text-blue-800 uppercase tracking-wider mb-3">Assigned Mediator (Intern)</p>
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold">
                        {dispute.intern.name?.charAt(0)}
                      </div>
                      <div>
                        <p className="text-xs font-bold text-blue-800">{dispute.intern.name}</p>
                        <p className="text-[10px] text-blue-600">Legal Intern</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Action Card */}
            <Card className="border-emerald-600 shadow-sm border-2">
              <CardHeader className="bg-emerald-600 text-white rounded-t-sm pb-4">
                <CardTitle className="text-md">Next Actions</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-3">
                {dispute.status === "ANALYZED" && (
                  <Button 
                    className="w-full bg-emerald-600 hover:bg-emerald-700" 
                    onClick={handleGenerateNotice}
                    disabled={actionLoading}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Generate Legal Notice
                  </Button>
                )}

                {/* Notice Sent Specifics */}
                {dispute.status === "NOTICE_SENT" && (
                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-md mb-2">
                     <p className="text-xs font-bold text-amber-800 flex items-center gap-1">
                       <Clock className="h-3 w-3" /> Opponent not responding?
                     </p>
                     <p className="text-[10px] text-amber-700 mt-1">If they haven't replied in 3-5 days, you can send a reminder or escalate to a lawyer.</p>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-2 border-amber-200 text-amber-700 hover:bg-amber-100 text-[10px] h-8"
                        onClick={handleSendReminder}
                        disabled={actionLoading}
                      >
                        Send Reminder Notice
                      </Button>
                   </div>
                )}

                {/* Mediation Session Details */}
                {dispute.meetLink && (
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-md mb-2">
                    <p className="text-xs font-semibold text-blue-800 mb-1">Mediation Session</p>
                    {dispute.preferredDate && (
                      <div className="text-xs text-blue-700 mb-2 space-y-1">
                        <p className="flex items-center gap-1"><Clock className="h-3 w-3" /> {new Date(dispute.preferredDate).toLocaleDateString()}</p>
                        <p className="flex items-center gap-1"><Clock className="h-3 w-3" /> {dispute.preferredTime}</p>
                      </div>
                    )}
                    <a href={dispute.meetLink} target="_blank" className="text-sm text-blue-600 break-all hover:underline flex items-center gap-1 font-bold">
                      <Video className="h-4 w-4" /> Join Mediation Call
                    </a>
                  </div>
                )}

                {/* Penalty & Scheduling (Complainant Only) */}
                {role !== "opponent" && (dispute.status === "NOTICE_SENT" || (dispute.status === "MEDIATION" && !dispute.meetLink)) && (
                  <div className="space-y-2">
                    {dispute.opponentPenaltyCount < 3 && (
                      <div className="p-3 bg-red-50 border border-red-100 rounded-md">
                        <p className="text-xs font-bold text-red-800 flex items-center gap-1">
                          <ShieldAlert className="h-3 w-3" /> Still no response?
                        </p>
                        <p className="text-[10px] text-red-700 mt-1">Mark the opponent absent to trigger a formal penalty warning. 3 penalties = Escalation.</p>
                        <Button 
                          variant="destructive" 
                          size="sm" 
                          className="w-full mt-2 text-[10px] h-8 bg-red-600 hover:bg-red-700"
                          onClick={handlePenalty}
                          disabled={actionLoading}
                        >
                          Mark Opponent Absent
                        </Button>
                      </div>
                    )}

                    {!dispute.meetLink && (
                      <div className="pt-2">
                        <p className="text-xs text-gray-600 mb-2">If you are ready to mediate, schedule a time.</p>
                        <Button 
                          className="w-full bg-blue-600 hover:bg-blue-700" 
                          onClick={handleGenerateMeet}
                          disabled={actionLoading}
                        >
                          {actionLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2"/> : <Video className="h-4 w-4 mr-2" />}
                          Schedule Mediation Meet
                        </Button>
                      </div>
                    )}
                  </div>
                )}

                {/* Resolution Tools */}
                {(dispute.status === "MEDIATION" || dispute.status === "NOTICE_SENT" || dispute.status.includes("ESCALATED")) && (
                  <div className="space-y-3 pt-2">
                    {!dispute.settlementDraft && (
                      <Button 
                        className="w-full bg-amber-600 hover:bg-amber-700" 
                        onClick={handleGenerateSettlement}
                        disabled={actionLoading}
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        AI Resolution Agreement
                      </Button>
                    )}

                    <div className="pt-4 border-t space-y-2">
                      <p className="text-sm text-gray-600 font-semibold mb-1">Final Resolution</p>
                      
                      <Button 
                        className="w-full bg-emerald-600 hover:bg-emerald-700" 
                        onClick={handleMarkResolved}
                        disabled={actionLoading || (role === "opponent" ? dispute.opponentResolved : dispute.userResolved)}
                        variant={(role === "opponent" ? dispute.opponentResolved : dispute.userResolved) ? "outline" : "default"}
                      >
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        {(role === "opponent" ? dispute.opponentResolved : dispute.userResolved) 
                          ? (role === "opponent" ? "You Agreed (Waiting on Complainant)" : "You Agreed (Waiting on Opponent)") 
                          : "I Agree to Resolve"}
                      </Button>

                      {!dispute.status.includes("ESCALATED") && (
                        <div className="grid grid-cols-2 gap-2 mt-2">
                          <Button 
                            size="sm"
                            className="w-full" 
                            onClick={handleEscalate}
                            variant="outline"
                            disabled={actionLoading}
                          >
                            <ShieldAlert className="h-3 w-3 mr-1 text-red-500" />
                            Escalate
                          </Button>
                          <Button 
                            size="sm"
                            className="w-full bg-navy hover:bg-slate-800 text-white" 
                            onClick={handleEscalateToSpecialist}
                            disabled={actionLoading}
                          >
                            <BrainCircuit className="h-3 w-3 mr-1" />
                            Specialist
                          </Button>
                        </div>
                      )}
                      
                      {dispute.status.includes("ESCALATED") && (
                        <p className="text-[10px] text-emerald-600 text-center px-2 font-medium mt-2">
                          Case is currently new notification legal review by your assigned specialist.
                        </p>
                      )}
                      
                      {!dispute.status.includes("ESCALATED") && (
                        <p className="text-[10px] text-gray-500 text-center px-2">
                          If mediation stalls, escalate to a domain-specific specialist lawyer.
                        </p>
                      )}
                    </div>
                  </div>
                )}

                {dispute.status === "RESOLVED" && (
                  <div className="flex flex-col items-center justify-center p-4 text-emerald-600 text-center">
                    <CheckSquare className="h-12 w-12 mb-2" />
                    <p className="font-bold">Case Closed</p>
                    <p className="text-xs text-gray-500 mt-1">Both parties have amicably resolved this dispute.</p>
                  </div>
                )}

              </CardContent>
            </Card>

          </div>
        </div>

        <LegalGateway 
          isOpen={isSigningOpen} 
          onClose={() => setIsSigningOpen(false)} 
          signingUrl={signingUrl}
          onSuccess={() => {
            setDispute(prev => ({ ...prev, status: "RESOLVED" }));
            router.refresh();
          }}
        />

        {/* Scheduling Dialog */}
        <Dialog open={isSchedulingOpen} onOpenChange={setIsSchedulingOpen}>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Schedule Mediation Session</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="date" className="text-right">Date</Label>
                <Input
                  id="date"
                  type="date"
                  className="col-span-3"
                  value={scheduleDate}
                  onChange={(e) => setScheduleDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="time" className="text-right">Time</Label>
                <Input
                  id="time"
                  type="time"
                  className="col-span-3"
                  value={scheduleTime}
                  onChange={(e) => setScheduleTime(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsSchedulingOpen(false)}>Cancel</Button>
              <Button onClick={handleScheduleMeeting} disabled={actionLoading} className="bg-blue-600 hover:bg-blue-700">
                {actionLoading ? <Loader2 className="h-4 w-4 animate-spin mr-2" /> : <Clock className="h-4 w-4 mr-2" />}
                Confirm Schedule
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

      </div>
    </div>
  );
}
