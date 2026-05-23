"use client";

import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-black border-t-2 border-white/10 py-12 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        <div className="flex flex-col gap-2 md:items-start items-center text-center md:text-left">
          <div className="flex items-center gap-2 text-retro-green font-mono text-xs uppercase tracking-[0.3em]">
            <Terminal size={14} />
            {t.footer_output}
          </div>
          <p className="text-gray-500 font-mono text-[10px] uppercase">
            {t.footer_designed} <span className="text-white font-bold italic">Rafli Anwari Nurafwan</span>
          </p>
        </div>

        <div className="flex flex-col items-center md:items-end gap-2 font-mono">
          <div className="flex gap-4">
            <FooterLink label="Github" href="https://github.com/qcxint-crypto" />
            <FooterLink label="Source" href="#" />
            <FooterLink label="Status" href="#" />
          </div>
          <span className="text-gray-600 text-[9px] uppercase tracking-tighter">
            © {currentYear} // {t.footer_rights} // BUILD_v2.6
          </span>
        </div>

      </div>
      
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-retro-pink to-transparent mt-12 opacity-30"></div>
    </footer>
  );
}

function FooterLink({ label, href }: { label: string, href: string }) {
  return (
    <a 
      href={href} 
      target="_blank"
      className="text-gray-400 hover:text-retro-green font-mono text-[10px] uppercase tracking-widest transition-colors border-b border-transparent hover:border-retro-green"
    >
      [{label}]
    </a>
  )
}
