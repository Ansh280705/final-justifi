"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, User, Medal, FileText, ExternalLink } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import { updateLawyerStatus } from "@/actions/admin";
import useFetch from "@/hooks/use-fetch";
import { useEffect } from "react";
import { BarLoader } from "react-spinners";

export function PendingLawyers({ lawyers }) {
  const [selectedLawyer, setSelectedLawyer] = useState(null);

  // Custom hook for approve/reject server action
  const {
    loading,
    data,
    fn: submitStatusUpdate,
  } = useFetch(updateLawyerStatus);

  // Open lawyer details dialog
  const handleViewDetails = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  // Close lawyer details dialog
  const handleCloseDialog = () => {
    setSelectedLawyer(null);
  };

  // Handle approve or reject lawyer
  const handleUpdateStatus = async (lawyerId, status) => {
    if (loading) return;

    const formData = new FormData();
    formData.append("lawyerId", lawyerId);
    formData.append("status", status);

    await submitStatusUpdate(formData);
  };

  useEffect(() => {
    if (data && data?.success) {
      handleCloseDialog();
    }
  }, [data]);

  return (
    <div>
      <Card className="bg-card border-emerald-900/20">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-client">
            Pending Lawyer Verifications
          </CardTitle>
          <CardDescription>
            Review and approve lawyer applications
          </CardDescription>
        </CardHeader>
        <CardContent>
          {lawyers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              No pending verification requests at this time.
            </div>
          ) : (
            <div className="space-y-4">
              {lawyers.map((lawyer) => (
                <Card
                  key={lawyer.id}
                  className="bg-card border-emerald-900/20 hover:border-emerald-700/30 transition-all"
                >
                  <CardContent className="p-4">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="bg-client/30 rounded-full p-2">
                          <User className="h-5 w-5 text-client" />
                        </div>
                        <div className="flex flex-col gap-1">
                          <h3 className="font-bold text-client text-lg">
                            {lawyer.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">
                            <span className="font-semibold text-emerald-600">{lawyer.practiceArea}</span>
                            {lawyer.qualifications && lawyer.qualifications.length > 0 && (
                              <span className="text-slate-500 ml-1">({lawyer.qualifications.join(", ")})</span>
                            )}
                            <span className="ml-2 border-l pl-2 text-slate-400">{lawyer.experience} years experience</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 self-end md:self-auto">
                        <Badge
                          variant="outline"
                          className=" border-amber-900/30 text-amber-400"
                        >
                          Pending
                        </Badge>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleViewDetails(lawyer)}
                          className="border-client bg-card hover:bg-client hover:text-white"
                        >
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {selectedLawyer && (
        <Dialog open={!!selectedLawyer} onOpenChange={handleCloseDialog}>
          <DialogContent className="max-w-3xl w-[95vw] sm:w-[85vw] h-[70vh] sm:h-[80vh] flex flex-col p-0 bg-white border-none shadow-2xl rounded-2xl overflow-hidden">
            <DialogTitle className="sr-only">Lawyer Verification</DialogTitle>
            {/* Fixed Header */}
            <div className="p-5 border-b shrink-0 bg-white">
              <div className="flex items-center gap-3">
                <div className="bg-client/10 p-2 rounded-lg hidden sm:block">
                  <User className="h-5 w-5 text-client" />
                </div>
                <div>
                  <h2 className="text-lg font-bold text-slate-900 leading-tight">
                    Lawyer Verification
                  </h2>
                  <p className="text-[10px] font-medium text-slate-500 mt-1 uppercase tracking-widest">
                    ID #{selectedLawyer.id.slice(-4).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            {/* Main Scrollable Body */}
            <div className="flex-1 overflow-y-auto bg-white min-h-0">
              <div className="p-5 space-y-6">
                {/* Profile Stats Overview */}
                <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Name</h4>
                      <p className="text-sm font-bold text-slate-800">{selectedLawyer.name}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Email</h4>
                      <p className="text-xs font-semibold text-slate-600 break-all">{selectedLawyer.email}</p>
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</h4>
                      <p className="text-xs font-semibold text-slate-700">{format(new Date(selectedLawyer.createdAt), "PPP")}</p>
                    </div>
                  </div>
                </div>

                {/* Professional Qualifications */}
                <div className="space-y-4">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Qualifications</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-4 bg-white border rounded-xl shadow-sm">
                      <p className="text-[10px] font-bold text-client uppercase mb-1">Practice Area</p>
                      <p className="text-sm font-bold text-slate-900">{selectedLawyer.practiceArea}</p>
                    </div>
                    <div className="p-4 bg-white border rounded-xl shadow-sm">
                      <p className="text-[10px] font-bold text-client uppercase mb-1">Experience</p>
                      <p className="text-sm font-bold text-slate-900">{selectedLawyer.experience} Years</p>
                    </div>
                  </div>
                </div>

                {/* Document Verification */}
                <div className="p-5 bg-slate-900 rounded-xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded-lg">
                      <FileText className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest">Identity Proof</p>
                      <p className="text-sm font-bold text-white">Bar Council Certificate PDF</p>
                    </div>
                  </div>
                  <a
                    href={selectedLawyer.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-6 py-2 bg-client text-white text-[10px] font-bold rounded-lg flex items-center justify-center gap-2"
                  >
                    View Document <ExternalLink className="h-3 w-3" />
                  </a>
                </div>

                {/* Service Statement */}
                <div className="space-y-3 pb-4">
                  <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Statement</h3>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed whitespace-pre-line italic">
                      &ldquo;{selectedLawyer.description || "No description provided."}&rdquo;
                    </p>
                  </div>
                </div>
   <div className="p-4 border-t bg-white shrink-0 my-[40px] flex flex-row items-center gap-3">
              <Button
                variant="outline"
                onClick={() => handleUpdateStatus(selectedLawyer.id, "REJECTED")}
                disabled={loading}
                className="flex-1 h-11 border-slate-200 text-slate-500 font-bold rounded-xl hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                <X className="mr-2 h-4 w-4" />
                Reject
              </Button>
              <Button
                onClick={() => handleUpdateStatus(selectedLawyer.id, "VERIFIED")}
                disabled={loading}
                className="flex-1 h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/20 transition-all"
              >
                <Check className="mr-2 h-4 w-4" />
                Approve
              </Button>
            </div>

              </div>
            </div>

           
         

          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}