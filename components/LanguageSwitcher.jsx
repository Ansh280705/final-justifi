"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from "lucide-react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (newLocale) => {
    // Set cookie and refresh
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  };

  const languages = [
    { code: "en", label: "English", flag: "🇺🇸" },
    { code: "hi", label: "हिन्दी", flag: "🇮🇳" },
    { code: "mr", label: "मराठी", flag: "🇮🇳" },
  ];

  return (
    <div className="flex items-center gap-2">
      <Select value={locale} onValueChange={handleLanguageChange}>
        <SelectTrigger className="w-[130px] h-9 bg-white/50 backdrop-blur-sm border-slate-200 rounded-full text-xs font-bold text-navy hover:bg-white transition-all">
          <div className="flex items-center gap-2">
            <Globe className="w-3.5 h-3.5 text-emerald-500" />
            <SelectValue placeholder="Language" />
          </div>
        </SelectTrigger>
        <SelectContent className="rounded-xl border-slate-100 shadow-xl overflow-hidden">
          {languages.map((lang) => (
            <SelectItem 
              key={lang.code} 
              value={lang.code}
              className="text-xs font-bold text-navy hover:bg-emerald-50 focus:bg-emerald-50 cursor-pointer py-2.5"
            >
              <span className="mr-2">{lang.flag}</span>
              {lang.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
