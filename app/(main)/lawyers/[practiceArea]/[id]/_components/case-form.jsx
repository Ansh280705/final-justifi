"use client"

import { bookCase } from '@/actions/cases';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { format } from 'date-fns';
import { ArrowLeft, Calendar, Clock, CreditCard, Loader2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';
import useFetch from '@/hooks/use-fetch';
import { useRouter } from 'next/navigation';

const CaseForm = ({ lawyerId, slot, onBack, onComplete }) => {
  const [description, setDescription] = useState("");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientAge, setClientAge] = useState("");
  const [clientGender, setClientGender] = useState("");
  const router = useRouter();

  const { loading, data, error, fn: submitBooking } = useFetch(bookCase);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!clientName || !clientPhone || !clientAge || !clientGender) {
      toast.error("Please fill all client details");
      return;
    }

    const formData = new FormData();
    formData.append("lawyerId", lawyerId);
    formData.append("startTime", slot.startTime);
    formData.append("endTime", slot.endTime);
    formData.append("description", description);
    formData.append("clientName", clientName);
    formData.append("clientPhone", clientPhone);
    formData.append("clientAge", clientAge);
    formData.append("clientGender", clientGender);

    await submitBooking(formData);
  };

  useEffect(() => {
    if (data?.success) {
      toast.success("Case opened successfully!");
      onComplete();
    }
  }, [data, onComplete]);

  useEffect(() => {
    if (error && error.message === "Insufficient credits to open a case") {
      toast.error("You don't have enough credits. Redirecting to credits page...");
      setTimeout(() => {
        router.push("/pricing");
      }, 1500);
    }
  }, [error, router]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Slot Info */}
      <div className="bg-muted/20 p-4 rounded-lg border border-emerald-900/20 space-y-3">
        <div className="flex items-center">
          <Calendar className="h-5 w-5 text-emerald-400 mr-2" />
          <span className="text-black font-medium">
            {format(new Date(slot.startTime), "EEEE, MMMM d, yyyy")}
          </span>
        </div>
        <div className="flex items-center">
          <Clock className="h-5 w-5 text-emerald-400 mr-2" />
          <span className="text-black">{slot.formatted}</span>
        </div>
        <div className="flex items-center">
          <CreditCard className="h-5 w-5 text-emerald-400 mr-2" />
          <span className="text-muted-foreground">
            Cost: <span className="text-black font-medium">1 credits</span>
          </span>
        </div>
      </div>

      {/* Client Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="clientName">Full Name</Label>
          <input
            id="clientName"
            placeholder="Your Full Name"
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientPhone">Phone Number</Label>
          <input
            id="clientPhone"
            placeholder="e.g. 8109424356"
            value={clientPhone}
            onChange={(e) => {
              const value = e.target.value;
              if (value.length > 10) return;
              setClientPhone(value);
            }}
            className="w-full border rounded-lg p-2"
            pattern="[0-9]{10}"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientAge">Age</Label>
          <input
            id="clientAge"
            type="number"
            placeholder="Your Age"
            value={clientAge}
            onChange={(e) => setClientAge(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="clientGender">Gender</Label>
          <select
            id="clientGender"
            value={clientGender}
            onChange={(e) => setClientGender(e.target.value)}
            className="w-full border rounded-lg p-2"
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      {/* Description */}
      <div className="space-y-2">
        <Label htmlFor="description">Case Description / Dispute Details (optional)</Label>
        <Textarea
          id="description"
          placeholder="Describe your concern..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="bg-card border-emerald-900/20 h-32"
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between pt-2">
        <Button
          type="button"
          variant="outline"
          onClick={onBack}
          disabled={loading}
          className="border-emerald-900/30 bg-card"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Change Time Slot
        </Button>
        <Button
          type="submit"
          disabled={loading}
          className="bg-emerald-600 hover:bg-emerald-700"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Opening Case...
            </>
          ) : (
            "Open Case"
          )}
        </Button>
      </div>
    </form>
  );
};

export default CaseForm;
