import React from 'react';
import Link from 'next/link';
import { BrainCircuit } from 'lucide-react';

const MainLayout = ({children}) => {
  return (
    <div className="relative">
      <div className="container mx-auto my-20">{children}</div>
      
      {/* Floating AI Assistant Button */}
      <Link 
        href="/legal-ai"
        className="fixed bottom-8 right-8 z-50 p-4 bg-[#00C896] text-white rounded-full shadow-[0_0_30px_rgba(0,200,150,0.4)] hover:bg-[#00DDA6] transition-all hover:scale-110 active:scale-95 group flex items-center gap-2"
        title="AI Legal Assistant"
      >
        <BrainCircuit size={24} className="group-hover:animate-pulse" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-black whitespace-nowrap text-xs uppercase tracking-wider">
          AI Legal Help
        </span>
      </Link>
    </div>
  )}

  export default MainLayout;