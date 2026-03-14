"use client";

import { useState } from "react";
import { Plus, Database, FileText, Trash, Search, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { createKnowledgeBase, addDocumentToKB } from "@/actions/rag";

export function KnowledgeBaseMgr({ collections: initialCollections }) {
  const [collections, setCollections] = useState(initialCollections || []);
  const [isAdding, setIsAdding] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedKb, setSelectedKb] = useState(null);

  // Form states
  const [newKb, setNewKb] = useState({ title: "", category: "", description: "" });
  const [docText, setDocText] = useState("");

  const handleCreateKB = async () => {
    if (!newKb.title) return toast.error("Title is required");
    setIsProcessing(true);
    try {
      const res = await createKnowledgeBase(newKb);
      if (res.success) {
        setCollections([res.data, ...collections]);
        setIsAdding(false);
        setNewKb({ title: "", category: "", description: "" });
        toast.success("Knowledge Base created!");
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Failed to create collection");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleAddDocument = async () => {
    if (!docText.trim()) return toast.error("Document text is empty");
    setIsProcessing(true);
    try {
      const res = await addDocumentToKB(selectedKb.id, docText);
      if (res.success) {
        toast.success(`Processed ${res.count} chunks successfully!`);
        setDocText("");
        setSelectedKb(null);
        // Usually we'd refresh the count here
      } else {
        toast.error(res.error);
      }
    } catch (err) {
      toast.error("Failed to process document");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card border-emerald-900/20">
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="text-xl font-bold text-client">Legal Notification Base (RAG)</CardTitle>
              <CardDescription>Manage grounding data for LawyerAI consultations</CardDescription>
            </div>
            <Button 
              onClick={() => setIsAdding(!isAdding)} 
              variant={isAdding ? "outline" : "default"}
              className="gap-2"
            >
              {isAdding ? "Cancel" : <><Plus size={16} /> New Collection</>}
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {isAdding && (
            <div className="mb-8 p-4 border rounded-xl bg-slate-50 space-y-4 animate-in fade-in slide-in-from-top-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Collection Title (e.g. IPC Section 300)" 
                  value={newKb.title}
                  onChange={(e) => setNewKb({...newKb, title: e.target.value})}
                />
                <Input 
                  placeholder="Category (e.g. Criminal Law)" 
                  value={newKb.category}
                  onChange={(e) => setNewKb({...newKb, category: e.target.value})}
                />
              </div>
              <Textarea 
                placeholder="Brief description of this collection..." 
                value={newKb.description}
                onChange={(e) => setNewKb({...newKb, description: e.target.value})}
              />
              <Button onClick={handleCreateKB} disabled={isProcessing} className="w-full">
                {isProcessing ? <Loader2 className="animate-spin" /> : "Create Collection"}
              </Button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {collections.map((kb) => (
              <Card key={kb.id} className="border-emerald-900/10 hover:shadow-md transition cursor-default">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center gap-2">
                      <Database className="text-emerald-600" size={18} />
                      <CardTitle className="text-lg">{kb.title}</CardTitle>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold uppercase">
                      {kb.category || "Uncategorized"}
                    </span>
                  </div>
                  <CardDescription className="line-clamp-2">{kb.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {kb._count?.chunks || 0} Chunks indexed
                    </span>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="text-xs h-8 gap-2"
                      onClick={() => setSelectedKb(kb)}
                    >
                      <Plus size={14} /> Add Data
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {!collections.length && !isAdding && (
            <div className="text-center py-12 border border-dashed rounded-xl bg-muted/5">
              <Database className="mx-auto h-12 w-12 text-muted-foreground/30 mb-4" />
              <h3 className="text-lg font-medium text-muted-foreground">No Knowledge Collections</h3>
              <p className="text-sm text-muted-foreground/60 mb-6">Create your first collection to start grounding your AI.</p>
              <Button onClick={() => setIsAdding(true)} variant="outline">
                Create Collection
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Upload/Add Data Modal Interface */}
      {selectedKb && (
        <Card className="bg-white border-navy/20 shadow-2xl animate-in zoom-in-95 duration-200">
          <CardHeader className="bg-navy text-white rounded-t-lg">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Add Data to {selectedKb.title}</CardTitle>
                <CardDescription className="text-white/70">Text will be chunked and vectorized for semantic search.</CardDescription>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setSelectedKb(null)} className="text-white hover:bg-white/10">
                ✕
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <div className="bg-yellow-50 border border-yellow-100 p-3 rounded-lg flex items-start gap-3">
              <FileText className="text-yellow-600 shrink-0" size={18} />
              <p className="text-xs text-yellow-800">
                Paste complex legal text, statutes, or case summaries here. Our engine will automatically process it for the AI to use.
              </p>
            </div>
            <Textarea 
              className="min-h-[300px] font-mono text-sm" 
              placeholder="Paste document content here..." 
              value={docText}
              onChange={(e) => setDocText(e.target.value)}
            />
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={() => setSelectedKb(null)}>Cancel</Button>
              <Button 
                onClick={handleAddDocument} 
                disabled={isProcessing || !docText.trim()}
                className="bg-navy"
              >
                {isProcessing ? (
                  <><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Processing Vectors...</>
                ) : (
                  "Process & Embed"
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
