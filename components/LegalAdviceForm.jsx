"use client";

import { useState } from "react";
import { toast } from "sonner";
import { createLegalAdvice } from "@/actions/legal-advice";

export default function LegalAdviceForm({ legalCase, lawyer }) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    caseSummary: "",
    legalPoints: "",
    instructions: "",
    followUpDate: "",
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
      });
      toast.success("Advice saved successfully");
    } catch (error) {
      console.error(error);
      toast.error("Failed to save notes");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-lg p-6 shadow-md mt-6">
      <h2 className="text-xl font-semibold mb-4">📝 Legal Advice / Session Notes</h2>

      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div>
          <p className="font-medium">Client</p>
          <p className="text-gray-600">{legalCase.client.name}</p>
        </div>
        <div>
          <p className="font-medium">Lawyer</p>
          <p className="text-gray-600">{lawyer.name}</p>
        </div>
        <div>
          <p className="font-medium">Date</p>
          <p className="text-gray-600">{new Date(legalCase.startTime).toLocaleDateString()}</p>
        </div>
      </div>

      <textarea
        placeholder="Case Summary / Main Issue"
        className="w-full border p-2 rounded mb-3"
        value={form.caseSummary}
        onChange={(e) => setForm({ ...form, caseSummary: e.target.value })}
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
        className="border p-2 rounded mb-4"
        value={form.followUpDate}
        onChange={(e) => setForm({ ...form, followUpDate: e.target.value })}
      />

      <button
        disabled={loading}
        onClick={handleSubmit}
        className="bg-emerald-600 text-white px-4 py-2 rounded disabled:opacity-60"
      >
        {loading ? "Saving..." : "Save Legal Advice"}
      </button>
    </div>
  );
}
