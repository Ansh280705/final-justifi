"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Ban, Loader2, User, Search, Gavel } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { updateLawyerActiveStatus } from "@/actions/admin";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

export function VerifiedLawyers({ lawyers }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [targetLawyer, setTargetLawyer] = useState(null);
  const [actionType, setActionType] = useState(null);

  const {
    loading,
    data,
    fn: submitStatusUpdate,
  } = useFetch(updateLawyerActiveStatus);

  const filteredLawyers = lawyers.filter((lawyer) => {
    const query = searchTerm.toLowerCase();
    return (
      lawyer.name.toLowerCase().includes(query) ||
      lawyer.practiceArea.toLowerCase().includes(query) ||
      lawyer.email.toLowerCase().includes(query)
    );
  });

  const handleStatusChange = async (lawyer, suspend) => {
    const confirmed = window.confirm(
      `Are you sure you want to ${suspend ? "suspend" : "reinstate"} ${lawyer.name
      }?`
    );
    if (!confirmed || loading) return;

    const formData = new FormData();
    formData.append("lawyerId", lawyer.id);
    formData.append("suspend", suspend ? "true" : "false");

    setTargetLawyer(lawyer);
    setActionType(suspend ? "SUSPEND" : "REINSTATE");

    await submitStatusUpdate(formData);
  };

  useEffect(() => {
    if (data?.success && targetLawyer && actionType) {
      const actionVerb = actionType === "SUSPEND" ? "Suspended" : "Reinstated";
      toast.success(`${actionVerb} ${targetLawyer.name} successfully!`);
      setTargetLawyer(null);
      setActionType(null);
    }
  }, [data]);

  return (
    <div>
      <Card className="bg-card border-emerald-900/20">
        <CardHeader>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <CardTitle className="text-xl font-bold text-client flex items-center">
                <Gavel className="h-6 w-6 mr-2" />
                Manage Lawyers
              </CardTitle>
              <CardDescription>
                View and manage all verified lawyers
              </CardDescription>
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-card" />
              <Input
                placeholder="Search lawyers..."
                className="pl-8 bg-foreground text-card border-emerald-900/20"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </CardHeader>

        <CardContent>
          {filteredLawyers.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              {searchTerm
                ? "No lawyers match your search criteria."
                : "No verified lawyers available."}
            </div>
          ) : (
            <div className="space-y-4">
              {filteredLawyers.map((lawyer) => {
                const isSuspended = lawyer.verificationStatus === "REJECTED";
                return (
                  <Card
                    key={lawyer.id}
                    className="bg-card border-client border-2 hover:border-client/30 transition-all overflow-hidden"
                  >
                    <CardContent className="p-4">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-3 min-w-0">
                          <div className="bg-muted/20 rounded-full p-2 shrink-0 mt-0.5">
                            <User className="h-5 w-5 text-client " />
                          </div>
                          <div className="flex-1 min-w-0 overflow-hidden">
                            <h3 className="font-bold text-client truncate">
                              {lawyer.name}
                            </h3>
                            <p className="text-sm text-muted-foreground line-clamp-2">
                              {lawyer.practiceArea} {lawyer.qualifications && lawyer.qualifications.length > 0 && (
                                <span className="text-emerald-600/80 font-medium">({lawyer.qualifications.join(", ")})</span>
                              )}
                            </p>
                            <div className="flex flex-col gap-1 mt-2 text-xs text-muted-foreground">
                              <span className="flex items-center gap-1 font-medium">
                                {lawyer.experience > 0 ? `${lawyer.experience} years experience` : "No experience"}
                              </span>
                              <span className="truncate">{lawyer.email}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 w-full md:w-auto mt-2 md:mt-0">
                          {isSuspended ? (
                            <>
                              <Badge
                                variant="outline"
                                className="bg-red-900/20 border-red-900/30 text-red-400 shrink-0"
                              >
                                Suspended
                              </Badge>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() =>
                                  handleStatusChange(lawyer, false)
                                }
                                disabled={loading}
                                className="border-emerald-900/30 hover:bg-muted/80 flex-1 md:flex-none"
                              >
                                {loading && targetLawyer?.id === lawyer.id ? (
                                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                ) : (
                                  <Check className="h-4 w-4 mr-1" />
                                )}
                                Reinstate
                              </Button>
                            </>
                          ) : (
                            <>
                              <Badge
                                variant="outline"
                                className="bg-emerald-900/20 border-emerald-900/30 text-emerald-400 shrink-0"
                              >
                                Active
                              </Badge>
                              <Button
                                variant="outline"
                                size="sm"
                                onClick={() => handleStatusChange(lawyer, true)}
                                disabled={loading}
                                className="border-red-900/30 hover:bg-red-900/10 text-red-400 flex-1 md:flex-none"
                              >
                                {loading && targetLawyer?.id === lawyer.id ? (
                                  <Loader2 className="h-4 w-4 mr-1 animate-spin" />
                                ) : (
                                  <Ban className="h-4 w-4 mr-1" />
                                )}
                                Suspend
                              </Button>
                            </>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}