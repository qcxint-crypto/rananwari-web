"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, MessageCircle, Share2, ShieldCheck } from "lucide-react";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="fixed bottom-10 right-10 z-[100]" ref={menuRef}>
      <div className="relative flex flex-col items-center">
        {/* Dropdown with Retro Style */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="absolute bottom-full right-0 mb-6 w-72 bg-black border-2 border-retro-green shadow-[8px_8px_0px_#1a5c0a] overflow-hidden p-1"
            >
              <div className="bg-retro-green/10 p-4 border border-retro-green/30 mb-1">
                <div className="flex items-center gap-2 mb-2 text-retro-green">
                  <ShieldCheck size={16} />
                  <span className="font-mono text-[10px] tracking-[0.2em] uppercase">Secure Channel</span>
                </div>
                <h4 className="text-white font-black italic tracking-tighter text-xl uppercase">Initiate_Contact</h4>
              </div>
              
              <div className="flex flex-col gap-1">
                <ContactItem 
                  href="mailto:job.raflianwari@gmail.com" 
                  icon={<Mail size={18} />} 
                  label="E-MAIL_COMM" 
                  value="raflianwari@gmail"
                />
                <ContactItem 
                  href="https://www.linkedin.com/in/rafli-anwari-nurafwan-7b8a49231/" 
                  icon={<Linkedin size={18} />} 
                  label="LINKEDIN_ID" 
                  value="rafli-anwari"
                />
              </div>
              
              <div className="mt-1 p-2 bg-retro-pink/10 border border-retro-pink/20 font-mono text-[8px] text-retro-pink uppercase text-center">
                Protocol: Peer-to-Peer Encryption Active
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <button
          onClick={() => setOpen(!open)}
          className="group relative"
        >
          <div className="w-14 h-14 bg-black border-2 border-retro-green flex items-center justify-center shadow-[4px_4px_0px_#1a5c0a] group-hover:shadow-none group-hover:translate-x-1 group-hover:translate-y-1 transition-all">
            <MessageCircle className="text-retro-green group-hover:scale-110 transition-transform" size={28} />
          </div>
          
          {/* Signal Pulse */}
          <div className="absolute inset-0 rounded-full bg-retro-green/20 animate-ping -z-10"></div>
        </button>
      </div>
    </div>
  );
}

function ContactItem({ href, icon, label, value }: { href: string, icon: React.ReactNode, label: string, value: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className="flex items-center gap-4 p-3 bg-white/5 hover:bg-retro-green hover:text-black transition-all group"
    >
      <div className="text-retro-green group-hover:text-black">{icon}</div>
      <div className="flex flex-col">
        <span className="font-mono text-[8px] text-gray-500 group-hover:text-black/60 uppercase">{label}</span>
        <span className="font-black italic tracking-tighter text-sm uppercase">{value}</span>
      </div>
    </a>
  )
}
