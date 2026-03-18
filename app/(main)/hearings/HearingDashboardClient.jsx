"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import {
  Calendar, AlertTriangle, CheckCircle2, XCircle,
  Clock, Gavel, ShieldAlert, CreditCard, Plus, ExternalLink,
  Mail, Zap, RefreshCw
} from "lucide-react";
import { createHearing, markAttendance, payPenalty, joinHearing } from "@/actions/hearing";

export function HearingDashboardClient({ initialHearings, violations, penalties, disputes }) {
  const [hearings, setHearings] = useState(initialHearings || []);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("hearings");
  const [cronRunning, setCronRunning] = useState(false);
  const [lastCronRun, setLastCronRun] = useState(null);

  const [form, setForm] = useState({
    case_id: "",
    hearing_date: "",
  });

  // Auto-run cron every 60 seconds
  useEffect(() => {
    async function runCron() {
      try {
        const res = await fetch("/api/cron/hearing-check");
        const data = await res.json();
        if (data.ok) setLastCronRun(new Date().toLocaleTimeString());
      } catch {}
    }
    runCron();
    const interval = setInterval(runCron, 60000);
    return () => clearInterval(interval);
  }, []);

  async function handleCreate(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const result = await createHearing(form);
      if (result.success) {
        toast.success("✅ Hearing scheduled! Confirmation emails sent to both parties.");
        setHearings((prev) => [...prev, result.hearing]);
        setShowForm(false);
        setForm({ case_id: "", hearing_date: "" });
      } else {
        toast.error(result.error || "Failed to schedule hearing");
      }
    } catch (err) {
      toast.error("An error occurred");
    }
    setLoading(false);
  }

  async function handleJoin(hearing, role) {
    const result = await joinHearing(hearing.hearing_id, role);
    if (result.success) {
      toast.success(`✅ Marked present! Opening hearing link...`);
      window.open(result.hearing_link || hearing.hearing_link, "_blank");
      setTimeout(() => window.location.reload(), 1000);
    } else {
      toast.error(result.error || "Failed to record attendance");
    }
  }

  async function handleMarkAttendance(hearing_id, role, status) {
    const result = await markAttendance(hearing_id, role, status);
    if (result.success) {
      if (status === "absent") {
        toast.warning("⚠️ Marked absent — penalty email may be triggered");
      } else {
        toast.success("✅ Marked present");
      }
      window.location.reload();
    } else {
      toast.error(result.error || "Failed to update attendance");
    }
  }

  async function handlePayPenalty(penalty_id) {
    const result = await payPenalty(penalty_id);
    if (result.success) {
      toast.success("✅ Penalty marked as paid!");
      window.location.reload();
    } else {
      toast.error("Failed to process payment");
    }
  }

  async function triggerCronNow() {
    setCronRunning(true);
    try {
      const res = await fetch("/api/cron/hearing-check");
      const data = await res.json();
      if (data.ok) {
        toast.success("🔔 Reminder check complete! Emails sent where due.");
        setLastCronRun(new Date().toLocaleTimeString());
        setTimeout(() => window.location.reload(), 1500);
      }
    } catch {
      toast.error("Failed to run check");
    }
    setCronRunning(false);
  }

  const statusBadge = (status) => {
    if (status === "present") return <span className="inline-flex items-center gap-1 text-xs font-semibold text-green-700 bg-green-100 px-2 py-1 rounded-full"><CheckCircle2 size={10} /> Present</span>;
    if (status === "absent") return <span className="inline-flex items-center gap-1 text-xs font-semibold text-red-700 bg-red-100 px-2 py-1 rounded-full"><XCircle size={10} /> Absent</span>;
    return <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow-700 bg-yellow-100 px-2 py-1 rounded-full"><Clock size={10} /> Pending</span>;
  };

  const isUpcoming = (date) => new Date(date) > new Date();

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      {/* Auto-notification bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-3">
        <div className="flex items-center gap-2 text-sm text-emerald-700">
          <Zap size={16} className="text-emerald-600" />
          <span><strong>Auto-notifications active</strong> — Reminder emails sent 1 day & 1 hour before each hearing. Absences auto-checked after 15-min grace period.</span>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          {lastCronRun && <span className="text-xs text-emerald-600">Last check: {lastCronRun}</span>}
          <button
            onClick={triggerCronNow}
            disabled={cronRunning}
            className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 disabled:opacity-60 text-white px-3 py-1.5 rounded-lg font-medium"
          >
            <RefreshCw size={12} className={cronRunning ? "animate-spin" : ""} />
            {cronRunning ? "Checking..." : "Run Check Now"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-2xl border border-emerald-100 p-5 flex items-center gap-4 shadow-sm">
          <div className="bg-emerald-100 p-3 rounded-xl"><Calendar className="text-emerald-600" size={22} /></div>
          <div>
            <p className="text-sm text-gray-500">Total Hearings</p>
            <p className="text-2xl font-bold text-gray-800">{hearings.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-red-100 p-5 flex items-center gap-4 shadow-sm">
          <div className="bg-red-100 p-3 rounded-xl"><AlertTriangle className="text-red-500" size={22} /></div>
          <div>
            <p className="text-sm text-gray-500">Violations</p>
            <p className="text-2xl font-bold text-gray-800">{violations.length}</p>
          </div>
        </div>
        <div className="bg-white rounded-2xl border border-orange-100 p-5 flex items-center gap-4 shadow-sm">
          <div className="bg-orange-100 p-3 rounded-xl"><CreditCard className="text-orange-500" size={22} /></div>
          <div>
            <p className="text-sm text-gray-500">Penalties Issued</p>
            <p className="text-2xl font-bold text-gray-800">{penalties.length}</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { id: "hearings", label: "Hearings", Icon: Calendar },
          { id: "violations", label: "Violations", Icon: ShieldAlert },
          { id: "penalties", label: "Penalties", Icon: CreditCard },
        ].map(({ id, label, Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === id ? "bg-white shadow text-emerald-700" : "text-gray-500 hover:text-gray-800"}`}
          >
            <Icon size={15} /> {label}
          </button>
        ))}
      </div>

      {/* HEARINGS TAB */}
      {activeTab === "hearings" && (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="flex justify-between items-center p-5 border-b">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2"><Gavel size={18} className="text-emerald-600" /> Scheduled Hearings</h2>
            <button
              onClick={() => setShowForm(!showForm)}
              className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2 rounded-lg transition-colors"
            >
              <Plus size={15} /> Schedule Hearing
            </button>
          </div>

          {showForm && (
            <form onSubmit={handleCreate} className="p-5 border-b bg-emerald-50 space-y-4">
              <div className="flex items-center gap-2 mb-3">
                <Mail size={16} className="text-emerald-600" />
                <h3 className="font-semibold text-gray-700">New Hearing — Email notifications auto-sent to both parties</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Case / Dispute</label>
                  <select
                    value={form.case_id}
                    onChange={(e) => setForm({ ...form, case_id: e.target.value })}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  >
                    <option value="">Select dispute...</option>
                    {disputes.map((d) => (
                      <option key={d.id} value={d.id}>
                        [{d.id.slice(0, 8)}] {d.category} — {d.complainantName}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs text-gray-500 mb-1">Hearing Date & Time</label>
                  <input
                    type="datetime-local"
                    value={form.hearing_date}
                    onChange={(e) => setForm({ ...form, hearing_date: e.target.value })}
                    required
                    className="w-full border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>
              <p className="text-xs text-emerald-700 bg-emerald-100 px-3 py-2 rounded-lg">
                🔗 A unique Jitsi Meet video link will be auto-generated. 📧 Confirmation emails will be sent instantly to both parties.
              </p>
              <div className="flex gap-2">
                <button type="submit" disabled={loading} className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2 rounded-lg text-sm font-medium disabled:opacity-60">
                  {loading ? "Scheduling..." : "Schedule & Notify"}
                </button>
                <button type="button" onClick={() => setShowForm(false)} className="border px-5 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50">
                  Cancel
                </button>
              </div>
            </form>
          )}

          {hearings.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <Calendar size={40} className="mx-auto mb-3 opacity-20" />
              <p>No hearings scheduled yet. Click "Schedule Hearing" to begin.</p>
            </div>
          ) : (
            <div className="divide-y">
              {hearings.map((h) => (
                <div key={h.hearing_id} className="p-5 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-gray-400">#{h.case_id.slice(0, 8)}</span>
                        {isUpcoming(h.hearing_date) && <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">Upcoming</span>}
                        {h.absences >= 3 && <span className="text-xs font-bold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-full">🚨 Escalated</span>}
                        {h.penalty_applied && <span className="text-xs font-bold text-orange-600 bg-orange-50 border border-orange-200 px-2 py-0.5 rounded-full">💸 Penalty</span>}
                      </div>
                      <p className="font-semibold text-gray-800">{new Date(h.hearing_date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                      <a href={h.hearing_link} target="_blank" rel="noreferrer" className="text-xs text-emerald-600 hover:underline flex items-center gap-1 mt-0.5">
                        <ExternalLink size={10} /> {h.hearing_link}
                      </a>
                      <div className="flex flex-wrap gap-3 mt-2">
                        <span className="text-xs text-gray-500">Plaintiff: {statusBadge(h.plaintiff_status)}</span>
                        <span className="text-xs text-gray-500">Defendant: {statusBadge(h.defendant_status)}</span>
                      </div>
                      <p className="text-xs text-gray-400 mt-1">Absences: {h.absences} | Reminders sent: {h.reminders_sent}</p>
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      {/* JOIN buttons (for demo purposes — auto-mark present) */}
                      {h.plaintiff_status === "pending" && (
                        <button onClick={() => handleJoin(h, "plaintiff")} className="flex items-center gap-1.5 text-xs bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg font-medium">
                          <ExternalLink size={12} /> Join as Plaintiff
                        </button>
                      )}
                      {h.defendant_status === "pending" && (
                        <button onClick={() => handleJoin(h, "defendant")} className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-lg font-medium">
                          <ExternalLink size={12} /> Join as Defendant
                        </button>
                      )}
                      {/* Manual override buttons */}
                      {h.plaintiff_status === "pending" && (
                        <button onClick={() => handleMarkAttendance(h.hearing_id, "plaintiff", "absent")} className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded-lg font-medium">
                          ✗ Plaintiff Absent
                        </button>
                      )}
                      {h.defendant_status === "pending" && (
                        <button onClick={() => handleMarkAttendance(h.hearing_id, "defendant", "absent")} className="text-xs bg-red-100 hover:bg-red-200 text-red-700 px-3 py-1.5 rounded-lg font-medium">
                          ✗ Defendant Absent
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* VIOLATIONS TAB */}
      {activeTab === "violations" && (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 p-5 border-b">
            <ShieldAlert className="text-red-500" size={18} />
            <h2 className="text-lg font-bold text-gray-800">Attendance Violations</h2>
          </div>
          {violations.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <CheckCircle2 size={40} className="mx-auto mb-3 opacity-20" />
              <p>No violations recorded. All hearings attended.</p>
            </div>
          ) : (
            <div className="divide-y">
              {violations.map((v) => (
                <div key={v.hearing_id} className="p-5 hover:bg-gray-50">
                  <div className="flex justify-between items-start">
                    <div>
                      <p className="text-sm font-mono text-gray-400">Case: #{v.case_id.slice(0, 8)}</p>
                      <p className="font-semibold text-gray-800 mt-1">{new Date(v.hearing_date).toLocaleString("en-IN")}</p>
                      <div className="flex gap-3 mt-2">
                        <span className="text-xs text-gray-600">Plaintiff: {statusBadge(v.plaintiff_status)}</span>
                        <span className="text-xs text-gray-600">Defendant: {statusBadge(v.defendant_status)}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-500">{v.absences}</div>
                      <div className="text-xs text-gray-400">absences</div>
                      <div className="mt-1">
                        {v.absences === 1 && <span className="text-xs text-yellow-600 font-semibold">⚠ Warning Email Sent</span>}
                        {v.absences === 2 && <span className="text-xs text-orange-600 font-semibold">💸 Penalty Email Sent</span>}
                        {v.absences >= 3 && <span className="text-xs text-red-600 font-semibold">🚨 Escalation Email Sent</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* PENALTIES TAB */}
      {activeTab === "penalties" && (
        <div className="bg-white rounded-2xl border shadow-sm overflow-hidden">
          <div className="flex items-center gap-2 p-5 border-b">
            <CreditCard className="text-orange-500" size={18} />
            <h2 className="text-lg font-bold text-gray-800">Penalty Records</h2>
          </div>
          {penalties.length === 0 ? (
            <div className="text-center py-16 text-gray-400">
              <CreditCard size={40} className="mx-auto mb-3 opacity-20" />
              <p>No penalties issued yet.</p>
            </div>
          ) : (
            <div className="divide-y">
              {penalties.map((p) => (
                <div key={p.penalty_id} className="p-5 hover:bg-gray-50 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-mono text-gray-400">Case: #{p.case_id.slice(0, 8)}</p>
                    <p className="font-semibold text-gray-800 mt-1">{p.reason}</p>
                    <p className="text-xs text-gray-400">{new Date(p.timestamp).toLocaleString("en-IN")}</p>
                    <p className="text-xs text-gray-500 mt-0.5">Party: {p.user_id}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <p className="text-2xl font-bold text-orange-600">₹{p.amount.toLocaleString()}</p>
                    {p.status === "paid" ? (
                      <span className="text-xs font-bold text-green-600 bg-green-50 border border-green-200 px-3 py-1 rounded-full">✓ Paid</span>
                    ) : (
                      <button
                        onClick={() => handlePayPenalty(p.penalty_id)}
                        className="text-xs bg-orange-600 hover:bg-orange-700 text-white px-4 py-1.5 rounded-lg font-medium"
                      >
                        Pay Penalty
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
