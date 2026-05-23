"use client";

import { FaLink, FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ScrollVelocity from "./ScrollVelocity";
import { Hammer, Settings, PenTool } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function Profile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <motion.section 
      id="profile" 
      ref={containerRef}
      className="relative py-32 bg-background overflow-hidden manga-dots"
    >
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left: Image with Anime Style Border */}
          <div className="lg:col-span-5 relative">
            <motion.div 
              initial={{ rotate: -5 }}
              whileHover={{ rotate: 0 }}
              className="relative z-10 p-2 bg-white retro-border shadow-[12px_12px_0px_#ff00ff]"
            >
              <img
                src="/PP.JPG"
                alt="Profile"
                className="w-full grayscale hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-retro-green text-black px-4 py-1 font-black italic text-xl border-2 border-black">
                {t.profile_tag}
              </div>
            </motion.div>
            
            {/* Background Accent */}
            <div className="absolute -top-8 -left-8 w-full h-full border-4 border-dashed border-white/10 -z-10 rotate-3"></div>
          </div>

          {/* Right: Info with Modern Typography */}
          <div className="lg:col-span-7 flex flex-col space-y-8">
            <div>
              <motion.span 
                className="text-retro-pink font-mono text-sm tracking-[0.4em] uppercase block mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
              >
                {t.profile_label}
              </motion.span>
              <motion.h2 
                className="text-5xl md:text-7xl font-black italic tracking-tighter text-white uppercase leading-none"
                initial={{ x: 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                Rafli Anwari <br />
                <span className="text-retro-blue">Nurafwan</span>
              </motion.h2>
            </div>

            <motion.div 
              className="bg-white/5 backdrop-blur-md p-8 border-l-4 border-retro-green relative"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-gray-300 text-lg leading-relaxed font-medium">
                {t.profile_desc}
              </p>
              
              <div className="absolute top-4 right-4 opacity-10">
                <Settings size={80} className="animate-spin-slow" />
              </div>
            </motion.div>

            {/* Specialties Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 font-mono text-[10px] tracking-widest uppercase">
              <Specialty icon={<Hammer size={14} />} text="CAD_EXPERT" />
              <Specialty icon={<PenTool size={14} />} text="DESIGN_LOGIC" />
              <Specialty icon={<Settings size={14} />} text="MFG_PROCESS" />
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-6 pt-6">
              <SocialLink href="https://lynk.id/rananwari" icon={<FaLink />} label="Link" />
              <SocialLink href="https://www.linkedin.com/in/rafli-anwari-nurafwan-7b8a49231/" icon={<FaLinkedin />} label="LinkedIn" />
              <SocialLink href="https://www.instagram.com/rananwari_" icon={<FaInstagram />} label="Instagram" />
              <SocialLink href="https://github.com/qcxint-crypto" icon={<FaGithub />} label="GitHub" />
              <SocialLink href="https://grabcad.com/rafli.anwari.nurafwan-2/" label="Grabcad" />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-32">
        <ScrollVelocity
          texts={["ENGINEERING", "MACHINE DESIGN", "MANUFACTURING", "3D MODELING", "CNC ROUTER", "MOLD & DIES"]}
          velocity={5}
          className="text-white/10 text-8xl font-black italic tracking-tighter"
        />
      </div>
      
    </motion.section>
  );
}

function Specialty({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center gap-2 text-retro-green border border-retro-green/20 px-3 py-2 bg-retro-green/5">
      {icon}
      <span>{text}</span>
    </div>
  )
}

function SocialLink({ href, icon, label }: { href: string, icon?: React.ReactNode, label: string }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-2"
    >
      <div className="w-12 h-12 bg-white/10 rounded-sm flex items-center justify-center text-white group-hover:bg-retro-pink group-hover:text-black transition-all transform group-hover:-rotate-12 group-hover:scale-110">
        {icon || <span className="font-black text-xs">GC</span>}
      </div>
      <span className="text-[10px] font-mono text-gray-500 uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-opacity">{label}</span>
    </a>
  )
}
