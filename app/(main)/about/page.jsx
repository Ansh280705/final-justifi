"use client";

import { Scale, Shield, Users, Zap, Globe, MessageSquare, Video, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

const STATS = [
  { value: "10K+", label: "Cases Resolved" },
  { value: "500+", label: "Verified Lawyers" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "24/7", label: "AI Assistance" },
];

const FEATURES = [
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: "AI Legal Consultation",
    desc: "Get instant legal guidance from our AI-powered LawyerAI. Understand your rights, applicable laws, and next steps — in minutes, not weeks.",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Verified Lawyer Network",
    desc: "Browse and book sessions with verified legal professionals across practice areas. Filter by specialization, location, and availability.",
  },
  {
    icon: <Video className="w-6 h-6" />,
    title: "Secure Video Consultations",
    desc: "Meet your lawyer face-to-face from anywhere. End-to-end encrypted video calls with built-in case notes and session recording.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "Dispute Resolution",
    desc: "AI-guided dispute intake, legal notice generation, mediation scheduling, and settlement agreements — all in one streamlined pipeline.",
  },
  {
    icon: <FileText className="w-6 h-6" />,
    title: "Document Management",
    desc: "Generate legal notices, settlement agreements, and e-sign documents digitally. Every document is tracked and stored securely.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Emergency SOS",
    desc: "One-tap emergency alert system that shares your live location with trusted contacts and platform admins instantly.",
  },
];

const VALUES = [
  {
    title: "Access for All",
    desc: "Legal help shouldn't be a privilege. We're democratizing access to justice through technology.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "Trust & Transparency",
    desc: "Every lawyer is verified. Every interaction is logged. Every document is secure and tamper-proof.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Innovation First",
    desc: "We combine AI, real-time video, and digital workflows to make legal processes 10x faster.",
    gradient: "from-violet-500 to-purple-600",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-background overflow-x-hidden">

      {/* ═══════════════ HERO ═══════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(16,185,129,0.15),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(99,102,241,0.1),_transparent_60%)]" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase mb-8">
            <Scale className="w-3.5 h-3.5" />
            About Justifi
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Justice, Simplified by{" "}
            <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
              Technology
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Justifi is an AI-powered legal platform that connects people with verified lawyers,
            provides instant AI consultations, and resolves disputes — all from one place.
            We believe everyone deserves access to justice.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/ai-lawyer"
              className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-emerald-500/25 flex items-center gap-2"
            >
              Try AI Lawyer <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/lawyers"
              className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all"
            >
              Find a Lawyer
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════ STATS ═══════════════ */}
      <section className="relative -mt-16 z-20 max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-6 text-center shadow-lg shadow-slate-200/50 border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <p className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                {s.value}
              </p>
              <p className="text-sm text-slate-500 mt-1 font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ MISSION ═══════════════ */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            To make legal help accessible, affordable, and instant for every person — 
            powered by AI, backed by real professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v) => (
            <div
              key={v.title}
              className="group relative rounded-2xl p-8 bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${v.gradient}`} />
              <h3 className="text-xl font-bold text-navy mb-3">{v.title}</h3>
              <p className="text-slate-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ FEATURES ═══════════════ */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-600 text-xs font-semibold tracking-wide uppercase mb-4">
              <Zap className="w-3.5 h-3.5" />
              Platform Features
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
              Everything You Need, In One Platform
            </h2>
            <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
              From AI-powered consultations to verified lawyer bookings and dispute resolution — 
              Justifi handles the full legal journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FEATURES.map((f) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white mb-5 shadow-md shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════ HOW IT WORKS ═══════════════ */}
      <section className="py-24 max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight">
            How Justifi Works
          </h2>
          <p className="mt-4 text-lg text-slate-500 max-w-2xl mx-auto">
            Three simple steps to get the legal help you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: "01",
              title: "Describe Your Issue",
              desc: "Tell our AI about your legal concern. It'll ask smart follow-up questions and analyze your situation instantly.",
              color: "from-emerald-500 to-teal-500",
            },
            {
              step: "02",
              title: "Get AI + Expert Guidance",
              desc: "Receive an AI-generated legal analysis, or book a session with a verified lawyer for deeper consultation.",
              color: "from-blue-500 to-indigo-500",
            },
            {
              step: "03",
              title: "Resolve & Document",
              desc: "Generate legal notices, mediate disputes, e-sign agreements — and track everything from your dashboard.",
              color: "from-violet-500 to-purple-500",
            },
          ].map((s) => (
            <div key={s.step} className="relative text-center group">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} text-white text-2xl font-extrabold mb-6 shadow-lg group-hover:scale-110 transition-transform`}
              >
                {s.step}
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════ CTA ═══════════════ */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(16,185,129,0.12),_transparent_70%)]" />

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Join thousands who have already found justice through Justifi. 
            Your first AI consultation is free.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/ai-lawyer"
              className="px-8 py-3.5 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-xl hover:opacity-90 transition-all shadow-lg shadow-emerald-500/25 text-lg"
            >
              Start Free Consultation
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            No credit card required · AI-powered · Instant results
          </p>
        </div>
      </section>
    </main>
  );
}
