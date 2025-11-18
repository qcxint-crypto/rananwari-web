"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Linkedin, MessageCircleReply } from "lucide-react";
import { FaBehance } from "react-icons/fa";

export default function Contact() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Tutup dropdown kalau klik di luar
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
    <div className="fixed bottom-6 right-6 z-50" ref={menuRef}>
      <div className="relative flex flex-col items-center">
        {/* Dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, x: 20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              exit={{ opacity: 0, x: 20, y: 20 }}
              transition={{ duration: 0.25 }}
              className="absolute bottom-full right-0 mb-3 mr-3 w-64 rounded-xl bg-[#111] border border-neutral-800 shadow-lg overflow-hidden"
            >
              <div className="px-4 py-2 text-xs font-semibold text-neutral-400 uppercase tracking-wide">
                Get in Touch
              </div>
              <div className="border-t border-neutral-800 divide-y divide-neutral-800">
                <a
                  href="mailto:wildanalghifary618@gmail.com"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition"
                >
                  <Mail className="w-4 h-4 text-blue-400" />
                  wildanalghifary618@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/mochammad-wildan-al-ghifary-6a36322a4/"
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition"
                >
                  <Linkedin className="w-4 h-4 text-blue-400" />
                  LinkedIn
                </a>
                <a
                  href="https://www.behance.net/wildanal1"
                  target="_blank"
                  className="flex items-center gap-3 px-4 py-2 text-sm text-neutral-200 hover:bg-neutral-800 transition"
                >
                  <FaBehance className="w-4 h-4 text-blue-400" />
                  Behance
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Button */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col items-center group"
        >
          <div className="w-10 h-10 rounded-full bg-black border flex items-center justify-center shadow-md hover:scale-110 transition">
            <MessageCircleReply className="w-5 h-5 text-white" />
          </div>
          <span className="mt-1 text-xs text-neutral-400 group-hover:text-white"></span>
        </button>
      </div>
    </div>
  );
}
