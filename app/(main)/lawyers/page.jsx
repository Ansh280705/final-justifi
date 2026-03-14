import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { PRACTICE_AREAS } from "@/lib/practice-areas";

export default function LawyersPage() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {PRACTICE_AREAS.map((practiceArea) => (
        <Link key={practiceArea.name} href={`/lawyers/${encodeURIComponent(practiceArea.name)}`}>
          <Card className="group relative w-full aspect-square rounded-full overflow-hidden cursor-pointer border border-emerald-200 hover:border-emerald-500 transition-all duration-300 shadow-sm hover:shadow-lg ">

            {/* Background Image */}
            <Image
              src={practiceArea.image}
              alt={practiceArea.name}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-3">
              <div className="mb-2 text-white ">
                {practiceArea.icon}
              </div>
              <h3 className="text-white font-semibold text-sm sm:text-xl leading-relaxed">
                {practiceArea.name}
              </h3>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}
