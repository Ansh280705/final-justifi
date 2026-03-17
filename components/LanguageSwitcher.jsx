"use client";

import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import { Globe } from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useTransition } from "react";

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();

    const handleLanguageChange = (newLocale) => {
        startTransition(() => {
            // next-intl middleware picks up the cookie for locale persistence
            document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000`;
            router.refresh();
        });
    };

    return (
        <div className="flex items-center gap-2">
            <Select value={locale} onValueChange={handleLanguageChange} disabled={isPending}>
                <SelectTrigger className="w-[120px] bg-white/10 backdrop-blur-[10px] border-slate-200/50 rounded-full h-10 text-navy font-bold hover:bg-white/20 transition-all">
                    <div className="flex items-center gap-2">
                        <Globe className="w-4 h-4 text-emerald-500" />
                        <SelectValue placeholder="Language" />
                    </div>
                </SelectTrigger>
                <SelectContent className="bg-white/90 backdrop-blur-[10px] border-slate-200/50 rounded-2xl shadow-xl">
                    <SelectItem value="en" className="font-bold text-navy hover:text-emerald-500 transition-colors">English</SelectItem>
                    <SelectItem value="hi" className="font-bold text-navy hover:text-emerald-500 transition-colors">हिन्दी (Hindi)</SelectItem>
                    <SelectItem value="mr" className="font-bold text-navy hover:text-emerald-500 transition-colors">मराठी (Marathi)</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
