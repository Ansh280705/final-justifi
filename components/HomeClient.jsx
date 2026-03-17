"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ShieldCheck, Scale, FileText, 
  CheckCircle2, PlayCircle, Star, Gavel, 
  Users, MessageSquare, Shield, Globe, 
  Search, FileDown, BrainCircuit, Video,
  ChevronRight, ArrowDownRight, Sparkles,
  Zap, Building2, Briefcase, FileSignature, 
  UserPlus, FileCheck, CheckCircle
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomeClient() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden pt-24 font-sans text-navy">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-12 pb-32 lg:pt-20 lg:pb-48">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px] pointer-events-none opacity-60"></div>
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px] pointer-events-none opacity-60"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[13px] font-bold mb-8 shadow-sm"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Next-Gen AI Legal Platform
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-6xl lg:text-[88px] font-black text-navy tracking-tighter leading-[0.92] mb-8"
              >
                Your AI Legal <br />
                Advocate for <br />
                <span className="text-emerald-500">Every Dispute</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg lg:text-2xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium"
              >
                Understand your rights, analyze disputes, and resolve legal conflicts faster with AI-powered legal guidance.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-5 mb-12"
              >
                <Link href="/onboarding" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-black rounded-2xl text-white bg-navy hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1">
                  Open a Case
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Link>
                <Link href="/lawyers" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-bold rounded-2xl text-navy bg-white border border-slate-200 hover:border-emerald-200 hover:bg-slate-50 transition-all shadow-sm">
                  Find Top Lawyers
                </Link>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-[14px] text-slate-400 font-bold"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1,2,3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white"></div>)}
                    <div className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px] font-black border-2 border-white">+10k</div>
                  </div>
                  Trusted by 10,000+ users
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  Bank-level security
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-500" />
                  Verified lawyers
                </div>
              </motion.div>
            </div>

            {/* Right Visual (Owl Mascot + 3D Elements) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex-1 w-full max-w-2xl relative"
            >
              {/* Floating Element: Scales of Justice */}
              <motion.div 
                className="absolute -top-10 -left-10 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center z-20 animate-float"
              >
                <Scale className="w-10 h-10 text-emerald-500" />
              </motion.div>
              
              {/* Floating Element: Legal Docs */}
              <motion.div 
                className="absolute top-1/2 -right-12 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-20 animate-float-slow"
              >
                <FileText className="w-10 h-10 text-blue-500" />
              </motion.div>

              {/* Floating Element: Gavel */}
              <motion.div 
                className="absolute bottom-10 -left-5 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-20 animate-float-delayed"
              >
                <Gavel className="w-10 h-10 text-amber-500" />
              </motion.div>

              {/* Mascot Image */}
              <div className="relative z-10 w-full aspect-square flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-blue-100/50 rounded-full blur-3xl scale-75 animate-pulse"></div>
                <Image
                  src="/justifi-owl.png"
                  alt="Justifi Owl Lawyer Mascot"
                  width={600}
                  height={600}
                  className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                  priority
                />
              </div>

              {/* Subtle Glowing Accents */}
              <div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full blur-md animate-ping"></div>
              <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full blur-sm animate-pulse shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-navy relative overflow-hidden">
        {/* Dark Grid Background */}
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "10 min", sub: "Avg Response", icon: <Zap className="w-6 h-6" /> },
              { label: "10,000+", sub: "Verified Clients", icon: <Users className="w-6 h-6" /> },
              { label: "365", sub: "Days Active", icon: <Globe className="w-6 h-6" /> },
              { label: "24/7", sub: "Legal Support", icon: <Shield className="w-6 h-6" /> }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md text-center group transition-all"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
                <div className="text-3xl font-black text-white mb-1">{stat.label}</div>
                <div className="text-sm font-bold text-slate-400 tracking-wide uppercase">{stat.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-emerald-500 font-black tracking-widest uppercase text-sm mb-4">Core Platform</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-8">Empowering your legal journey</h3>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              We bridge the gap between people and justice with streamlined case management and direct expert access.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-12 bg-white rounded-[48px] border border-slate-100 hover:border-emerald-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(16,185,129,0.08)] transition-all duration-500"
            >
              <div className="w-18 h-18 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-10 border border-emerald-100 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Building2 className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-navy mb-5 tracking-tight">Smart Case Scheduling</h4>
              <p className="text-slate-500 leading-relaxed font-medium mb-10">
                Centralized legal case management with automated scheduling and deadline tracking for maximum efficiency.
              </p>
              <Link href="/onboarding" className="inline-flex items-center text-emerald-600 font-black group-hover:gap-3 transition-all">
                Learn more <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Feature 2 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-12 bg-white rounded-[48px] border border-slate-100 hover:border-blue-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(59,130,246,0.08)] transition-all duration-500"
            >
              <div className="w-18 h-18 rounded-3xl bg-blue-50 text-blue-600 flex items-center justify-center mb-10 border border-blue-100 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <Video className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-navy mb-5 tracking-tight">Secure Video Consults</h4>
              <p className="text-slate-500 leading-relaxed font-medium mb-10">
                End-to-end encrypted consultations with verified legal professionals from the comfort of your home.
              </p>
              <Link href="/lawyers" className="inline-flex items-center text-blue-600 font-black group-hover:gap-3 transition-all">
                Find an expert <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>

            {/* Feature 3 */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="group p-12 bg-white rounded-[48px] border border-slate-100 hover:border-purple-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_80px_rgba(168,85,247,0.08)] transition-all duration-500"
            >
              <div className="w-18 h-18 rounded-3xl bg-purple-50 text-purple-600 flex items-center justify-center mb-10 border border-purple-100 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300 shadow-sm">
                <BrainCircuit className="w-9 h-9" />
              </div>
              <h4 className="text-2xl font-black text-navy mb-5 tracking-tight">Practice Intelligence</h4>
              <p className="text-slate-500 leading-relaxed font-medium mb-10">
                AI-powered insights and legal document automation to handle repetitive drafting and discovery tasks instantly.
              </p>
              <Link href="/onboarding" className="inline-flex items-center text-purple-600 font-black group-hover:gap-3 transition-all">
                Explore AI <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-32 bg-[#fafafa] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-8">How It Works</h3>
            <p className="text-lg text-slate-500 font-medium">Simple 5-step process to get legal justice</p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200 -translate-y-1/2 hidden lg:block"></div>
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
              {[
                { title: "Submit Dispute", icon: <MessageSquare className="w-7 h-7" />, desc: "Describe your situation" },
                { title: "AI Analysis", icon: <BrainCircuit className="w-7 h-7" />, desc: "Our AI brain analyzes laws" },
                { title: "Get Advice", icon: <Scale className="w-7 h-7" />, desc: "Actionable recommendations" },
                { title: "Connect", icon: <Users className="w-7 h-7" />, desc: "Instant legal matching" },
                { title: "Resolved", icon: <CheckCircle className="w-7 h-7" />, desc: "Case formally closed" }
              ].map((step, i) => (
                <div key={i} className="flex flex-col items-center">
                  <motion.div 
                    whileHover={{ scale: 1.1 }}
                    className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 text-navy flex items-center justify-center mb-6 shadow-xl relative"
                  >
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white">{i + 1}</div>
                    {step.icon}
                  </motion.div>
                  <h4 className="text-xl font-black text-navy mb-2">{step.title}</h4>
                  <p className="text-sm text-slate-500 font-medium text-center">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= AI ANALYZER SECTION ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="bg-navy rounded-[64px] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
            
            <div className="flex-1 z-10">
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-8">
                Featured Innovation
              </div>
              <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">AI Dispute Analyzer</h3>
              <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
                Upload a dispute description, and our AI identifies legal issues, suggests legal actions, and even generates drafted documents instantly.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Identify core legal issues",
                  "Auto-generate legal notices",
                  "Instant jurisdictional matching",
                  "AI risk-level assessment"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-white font-bold">
                    <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-navy" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <Link href="/onboarding" className="inline-flex items-center justify-center px-10 py-5 text-base font-black rounded-2xl text-navy bg-emerald-500 hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                Try AI Analyzer
                <Zap className="ml-3 w-5 h-5" />
              </Link>
            </div>

            <div className="flex-1 w-full relative">
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full aspect-square flex items-center justify-center p-10"
              >
                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-90"></div>
                <Image
                  src="/justifi-ai-brain.png"
                  alt="AI Legal Brain"
                  width={500}
                  height={500}
                  className="object-contain drop-shadow-[0_0_80px_rgba(16,185,129,0.3)]"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-6">Dispute Categories</h3>
              <p className="text-lg text-slate-500 font-medium">Coverage for every legal struggle in your life.</p>
            </div>
            <Link href="/lawyers" className="text-navy font-black flex items-center group">
              View all practice areas <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Tenant Disputes", icon: <Building2 className="w-6 h-6" />, color: "bg-blue-500" },
              { title: "Consumer Complaints", icon: <Briefcase className="w-6 h-6" />, color: "bg-emerald-500" },
              { title: "Employment Conflicts", icon: <Users className="w-6 h-6" />, color: "bg-purple-500" },
              { title: "Property Disputes", icon: <Globe className="w-6 h-6" />, color: "bg-amber-500" },
              { title: "Contract Breaches", icon: <FileSignature className="w-6 h-6" />, color: "bg-red-500" },
              { title: "Family Law", icon: <HeartIcon className="w-6 h-6" />, color: "bg-pink-500" }
            ].map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.02 }}
                className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-emerald-200 transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl ${cat.color} text-white flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform`}>
                  {cat.icon}
                </div>
                <h4 className="text-xl font-black text-navy">{cat.title}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h3 className="text-4xl font-black text-navy mb-20">Success Stories</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { name: "Rahul Sharma", text: "Successfully resolved my rental deposit dispute within 15 days using Justifi AI notice generation.", role: "Tenant" },
              { name: "Priya Varma", text: "The video consultation was seamless. The lawyer was highly professional and saved me from a bad contract.", role: "Entrepreneur" },
              { name: "S. K. Gupta", text: "Truly futuristic. My consumer case was stuck for 2 years. AI analyzer gave me the right path immediately.", role: "Consumer" }
            ].map((t, i) => (
              <div key={i} className="p-10 bg-[#fafafa] rounded-[40px] text-left border border-slate-100 flex flex-col justify-between">
                <p className="text-lg text-slate-600 font-medium italic mb-8">"{t.text}"</p>
                <div>
                  <div className="text-xl font-black text-navy">{t.name}</div>
                  <div className="text-sm font-bold text-emerald-500 uppercase">{t.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-navy pt-32 pb-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-16 mb-24">
            <div className="col-span-2">
              <Link href="/" className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Scale className="w-6 h-6 text-navy" />
                </div>
                <span className="text-3xl font-black text-white tracking-tighter">Justifi</span>
              </Link>
              <p className="text-xl text-slate-400 max-w-sm mb-12">
                Empowering citizens with AI-driven legal justice and professional management.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-black text-lg mb-8">Resources</h5>
              <ul className="space-y-4">
                <li><Link href="/blog" className="text-slate-400 hover:text-emerald-400 font-medium">Legal Knowledge</Link></li>
                <li><Link href="/help-center" className="text-slate-400 hover:text-emerald-400 font-medium">FAQ</Link></li>
                <li><Link href="/privacy-policy" className="text-slate-400 hover:text-emerald-400 font-medium">Privacy Policy</Link></li>
              </ul>
            </div>

            <div>
              <h5 className="text-white font-black text-lg mb-8">Connect</h5>
              <ul className="space-y-4">
                <li><Link href="/lawyers" className="text-slate-400 hover:text-emerald-400 font-medium">Contact Lawyers</Link></li>
                <li><Link href="/about" className="text-slate-400 hover:text-emerald-400 font-medium">About Us</Link></li>
                <li><Link href="/terms-and-conditions" className="text-slate-400 hover:text-emerald-400 font-medium">Terms</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-slate-500 font-bold text-sm">© 2026 Justifi AI. All rights reserved.</p>
            <div className="flex items-center gap-8">
               <ShieldCheck className="w-6 h-6 text-slate-600" />
               <Gavel className="w-6 h-6 text-slate-600" />
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
