"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import {
  motion, AnimatePresence, useInView, useScroll, useTransform,
  useMotionValue, useSpring, useAnimationControls
} from "framer-motion";
import {
  ArrowRight, ShieldCheck, Scale, FileText,
  CheckCircle2, PlayCircle, Star, Gavel,
  Users, MessageSquare, Shield, Globe,
  Search, FileDown, BrainCircuit, Video,
  ChevronRight, ArrowDownRight, Sparkles,
  Zap, Building2, Briefcase, FileSignature,
  UserPlus, FileCheck, CheckCircle, ChevronDown, MousePointer
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CanvasBackground from "@/components/CanvasBackground";
import { useTranslations } from "next-intl";

// ═══════════════════════════════════════════════════
// ANIMATION PRIMITIVES - World-class reusable components
// ═══════════════════════════════════════════════════

// ─── Smooth scroll reveal with multiple directions ───
function ScrollReveal({ children, className = "", delay = 0, direction = "up" }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const variants = {
    up: { hidden: { opacity: 0, y: 80 }, visible: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -80 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -80 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 80 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.8 }, visible: { opacity: 1, scale: 1 } },
    fade: { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  };
  return (
    <motion.div ref={ref} className={className}
      initial="hidden" animate={isInView ? "visible" : "hidden"}
      variants={variants[direction]}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

// ─── Staggered container + item ───
function StaggerContainer({ children, className = "", staggerDelay = 0.1 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden" animate={isInView ? "visible" : "hidden"}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: staggerDelay } } }}
    >{children}</motion.div>
  );
}

function StaggerItem({ children, className = "", direction = "up" }) {
  const v = {
    up: { hidden: { opacity: 0, y: 60 }, visible: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
    scale: { hidden: { opacity: 0, scale: 0.75 }, visible: { opacity: 1, scale: 1 } },
  };
  return (
    <motion.div className={className} variants={v[direction]}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >{children}</motion.div>
  );
}

// ─── Character-by-Character Text Reveal ───
function TextReveal({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <span ref={ref} className={className}>
      {text.split("").map((char, i) => (
        <motion.span key={i} className="inline-block"
          initial={{ opacity: 0, y: 20, rotateX: 90 }}
          animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + i * 0.02, ease: [0.22, 1, 0.36, 1] }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

// ─── Word-by-Word Reveal ───
function WordReveal({ text, className = "", delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const words = text.split(" ");
  return (
    <span ref={ref} className={className}>
      {words.map((word, i) => (
        <motion.span key={i} className="inline-block mr-[0.3em]"
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.6, delay: delay + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
        >{word}</motion.span>
      ))}
    </span>
  );
}

// ─── Animated Counter ───
function AnimatedCounter({ target, suffix = "", duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = parseInt(target.replace(/[^0-9]/g, ""));
    if (!end) { setCount(target); return; }
    const step = Math.ceil(end / (duration * 60));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 1000 / 60);
    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return <span ref={ref}>{typeof count === "number" ? count.toLocaleString() : count}{suffix}</span>;
}

// ─── 3D Tilt Card ───
function TiltCard({ children, className = "" }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div ref={ref} className={className} style={{ rotateX, rotateY, transformPerspective: 1000 }}
      onMouseMove={handleMouse} onMouseLeave={handleLeave}
    >{children}</motion.div>
  );
}

// ─── Magnetic Button ───
function MagneticButton({ children, className = "", href }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouse = (e) => {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  const Comp = href ? motion.create(Link) : motion.div;
  return (
    <Comp ref={ref} href={href} className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouse} onMouseLeave={handleLeave}
      whileTap={{ scale: 0.95 }}
    >{children}</Comp>
  );
}

// ─── Floating Particles Background ───
function ParticleField() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {Array.from({ length: 30 }).map((_, i) => (
        <motion.div key={i}
          className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -40 - Math.random() * 60, 0],
            x: [0, (Math.random() - 0.5) * 30, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1 + Math.random(), 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// ─── Aurora Gradient Background ───
function AuroraBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <motion.div
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[800px] h-[800px] bg-emerald-50/50 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-[100px]"
        animate={{ scale: [1, 1.2, 1], rotate: [0, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-50/30 rounded-full blur-[100px]"
        animate={{ scale: [0.8, 1.1, 0.8], x: [-50, 50, -50] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

// ─── Line draw animation for How It Works ───
function AnimatedLine() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <div ref={ref} className="absolute top-1/2 left-0 w-full h-1 -translate-y-1/2 hidden lg:block overflow-hidden">
      <motion.div className="h-full bg-gradient-to-r from-emerald-200 via-blue-200 to-purple-200"
        initial={{ scaleX: 0 }} animate={isInView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left" }}
      />
    </div>
  );
}


// ═══════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════

export default function HomeClient() {
  const tHero = useTranslations("Hero");
  const tStats = useTranslations("Stats");
  const tFeatures = useTranslations("Features");
  const tHowItWorks = useTranslations("HowItWorks");
  const tAnalyzer = useTranslations("Analyzer");
  const tCategories = useTranslations("Categories");
  const tTestimonials = useTranslations("Testimonials");
  const tNavbar = useTranslations("Navbar");
  const tFooter = useTranslations("Footer");
  const [activeStep, setActiveStep] = useState(0);

  // Scroll-to-unlock
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scrollIndicatorY = useTransform(scrollYProgress, [0, 0.25], [0, 40]);

  // Parallax for hero image
  const heroImageY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroBgScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);

  return (
    <div className="relative min-h-screen bg-[#fcfcfd] selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden pt-24 font-sans text-navy">
      {/* Interactive Canvas Particle Network */}
      <CanvasBackground />

      {/* ================= HERO SECTION ================= */}
      <section ref={heroRef} className="relative pt-12 pb-32 lg:pt-20 lg:pb-48">
        <AuroraBackground />
        <ParticleField />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left z-10">
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-[13px] font-bold mb-8 shadow-sm"
              >
                <motion.div animate={{ rotate: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}>
                  <Sparkles className="w-4 h-4 mr-2" />
                </motion.div>
                {tHero("badge")}
              </motion.div>

              <h1 className="text-6xl lg:text-[88px] font-black text-navy tracking-tighter leading-[0.92] mb-8">
                <TextReveal text={tHero("title1")} delay={0.2} />
                <br />
                <TextReveal text={tHero("title2")} delay={0.5} />
                <br />
                <span className="text-emerald-500">
                  <TextReveal text={tHero("title3")} delay={0.8} />
                </span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.8, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-lg lg:text-2xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium"
              >
                {tHero("description")}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="flex flex-col sm:flex-row items-center gap-5 mb-12"
              >
                <MagneticButton href="/submit-dispute" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-black rounded-2xl text-white bg-navy hover:bg-slate-800 transition-all shadow-2xl hover:-translate-y-1">
                  {tHero("buttons.resolve")}
                  <ArrowRight className="ml-3 w-5 h-5" />
                </MagneticButton>
                <MagneticButton href="/legal-ai" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-black rounded-2xl text-white bg-[#00C896] hover:bg-[#00DDA6] transition-all shadow-xl hover:-translate-y-1">
                  <BrainCircuit className="mr-2 w-5 h-5" />
                  {tHero("buttons.assistant")}
                </MagneticButton>
                <MagneticButton href="/lawyers" className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base font-bold rounded-2xl text-navy bg-white border border-slate-200 hover:border-emerald-200 hover:bg-slate-50 transition-all shadow-sm">
                  {tHero("buttons.lawyers")}
                </MagneticButton>
              </motion.div>

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.8 }}
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-[14px] text-slate-400 font-bold"
              >
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <motion.div key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.9 + i * 0.1, type: "spring" }} className="w-6 h-6 rounded-full bg-slate-200 border-2 border-white" />)}
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2.2, type: "spring" }} className="w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[8px] font-black border-2 border-white">+10k</motion.div>
                  </div>
                  {tHero("trust.users")}
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-500" />
                  {tHero("trust.security")}
                </div>
                <div className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-emerald-500" />
                  {tHero("trust.verified")}
                </div>
              </motion.div>
            </div>

            {/* Right Visual — Parallax Lady Justice */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: heroImageY }}
              className="flex-1 w-full max-w-2xl relative"
            >
              <motion.div
                className="absolute -top-10 -left-10 w-24 h-24 bg-white rounded-3xl shadow-2xl flex items-center justify-center z-20 animate-float"
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <Scale className="w-10 h-10 text-emerald-500" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-20 animate-float-slow"
                whileHover={{ scale: 1.15, rotate: -10 }}
              >
                <FileText className="w-10 h-10 text-blue-500" />
              </motion.div>

              <motion.div
                className="absolute bottom-10 -left-5 w-20 h-20 bg-white rounded-2xl shadow-2xl flex items-center justify-center z-20 animate-float-delayed"
                whileHover={{ scale: 1.15, rotate: 10 }}
              >
                <Gavel className="w-10 h-10 text-amber-500" />
              </motion.div>

              <div className="relative z-10 w-full aspect-square flex items-center justify-center">
                <motion.div className="absolute inset-0 bg-gradient-to-tr from-emerald-100/50 to-blue-100/50 rounded-full blur-3xl scale-75"
                  animate={{ scale: [0.75, 0.85, 0.75], rotate: [0, 180, 360] }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
                <Image src="/lady-justice.png" alt="Justifi Lady Justice Mascot" width={600} height={600}
                  className="object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.1)]" priority />
              </div>

              <motion.div className="absolute top-1/4 right-1/4 w-3 h-3 bg-emerald-400 rounded-full blur-md"
                animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </div>
        </div>

        {/* ─── SCROLL TO UNLOCK ─── */}
        <motion.div style={{ opacity: scrollIndicatorOpacity, y: scrollIndicatorY }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20"
        >
          <motion.span className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Scroll to Explore
          </motion.span>
          <div className="w-8 h-14 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
            <motion.div className="w-1.5 h-3 bg-emerald-500 rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-5 h-5 text-slate-400" />
          </motion.div>
        </motion.div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.05]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:48px_48px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6" staggerDelay={0.12}>
            {[
              { label: "10", suffix: " min", sub: tStats("response"), icon: <Zap className="w-6 h-6" /> },
              { label: "10000", suffix: "+", sub: tStats("clients"), icon: <Users className="w-6 h-6" /> },
              { label: "365", suffix: "", sub: tStats("days"), icon: <Globe className="w-6 h-6" /> },
              { label: "24/7", suffix: "", sub: tStats("support"), icon: <Shield className="w-6 h-6" />, isText: true }
            ].map((stat, i) => (
              <StaggerItem key={i} direction="up">
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(16,185,129,0.15)" }}
                    className="p-8 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-md text-center group transition-all"
                  >
                    <motion.div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {stat.icon}
                    </motion.div>
                    <div className="text-3xl font-black text-white mb-1">
                      {stat.isText ? stat.label : <AnimatedCounter target={stat.label} suffix={stat.suffix} />}
                    </div>
                    <div className="text-sm font-bold text-slate-400 tracking-wide uppercase">{stat.sub}</div>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-emerald-500 font-black tracking-widest uppercase text-sm mb-4">{tFeatures("badge")}</h2>
            <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-8">
              <WordReveal text={tFeatures("title")} />
            </h3>
            <p className="text-lg text-slate-500 leading-relaxed font-medium">
              {tFeatures("description")}
            </p>
          </ScrollReveal>

          <StaggerContainer className="grid md:grid-cols-3 gap-8" staggerDelay={0.18}>
            {[
              { icon: <Building2 className="w-9 h-9" />, title: tFeatures("cards.scheduling.title"), desc: tFeatures("cards.scheduling.desc"), link: "/onboarding", linkText: tFeatures("cards.scheduling.link"), color: "emerald", bgColor: "bg-emerald-50", textColor: "text-emerald-600", borderHover: "hover:border-emerald-100", shadowHover: "hover:shadow-[0_40px_80px_rgba(16,185,129,0.08)]", iconHoverBg: "group-hover:bg-emerald-500" },
              { icon: <Video className="w-9 h-9" />, title: tFeatures("cards.secure.title"), desc: tFeatures("cards.secure.desc"), link: "/lawyers", linkText: tFeatures("cards.secure.link"), color: "blue", bgColor: "bg-blue-50", textColor: "text-blue-600", borderHover: "hover:border-blue-100", shadowHover: "hover:shadow-[0_40px_80px_rgba(59,130,246,0.08)]", iconHoverBg: "group-hover:bg-blue-500" },
              { icon: <BrainCircuit className="w-9 h-9" />, title: tFeatures("cards.ai.title"), desc: tFeatures("cards.ai.desc"), link: "/onboarding", linkText: tFeatures("cards.ai.link"), color: "purple", bgColor: "bg-purple-50", textColor: "text-purple-600", borderHover: "hover:border-purple-100", shadowHover: "hover:shadow-[0_40px_80px_rgba(168,85,247,0.08)]", iconHoverBg: "group-hover:bg-purple-500" },
            ].map((f, i) => (
              <StaggerItem key={i} direction="up">
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -12 }}
                    className={`group p-12 bg-white rounded-[48px] border border-slate-100 ${f.borderHover} shadow-[0_20px_50px_rgba(0,0,0,0.02)] ${f.shadowHover} transition-all duration-500`}
                  >
                    <motion.div className={`w-18 h-18 rounded-3xl ${f.bgColor} ${f.textColor} flex items-center justify-center mb-10 border border-${f.color}-100 ${f.iconHoverBg} group-hover:text-white transition-all duration-300 shadow-sm`}
                      whileHover={{ rotate: 10, scale: 1.1 }}
                    >
                      {f.icon}
                    </motion.div>
                    <h4 className="text-2xl font-black text-navy mb-5 tracking-tight">{f.title}</h4>
                    <p className="text-slate-500 leading-relaxed font-medium mb-10">{f.desc}</p>
                    <Link href={f.link} className={`inline-flex items-center ${f.textColor} font-black group-hover:gap-3 transition-all`}>
                      {f.linkText} <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= HOW IT WORKS ================= */}
      <section className="py-32 bg-[#fafafa] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="text-center max-w-3xl mx-auto mb-24">
            <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-8">
              <WordReveal text="How It Works" />
            </h3>
            <p className="text-lg text-slate-500 font-medium">Simple 5-step process to get legal justice</p>
          </ScrollReveal>

          <div className="relative">
            <AnimatedLine />

            <StaggerContainer className="grid lg:grid-cols-5 gap-8 relative z-10" staggerDelay={0.18}>
              {[
                { title: "Submit Dispute", icon: <MessageSquare className="w-7 h-7" />, desc: "Describe your situation" },
                { title: "AI Analysis", icon: <BrainCircuit className="w-7 h-7" />, desc: "Our AI brain analyzes laws" },
                { title: "Get Advice", icon: <Scale className="w-7 h-7" />, desc: "Actionable recommendations" },
                { title: "Connect", icon: <Users className="w-7 h-7" />, desc: "Instant legal matching" },
                { title: "Resolved", icon: <CheckCircle className="w-7 h-7" />, desc: "Case formally closed" }
              ].map((step, i) => (
                <StaggerItem key={i} direction="scale">
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10, boxShadow: "0 25px 50px rgba(16,185,129,0.2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-20 h-20 rounded-full bg-white border-4 border-slate-100 text-navy flex items-center justify-center mb-6 shadow-xl relative cursor-pointer"
                    >
                      <motion.div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center border-2 border-white"
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.15, type: "spring", stiffness: 500 }}
                      >{i + 1}</motion.div>
                      {step.icon}
                    </motion.div>
                    <h4 className="text-xl font-black text-navy mb-2">{step.title}</h4>
                    <p className="text-sm text-slate-500 font-medium text-center">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* ================= AI ANALYZER SECTION ================= */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal direction="scale">
            <div className="bg-navy rounded-[64px] p-12 lg:p-24 relative overflow-hidden flex flex-col lg:flex-row items-center gap-16">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none"></div>
              <motion.div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none"
                animate={{ scale: [1, 1.3, 1], x: [-20, 20, -20] }}
                transition={{ duration: 12, repeat: Infinity }}
              />

              <ScrollReveal direction="left" className="flex-1 z-10">
                <motion.div className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-black uppercase tracking-widest mb-8"
                  whileHover={{ scale: 1.05 }}
                >
                  {tAnalyzer("badge")}
                </motion.div>
                <h3 className="text-4xl lg:text-6xl font-black text-white leading-tight mb-8">
                  <WordReveal text={tAnalyzer("title")} />
                </h3>
                <p className="text-xl text-slate-400 font-medium mb-12 leading-relaxed">
                  {tAnalyzer("description")}
                </p>

                <ul className="space-y-6 mb-12">
                  {tAnalyzer.raw("list").map((item, i) => (
                    <motion.li key={i}
                      initial={{ opacity: 0, x: -40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                      className="flex items-center gap-4 text-white font-bold"
                    >
                      <motion.div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center"
                        initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.12, type: "spring", stiffness: 500 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-navy" />
                      </motion.div>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                <MagneticButton href="/legal-ai" className="inline-flex items-center justify-center px-10 py-5 text-base font-black rounded-2xl text-navy bg-emerald-500 hover:bg-emerald-400 transition-all shadow-[0_0_40px_rgba(16,185,129,0.2)]">
                  Try AI Analyzer
                  <Zap className="ml-3 w-5 h-5" />
                </MagneticButton>
              </ScrollReveal>

              <ScrollReveal direction="right" className="flex-1 w-full relative">
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 2, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full aspect-square flex items-center justify-center p-10"
                >
                  <motion.div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl scale-90"
                    animate={{ scale: [0.85, 0.95, 0.85] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  />
                  <Image src="/justifi-ai-brain.png" alt="AI Legal Brain" width={500} height={500}
                    className="object-contain drop-shadow-[0_0_80px_rgba(16,185,129,0.3)]" />
                </motion.div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ================= CATEGORIES SECTION ================= */}
      <section className="py-32 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <ScrollReveal className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-xl">
              <h3 className="text-4xl lg:text-5xl font-black text-navy tracking-tight mb-6">
                <WordReveal text={tCategories("title")} />
              </h3>
              <p className="text-lg text-slate-500 font-medium">{tCategories("subtitle")}</p>
            </div>
            <Link href="/lawyers" className="text-navy font-black flex items-center group">
              {tCategories("viewAll")} <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
            </Link>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.1}>
            {[
              { title: tCategories("list.tenant"), icon: <Building2 className="w-6 h-6" />, color: "bg-blue-500" },
              { title: tCategories("list.consumer"), icon: <Briefcase className="w-6 h-6" />, color: "bg-emerald-500" },
              { title: tCategories("list.employment"), icon: <Users className="w-6 h-6" />, color: "bg-purple-500" },
              { title: tCategories("list.property"), icon: <Globe className="w-6 h-6" />, color: "bg-amber-500" },
              { title: tCategories("list.contract"), icon: <FileSignature className="w-6 h-6" />, color: "bg-red-500" },
              { title: tCategories("list.family"), icon: <HeartIcon className="w-6 h-6" />, color: "bg-pink-500" }
            ].map((cat, i) => (
              <StaggerItem key={i} direction="scale">
                <motion.div
                  whileHover={{ scale: 1.04, y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="p-8 bg-white rounded-[32px] border border-slate-100 shadow-sm flex items-center gap-6 group cursor-pointer hover:border-emerald-200 transition-all"
                >
                  <motion.div className={`w-14 h-14 rounded-2xl ${cat.color} text-white flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 15, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    {cat.icon}
                  </motion.div>
                  <h4 className="text-xl font-black text-navy">{cat.title}</h4>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h3 className="text-4xl font-black text-navy mb-20">
              <WordReveal text={tTestimonials("title")} />
            </h3>
          </ScrollReveal>
          <StaggerContainer className="grid lg:grid-cols-3 gap-8" staggerDelay={0.18}>
            {tTestimonials.raw("list").map((t, i) => (
              <StaggerItem key={i} direction="up">
                <TiltCard>
                  <motion.div
                    whileHover={{ y: -8, boxShadow: "0 30px 60px rgba(0,0,0,0.08)" }}
                    className="p-10 bg-[#fafafa] rounded-[40px] text-left border border-slate-100 flex flex-col justify-between transition-all duration-500 h-full"
                  >
                    <div className="flex gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map(s => (
                        <motion.div key={s} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }} transition={{ delay: 0.3 + s * 0.05, type: "spring" }}
                        >
                          <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                        </motion.div>
                      ))}
                    </div>
                    <p className="text-lg text-slate-600 font-medium italic mb-8">"{t.text}"</p>
                    <div>
                      <div className="text-xl font-black text-navy">{t.name}</div>
                      <div className="text-sm font-bold text-emerald-500 uppercase">{t.role}</div>
                    </div>
                  </motion.div>
                </TiltCard>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <ScrollReveal>
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
                  {tFooter("brandDesc")}
                </p>
              </div>

              <div>
                <h5 className="text-white font-black text-lg mb-8">{tFooter("resources")}</h5>
                <ul className="space-y-4">
                  <li><Link href="/blog" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">{tNavbar("legalKnowledge")}</Link></li>
                  <li><Link href="/help-center" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">{tFooter("helpCenter")}</Link></li>
                  <li><Link href="/privacy-policy" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">{tFooter("privacy")}</Link></li>
                </ul>
              </div>

              <div>
                <h5 className="text-white font-black text-lg mb-8">{tFooter("connect")}</h5>
                <ul className="space-y-4">
                  <li><Link href="/lawyers" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">{tNavbar("lawyers")}</Link></li>
                  <li><Link href="/about" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">{tNavbar("howItWorks")}</Link></li>
                  <li><Link href="/terms-and-conditions" className="text-slate-400 hover:text-emerald-400 font-medium transition-colors">{tFooter("terms")}</Link></li>
                </ul>
              </div>
            </div>

            <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <p className="text-slate-500 font-bold text-sm">{tFooter("rights")}</p>
              <div className="flex items-center gap-8">
                <ShieldCheck className="w-6 h-6 text-slate-600" />
                <Gavel className="w-6 h-6 text-slate-600" />
              </div>
            </div>
          </div>
        </footer>
      </ScrollReveal>

    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}
