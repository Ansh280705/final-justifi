"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createLegalAdvice } from "@/actions/legal-advice";
import { useRouter } from "next/navigation";

export default function LegalAdviceModal({ legalCase, lawyer, onClose }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    caseSummary: "",
    legalPoints: "",
    instructions: "",
    followUpDate: "",
    caseHistory: "",
  });

  const handleSubmit = async () => {
    if (!form.caseSummary || !form.legalPoints) {
      toast.error("Please fill required fields");
      return;
    }

    try {
      setLoading(true);

      await createLegalAdvice({
        caseId: legalCase.id,
        caseSummary: form.caseSummary,
        legalPoints: form.legalPoints,
        instructions: form.instructions,
        followUpDate: form.followUpDate,
        caseHistory: form.caseHistory,
      });

      toast.success("Advice saved successfully");
      onClose();
      router.push("/lawyer?tab=cases");
    
    } catch (err) {
      toast.error(err.message || "Failed to save notes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4">📝 Session Notes</h2>

        {/* Client & Lawyer Info */}
        <div className="grid grid-cols-2 gap-4 mb-6 text-sm bg-gray-50 p-3 rounded">
          <div>
            <p className="font-medium">Client Name</p>
            <p className="text-gray-600">{legalCase.clientName}</p>
          </div>

          <div>
            <p className="font-medium">Age</p>
            <p className="text-gray-600">{legalCase.clientAge} yrs</p>
          </div>

          <div>
            <p className="font-medium">Gender</p>
            <p className="text-gray-600">{legalCase.clientGender}</p>
          </div>

          <div>
            <p className="font-medium">Phone</p>
            <p className="text-gray-600">{legalCase.clientPhone}</p>
          </div>

          <div>
            <p className="font-medium">Lawyer</p>
            <p className="text-gray-600">{lawyer?.name}</p>
          </div>

          <div>
            <p className="font-medium">Date</p>
            <p className="text-gray-600">
              {new Date(legalCase.startTime).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* FORM INPUTS */}

        <textarea
          placeholder="Case Summary / Main Issue"
          className="w-full border p-2 rounded mb-3"
          value={form.caseSummary}
          onChange={(e) => setForm({ ...form, caseSummary: e.target.value })}
        />
        <textarea
          placeholder="Case History / Background"
          className="w-full border p-2 rounded mb-3"
          value={form.caseHistory}
          onChange={(e) => setForm({ ...form, caseHistory: e.target.value })}
        />
        <textarea
          placeholder="Legal Points / Arguments"
          className="w-full border p-2 rounded mb-3"
          value={form.legalPoints}
          onChange={(e) => setForm({ ...form, legalPoints: e.target.value })}
        />

        <textarea
          placeholder="Next Steps"
          className="w-full border p-2 rounded mb-3"
          value={form.instructions}
          onChange={(e) => setForm({ ...form, instructions: e.target.value })}
        />

        <input
          type="date"
          className="border p-2 rounded mb-4 w-full"
          value={form.followUpDate}
          onChange={(e) => setForm({ ...form, followUpDate: e.target.value })}
        />

        {/* ACTION BUTTONS */}
        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded border border-gray-300"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded bg-emerald-600 text-white disabled:opacity-60"
            disabled={loading}
          >
            {loading ? "Saving..." : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}
