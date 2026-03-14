"use client";

import { useState, useEffect } from "react";
import { getLawyersByCity } from "@/actions/lawyers-listing";
import { LawyerCard } from "@/components/lawyer-card";
import { PageHeader } from "@/components/page-header";
import { Search, MapPin, Loader2, Users } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function LawyerSearchPage() {
  const [city, setCity] = useState("");
  const [lawyers, setLawyers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = async (e) => {
    if (e) e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setSearched(true);
    try {
      const { lawyers: results, error } = await getLawyersByCity(city);
      if (error) {
        console.error(error);
        setLawyers([]);
      } else {
        setLawyers(results || []);
      }
    } catch (err) {
      console.error(err);
      setLawyers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <PageHeader
        icon={<MapPin />}
        title="Find Lawyers Nearby"
        backLink="/cases"
        backLabel="My Dashboard"
      />

      <Card className="border-emerald-900/20 mb-8 overflow-hidden bg-navy text-white shadow-2xl">
        <CardContent className="pt-10 pb-12 px-8 relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <h2 className="text-3xl font-black mb-4 tracking-tight">Search Lawyers by City</h2>
            <p className="text-slate-400 mb-8 font-medium">Connect with verified legal professionals in your immediate area for easier face-to-face consultations.</p>
            
            <form onSubmit={handleSearch} className="flex gap-3">
              <div className="relative flex-1 group">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-emerald-500 group-hover:scale-110 transition-transform" />
                <Input
                  placeholder="Enter your city (e.g. Mumbai, Delhi...)"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-slate-500 rounded-2xl focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all font-bold"
                />
              </div>
              <Button 
                type="submit" 
                disabled={loading}
                className="h-14 px-8 bg-emerald-500 hover:bg-emerald-400 text-navy font-black rounded-2xl shadow-xl shadow-emerald-500/20 active:scale-95 transition-all"
              >
                {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : <><Search className="h-5 w-5 mr-2" /> Search</>}
              </Button>
            </form>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 animate-pulse">
            <Loader2 className="h-12 w-12 text-emerald-500 animate-spin mb-4" />
            <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Finding matches in {city}...</p>
          </div>
        ) : lawyers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {lawyers.map((lawyer) => (
              <LawyerCard key={lawyer.id} lawyer={lawyer} />
            ))}
          </div>
        ) : searched ? (
          <div className="text-center py-24 bg-white rounded-[32px] border border-slate-100 shadow-sm">
            <Users className="h-16 w-16 mx-auto text-slate-200 mb-6" />
            <h3 className="text-2xl font-black text-navy mb-2">No Lawyers Found</h3>
            <p className="text-slate-500 font-medium max-w-sm mx-auto">
              We couldn't find any verified lawyers in <span className="text-emerald-500 font-bold">"{city}"</span> yet. Try a different city or browse all practice areas.
            </p>
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-[32px] border border-slate-100 shadow-sm">
            <MapPin className="h-16 w-16 mx-auto text-slate-100 mb-6" />
            <h3 className="text-2xl font-black text-navy mb-2">Ready to Search?</h3>
            <p className="text-slate-500 font-medium">Enter a city name above to find legal experts near you.</p>
          </div>
        )}
      </div>
    </div>
  );
}
