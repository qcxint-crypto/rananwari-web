"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import SplineViewer from "./SplineViewer";
import { Cpu, Zap, Globe } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { t, language } = useLanguage();
  const [isClient, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-[110vh] flex items-center justify-center bg-black overflow-hidden crt-effect"
    >
      <div className="absolute inset-0 z-0 opacity-60">
        {isClient && (
          <SplineViewer 
            url="/models/cube_and_balls.splinecode" 
            className="w-full h-full scale-110"
          />
        )}
      </div>

      <div className="absolute inset-0 z-[1] opacity-20 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)', backgroundSize: '50px 50px' }}>
      </div>

      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between"
      >
        <div className="flex flex-col space-y-6 md:w-3/5">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-retro-green/10 border border-retro-green/30 rounded-sm text-retro-green font-mono text-[10px] w-fit tracking-[0.2em]"
          >
            <Globe size={12} />
            NODE: WEST_JAVA // INDONESIA
          </motion.div>

          <div className="relative">
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none text-white drop-shadow-[4px_4px_0px_#ff00ff] uppercase"
            >
              {t.hero_title} <br />
              <span className="text-retro-green drop-shadow-[4px_4px_0px_#1a5c0a]">{t.hero_subtitle}</span>
            </motion.h1>
            
            <motion.span 
              className="absolute -top-4 -right-12 text-white/30 text-2xl font-black vertical-rl hidden lg:block uppercase"
              style={{ writingMode: 'vertical-rl' }}
            >
              {language === "JP" ? "工学 / 未来" : "ENGINEER // 2026"}
            </motion.span>
          </div>

          <div className="space-y-1">
             <h2 className="text-white font-black italic tracking-tighter text-2xl uppercase">{t.user_name}</h2>
             <motion.p className="text-gray-400 max-w-md font-mono text-sm leading-relaxed uppercase">
                {t.hero_desc}
             </motion.p>
          </div>

          <div className="flex gap-4 pt-4">
            <button className="px-8 py-3 bg-white text-black font-black uppercase italic tracking-tighter hover:bg-retro-green transition-all shadow-[4px_4px_0px_#ccc] hover:shadow-[4px_4px_0px_#1a5c0a]">
              {t.hero_btn_1}
            </button>
            <button className="px-8 py-3 border-2 border-white text-white font-black uppercase italic tracking-tighter hover:border-retro-pink hover:text-retro-pink transition-all">
              {t.hero_btn_2}
            </button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col space-y-8 md:w-1/4">
          <StatBox label={t.hero_status} value={t.hero_ready} color="retro-green" />
          <StatBox label={t.hero_version} value="v2.0.26_STABLE" color="retro-pink" />
          <StatBox label={t.hero_system_type} value="ARM_64_BASED" color="retro-blue" />
        </div>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">Scroll to Traverse</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-retro-green to-transparent"></div>
      </motion.div>
    </section>
  );
}

function StatBox({ label, value, color }: { label: string, value: string, color: string }) {
  const colorClass = color === 'retro-green' ? 'text-retro-green' : color === 'retro-pink' ? 'text-retro-pink' : 'text-retro-blue';
  const borderClass = color === 'retro-green' ? 'border-retro-green/30' : color === 'retro-pink' ? 'border-retro-pink/30' : 'border-retro-blue/30';
  
  return (
    <div className={`p-4 border ${borderClass} bg-black/50 backdrop-blur-md skew-x-[-10deg]`}>
      <p className="text-[10px] text-gray-500 font-mono mb-1 tracking-tighter uppercase">[{label}]</p>
      <p className={`text-sm font-black italic uppercase ${colorClass}`}>{value}</p>
    </div>
  )
}
