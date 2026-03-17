"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  Menu,
  Scale,
  Plus
} from "lucide-react";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export const Header = ({ user }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navbar");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`flex items-center justify-between px-6 py-2 rounded-[28px] border transition-all duration-500 ${scrolled ? 'bg-white/90 border-slate-200/50 shadow-[0_8px_32px_rgba(0,0,0,0.05)] backdrop-blur-xl' : 'bg-transparent border-transparent'}`}>
          {/* LEFT - LOGO */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center shadow-lg shadow-navy/20">
              <Scale className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-2xl font-black tracking-tighter text-navy flex items-baseline">
              Justifi
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full ml-0.5"></div>
            </span>
          </Link>

          {/* ================= CENTER : Nav ================= */}
          {!isMobile && (
            <nav className="flex items-center gap-10 text-[15px] font-black text-slate-500/80">
              <Link href="/" className="hover:text-navy transition-colors">{t("home")}</Link>
              <Link href="/submit-dispute" className="hover:text-navy transition-colors">{t("submitDispute")}</Link>
              <Link href="/blog" className="hover:text-navy transition-colors">{t("legalKnowledge")}</Link>
              <Link href="/about" className="hover:text-navy transition-colors">{t("howItWorks")}</Link>
              <Link href="/cases" className="hover:text-navy transition-colors">{t("dashboard")}</Link>
            </nav>
          )}

          {/* ================= RIGHT : Actions ================= */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <SignedOut>
              <SignInButton mode="modal">
                <Button className="bg-navy text-white hover:bg-slate-800 rounded-full px-8 h-12 text-sm font-black transition-all shadow-xl shadow-navy/10 active:scale-95">
                  {t("signIn")}
                </Button>
              </SignInButton>
            </SignedOut>

            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>

            {isMobile && <MobileMenu />}
          </div>
        </div>
      </div>
    </header>
  );
};

const MobileMenu = () => {
  const t = useTranslations("Navbar");
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="text-navy">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-[350px] border-l border-slate-100 bg-white/95 backdrop-blur-2xl">
        <div className="pt-12 px-6">
          <div className="flex items-center gap-3 mb-16">
            <div className="w-10 h-10 bg-navy rounded-xl flex items-center justify-center">
              <Scale className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-2xl font-black text-navy tracking-tighter">Justifi</span>
          </div>
          <nav className="flex flex-col gap-8">
            <SheetClose asChild><Link href="/" className="text-2xl font-black text-navy border-b border-slate-50 pb-4">{t("home")}</Link></SheetClose>
            <SheetClose asChild><Link href="/submit-dispute" className="text-2xl font-black text-navy border-b border-slate-50 pb-4">{t("submitDispute")}</Link></SheetClose>
            <SheetClose asChild><Link href="/blog" className="text-2xl font-black text-navy border-b border-slate-50 pb-4">{t("legalKnowledge")}</Link></SheetClose>
            <SheetClose asChild><Link href="/about" className="text-2xl font-black text-navy border-b border-slate-50 pb-4">{t("howItWorks")}</Link></SheetClose>
            <SheetClose asChild><Link href="/cases" className="text-2xl font-black text-navy border-b border-slate-50 pb-4">{t("dashboard")}</Link></SheetClose>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
};
