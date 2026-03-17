"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";

interface LegalGatewayProps {
  isOpen: boolean;
  onClose: () => void;
  signingUrl: string | null;
  onSuccess: () => void;
}

export function LegalGateway({ isOpen, onClose, signingUrl, onSuccess }: LegalGatewayProps) {
  const [iframeLoading, setIframeLoading] = useState(true);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Leegality sends a message when signing is successful
      if (event.data === "leegality-success") {
        toast.success("Document signed successfully!");
        onSuccess();
        onClose();
      }
      
      if (event.data === "leegality-cancel") {
        toast.error("Signing cancelled.");
        onClose();
      }
    };

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [onClose, onSuccess]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl overflow-hidden">
        <DialogHeader className="p-4 bg-emerald-600 text-white shrink-0">
          <DialogTitle className="flex items-center gap-2">
            Secure Legal Gateway - Review & Sign
          </DialogTitle>
        </DialogHeader>
        
        <div className="relative flex-1 h-full w-full">
          {iframeLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-50/50">
              <Loader2 className="h-10 w-10 animate-spin text-emerald-600 mb-2" />
              <p className="text-sm text-gray-600 font-medium">Initializing Secure Signature Portal...</p>
            </div>
          )}
          
          {signingUrl && (
            <iframe
              src={signingUrl}
              className="w-full h-full border-none"
              onLoad={() => setIframeLoading(false)}
              allow="geolocation; camera"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
