"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  Clock,
  User,
  Video,
  Gavel,
  X,
  Edit,
  Loader2,
  CheckCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  cancelCase,
  addCaseNotes,
  markCaseCompleted,
} from "@/actions/lawyer";
import { generateVideoToken } from "@/actions/cases";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export function CaseCard({
  legalCase,
  userRole,
  refetchCases,
}) {
  const [open, setOpen] = useState(false);
  const [action, setAction] = useState(null); // 'cancel', 'notes', 'video', or 'complete'
  const [notes, setNotes] = useState(legalCase.notes || "");
  const router = useRouter();

  // UseFetch hooks for server actions
  const {
    loading: cancelLoading,
    fn: submitCancel,
    data: cancelData,
  } = useFetch(cancelCase);
  const {
    loading: notesLoading,
    fn: submitNotes,
    data: notesData,
  } = useFetch(addCaseNotes);
  const {
    loading: tokenLoading,
    fn: submitTokenRequest,
    data: tokenData,
  } = useFetch(generateVideoToken);
  const {
    loading: completeLoading,
    fn: submitMarkCompleted,
    data: completeData,
  } = useFetch(markCaseCompleted);

  // Format date and time
  const formatDateTime = (dateString) => {
    try {
      return format(new Date(dateString), "MMMM d, yyyy 'at' h:mm a");
    } catch (e) {
      return "Invalid date";
    }
  };

  // Format time only
  const formatTime = (dateString) => {
    try {
      return format(new Date(dateString), "h:mm a");
    } catch (e) {
      return "Invalid time";
    }
  };

  // Check if case can be marked as completed
  const canMarkCompleted = () => {
    if (userRole !== "LAWYER" || legalCase.status !== "SCHEDULED") {
      return false;
    }
    const now = new Date();
    const caseEndTime = new Date(legalCase.endTime);
    return now >= caseEndTime;
  };

  // Handle cancel case
  const handleCancelCase = async () => {
    if (cancelLoading) return;

    if (
      window.confirm(
        "Are you sure you want to cancel this case? This action cannot be undone."
      )
    ) {
      const formData = new FormData();
      formData.append("caseId", legalCase.id);
      await submitCancel(formData);
    }
  };

  // Handle mark as completed
  const handleMarkCompleted = async () => {
    if (completeLoading) return;

    // Check if case end time has passed
    const now = new Date();
    const caseEndTime = new Date(legalCase.endTime);

    if (now < caseEndTime) {
      alert(
        "Cannot mark case as completed before the scheduled end time."
      );
      return;
    }

    if (
      window.confirm(
        "Are you sure you want to mark this case as completed? This action cannot be undone."
      )
    ) {
      const formData = new FormData();
      formData.append("caseId", legalCase.id);
      await submitMarkCompleted(formData);
    }
  };

  // Handle save notes (lawyer only)
  const handleSaveNotes = async () => {
    if (notesLoading || userRole !== "LAWYER") return;

    const formData = new FormData();
    formData.append("caseId", legalCase.id);
    formData.append("notes", notes);
    await submitNotes(formData);
  };

  // Handle join video call
  const handleJoinVideoCall = async () => {
    if (tokenLoading) return;

    setAction("video");

    const formData = new FormData();
    formData.append("caseId", legalCase.id);
    await submitTokenRequest(formData);
  };

  // Handle successful operations
  useEffect(() => {
    if (cancelData?.success) {
      toast.success("Case cancelled successfully");
      setOpen(false);
      if (refetchCases) {
        refetchCases();
      } else {
        router.refresh();
      }
    }
  }, [cancelData, refetchCases, router]);

  useEffect(() => {
    if (completeData?.success) {
      toast.success("Case marked as completed");
      setOpen(false);
      if (refetchCases) {
        refetchCases();
      } else {
        router.refresh();
      }
    }
  }, [completeData, refetchCases, router]);

  useEffect(() => {
    if (notesData?.success) {
      toast.success("Notes saved successfully");
      setAction(null);
      if (refetchCases) {
        refetchCases();
      } else {
        router.refresh();
      }
    }
  }, [notesData, refetchCases, router]);

  useEffect(() => {
    if (tokenData?.success) {
      // Redirect to video call page with token and session ID
      router.push(
        `/video-call?sessionId=${tokenData.videoSessionId}&token=${tokenData.token}&caseId=${legalCase.id}`
      );
    } else if (tokenData?.error) {
      setAction(null);
    }
  }, [tokenData, legalCase.id, router]);

  // Determine if case is active (within 2 minutes of start time)
  const isCaseActive = () => {
    const now = new Date();
    const caseStartTime = new Date(legalCase.startTime);
    const caseEndTime = new Date(legalCase.endTime);

    // Can join 2 minutes before start until end time
    return (
      (caseStartTime.getTime() - now.getTime() <= 2 * 60 * 1000 &&
        now < caseStartTime) ||
      (now >= caseStartTime && now <= caseEndTime)
    );
  };

  // Determine other party information based on user role
  const otherParty =
    userRole === "LAWYER" ? legalCase.client : legalCase.lawyer;

  const otherPartyLabel = userRole === "LAWYER" ? "Client" : "Lawyer";
  const otherPartyIcon = userRole === "LAWYER" ? <User /> : <Gavel />;

  return (
    <>
      <Card className="border-client/20 hover:client/30 transition-all">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="flex items-start gap-3">
              <div className="bg-client/20 text-client rounded-full p-2 mt-1">
                {otherPartyIcon}
              </div>
              <div>
                <h3 className="font-medium text-black">
                  {otherParty?.name}
                </h3>
                {userRole === "LAWYER" && (
                  <p className="text-sm text-muted-foreground">
                    {otherParty?.email}
                  </p>
                )}
                {userRole === "CLIENT" && (
                  <p className="text-sm text-muted-foreground">
                    {otherParty?.practiceArea}
                  </p>
                )}
                <div className="flex items-center mt-2 text-sm text-muted-foreground">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{formatDateTime(legalCase.startTime)}</span>
                </div>
                <div className="flex items-center mt-1 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>
                    {formatTime(legalCase.startTime)} -{" "}
                    {formatTime(legalCase.endTime)}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 self-end md:self-start">
              <Badge
                variant="outline"
                className={
                  legalCase.status === "COMPLETED"
                    ? " border-emerald-900/30 text-client"
                    : legalCase.status === "CANCELLED"
                    ? "bg-red-900/20 border-red-900/30 text-red-400"
                    : " border-amber-900/30 text-amber-400"
                }
              >
                {legalCase.status}
              </Badge>
              <div className="flex gap-1  flex-wrap">
                {canMarkCompleted() && (
                  <Button
                    size="sm"
                    onClick={handleMarkCompleted}
                    disabled={completeLoading}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    {completeLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <>
                        <CheckCircle className="h-4 w-4 mr-1" />
                        Complete
                      </>
                    )}
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  className="border-client/30 border-2 bg-muted"
                  onClick={() => setOpen(true)}
                >
                  View Details
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Case Details Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-Client">
              Case Details
            </DialogTitle>
            <DialogDescription>
              {legalCase.status === "SCHEDULED"
                ? "Manage your upcoming case session"
                : "View case information"}
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            {/* Other Party Information */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                {otherPartyLabel}
              </h4>
              <div className="flex items-center">
                <div className="h-5 w-5 text-client mr-2">
                  {otherPartyIcon}
                </div>
                <div>
                  <p className="text-black font-medium">
                    {otherParty?.name}
                  </p>
                  {userRole === "LAWYER" && (
                    <p className="text-muted-foreground text-sm">
                      {otherParty?.email}
                    </p>
                  )}
                  {userRole === "CLIENT" && (
                    <p className="text-muted-foreground text-sm">
                      {otherParty?.practiceArea}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Case Time */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Scheduled Time
              </h4>
              <div className="flex flex-col gap-1">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-client mr-2" />
                  <p className="text-black">
                    {formatDateTime(legalCase.startTime)}
                  </p>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-client mr-2" />
                  <p className="text-black">
                    {formatTime(legalCase.startTime)} -{" "}
                    {formatTime(legalCase.endTime)}
                  </p>
                </div>
              </div>
            </div>

            {/* Status */}
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Status
              </h4>
              <Badge
                variant="outline"
                className={
                  legalCase.status === "COMPLETED"
                    ? "bg-emerald-900/20 border-emerald-900/30 text-emerald-400"
                    : legalCase.status === "CANCELLED"
                    ? " border-red-900/30 text-red-700"
                    : " border-amber-900/30 text-amber-700"
                }
              >
                {legalCase.status}
              </Badge>
            </div>

            {/* Client Description */}
            {legalCase.clientDescription && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  {userRole === "LAWYER"
                    ? "Client Description"
                    : "Your Description"}
                </h4>
                <div className="p-3 rounded-md bg-muted/20 border border-emerald-900/20">
                  <p className="text-black whitespace-pre-line">
                    {legalCase.clientDescription}
                  </p>
                </div>
              </div>
            )}

            {/* Join Video Call Button */}
            {legalCase.status === "SCHEDULED" && (
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Live Session
                </h4>
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-500 "
                  disabled={
                    !isCaseActive() || action === "video" || tokenLoading
                  }
                  onClick={handleJoinVideoCall}
                >
                  {tokenLoading || action === "video" ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Preparing Video Call...
                    </>
                  ) : (
                    <>
                      <Video className="h-4 w-4 mr-2 " />
                      {isCaseActive()
                        ? "Join Video Call"
                        : "Video call will be available 2 minutes before the session"}
                    </>
                  )}
                </Button>
              </div>
            )}

            {/* Lawyer Notes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-medium text-muted-foreground">
                  Legal Notes
                </h4>
                {userRole === "LAWYER" &&
                  action !== "notes" &&
                  legalCase.status !== "CANCELLED" && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setAction("notes")}
                      className="h-7 text-client  hover:bg-client/10"
                    >
                      <Edit className="h-3.5 w-3.5 mr-1" />
                      {legalCase.notes ? "Edit" : "Add"}
                    </Button>
                  )}
              </div>

              {userRole === "LAWYER" && action === "notes" ? (
                <div className="space-y-3">
                  <Textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="Enter case documentation here..."
                    className="bg-background border-emerald-900/20 min-h-[100px]"
                  />
                  <div className="flex justify-end space-x-2">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      onClick={() => {
                        setAction(null);
                        setNotes(legalCase.notes || "");
                      }}
                      disabled={notesLoading}
                      className="border-emerald-900/30"
                    >
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSaveNotes}
                      disabled={notesLoading}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      {notesLoading ? (
                        <>
                          <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" />
                          Saving...
                        </>
                      ) : (
                        "Save Notes"
                      )}
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="p-3 rounded-md bg-muted/20 border border-emerald-900/20 min-h-[80px]">
                  {legalCase.notes ? (
                    <p className="text-black whitespace-pre-line">
                      {legalCase.notes}
                    </p>
                  ) : (
                    <p className="text-muted-foreground italic">
                      No notes added yet
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>

          <DialogFooter className="flex flex-col-reverse sm:flex-row sm:justify-between sm:space-x-2">
            <div className="flex gap-2">
              {/* Mark as Complete Button - Only for lawyers */}
              {canMarkCompleted() && (
                <Button
                  onClick={handleMarkCompleted}
                  disabled={completeLoading}
                  className="bg-emerald-600 hover:bg-emerald-700"
                >
                  {completeLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Completing...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Mark Complete
                    </>
                  )}
                </Button>
              )}

              {/* Cancel Button - For scheduled cases */}
              {legalCase.status === "SCHEDULED" && (
                <Button
                  variant="outline"
                  onClick={handleCancelCase}
                  disabled={cancelLoading}
                  className="border-red-900/30 text-red-400 hover:bg-red-900/10 mt-3 sm:mt-0"
                >
                  {cancelLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Cancelling...
                    </>
                  ) : (
                    <>
                      <X className="h-4 w-4 mr-1" />
                      Cancel Case
                    </>
                  )}
                </Button>
              )}
            </div>

            <Button
              onClick={() => setOpen(false)}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}