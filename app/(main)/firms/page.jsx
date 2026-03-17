"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { getFirms } from "@/actions/firms";
import { MapPin, Star, Clock, IndianRupee, Building2 } from "lucide-react";

const FirmsPage = () => {
  const [firms, setFirms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedFirm, setSelectedFirm] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    async function fetchFirms() {
      const { success, firms: data } = await getFirms();
      if (success) {
        setFirms(data || []);
      }
      setLoading(false);
    }
    fetchFirms();
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center min-h-[400px]">
          <p className="text-slate-600">Loading firms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Page Header */}
      <div className="flex flex-col items-center justify-center mb-12 text-center">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">Legal Firms</h1>
        <p className="text-slate-600 text-lg max-w-2xl">
          Connect with top-rated legal firms near you. Verified offices, expert representation, and transparent pricing.
        </p>
      </div>

      {/* Firms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {firms.map((firm) => (
          <Card key={firm.id} className="border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-xl font-bold text-slate-800 mb-2">{firm.name}</CardTitle>
                  <CardDescription className="flex items-center text-slate-500">
                    <MapPin className="w-4 h-4 mr-1 shrink-0" />
                    <span className="text-sm">{firm.address}</span>
                  </CardDescription>
                </div>
                <div className="flex items-center bg-teal-50 px-2 py-1 rounded text-teal-700 text-sm font-medium">
                  <Star className="w-4 h-4 mr-1 fill-teal-700" />
                  {firm.rating}
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
               <div className="space-y-3 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-slate-400" />
                    <span>{firm.timings}</span>
                  </div>
                   <div className="flex items-center font-medium text-slate-900">
                    <IndianRupee className="w-4 h-4 mr-2 text-slate-500" />
                    <span>Consultation Starts from ₹{firm.price}</span>
                  </div>
               </div>
            </CardContent>
             <CardFooter className="pt-4 border-t border-slate-100">
                <Button 
                   className="w-full bg-teal-600 text-white hover:bg-teal-700"
                   onClick={() => {
                     setSelectedFirm(firm);
                     setDialogOpen(true);
                   }}
                >
                    Contact Firm
                </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Phone Number Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedFirm?.name}</DialogTitle>
            <DialogDescription>Contact Information</DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
            {selectedFirm?.phone ? (
              <div className="flex flex-col items-center space-y-4">
                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-2">Call to connect with the firm</p>
                  <a 
                    href={`tel:${selectedFirm.phone}`}
                    className="text-2xl font-bold text-teal-600 hover:text-teal-700"
                  >
                    {selectedFirm.phone}
                  </a>
                </div>
                <Button 
                   className="w-full bg-teal-600 hover:bg-teal-700"
                   onClick={() => window.open(`tel:${selectedFirm.phone}`)}
                >
                  Call Now
                </Button>
              </div>
            ) : (
              <p className="text-center text-muted-foreground">
                Phone number not available for this firm
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FirmsPage;