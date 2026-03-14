"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BrainCircuit, ExternalLink, User, Calendar, MessageSquare } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export default function SpecializedDisputesList({ disputes }) {
  if (disputes.length === 0) {
    return (
      <Card className="border-dashed border-2 border-slate-200">
        <CardContent className="flex flex-col items-center justify-center py-10 text-slate-500">
          <BrainCircuit className="h-10 w-10 mb-4 opacity-20" />
          <p className="text-sm font-medium">No specialized referrals yet.</p>
          <p className="text-xs">Disputes matching your practice area will appear here when escalated.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {disputes.map((dispute) => (
        <Card key={dispute.id} className="overflow-hidden hover:shadow-md transition-shadow border-navy/10">
          <CardHeader className="bg-navy/5 pb-3">
            <div className="flex justify-between items-start">
              <Badge className="bg-emerald-600 mb-2">{dispute.category}</Badge>
              <span className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">Ref #{dispute.id.split('-')[0]}</span>
            </div>
            <CardTitle className="text-md font-bold text-navy line-clamp-1">{dispute.complainantName} vs {dispute.opponentName || "Unknown"}</CardTitle>
          </CardHeader>
          <CardContent className="pt-4 space-y-3">
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <User className="h-3 w-3" />
              <span>Filed by: {dispute.user?.name || "Anonymous"}</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-600">
              <Calendar className="h-3 w-3" />
              <span>Escalated: {format(new Date(dispute.updatedAt), "PPP")}</span>
            </div>
            
            <p className="text-xs text-slate-500 line-clamp-2 italic bg-slate-50 p-2 rounded border border-slate-100">
              "{dispute.description}"
            </p>

            <Link href={`/dispute/${dispute.id}?role=lawyer`} className="block pt-2">
              <Button size="sm" className="w-full bg-navy hover:bg-slate-800 text-white gap-1">
                View & Manage Case
                <ExternalLink className="h-3 w-3" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
