"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SplineViewer from "./SplineViewer";
import { Box, Code, Layers, PenTool, Database, Terminal } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function Skills() {
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  const skillCategories = [
    { title: t.skill_cat_1, icon: <Box size={18} />, skills: ["SolidWorks", "AutoCAD", "SketchUp"] },
    { title: t.skill_cat_2, icon: <Layers size={18} />, skills: ["Machine Design", "Mold & Dies", "CNC Programming"] },
    { title: t.skill_cat_3, icon: <PenTool size={18} />, skills: ["Technical Drawing", "Blueprints", "Assembly"] },
    { title: t.skill_cat_4, icon: <Database size={18} />, skills: ["Bill of Materials", "MFG Data", "QC Logs"] },
  ];

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative py-32 bg-black overflow-hidden border-t-2 border-white/10"
    >
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[repeating-linear-gradient(90deg,transparent,transparent_50px,#333_50px,#333_51px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <div className="lg:w-1/2 w-full h-[500px] md:h-[700px] relative">
            <motion.div 
              style={{ scale }}
              className="w-full h-full rounded-sm overflow-hidden border-4 border-white/20 shadow-[20px_20px_0px_rgba(57,255,20,0.1)] bg-zinc-900/50 backdrop-blur-sm"
            >
              <SplineViewer 
                url="/models/skills_key_board.splinecode" 
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="w-3 h-3 rounded-full bg-retro-pink animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-retro-green animate-pulse delay-100"></div>
                <div className="w-3 h-3 rounded-full bg-retro-blue animate-pulse delay-200"></div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 flex flex-col space-y-10">
            <div>
              <h2 className="text-6xl font-black italic tracking-tighter text-white uppercase mb-4">
                Tech <span className="text-retro-green">{t.skills_title}</span>
              </h2>
              <p className="text-gray-500 font-mono uppercase tracking-[0.2em] text-xs">
                {t.skills_subtitle}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((cat, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-6 bg-white/5 border border-white/10 hover:border-retro-green transition-all group"
                >
                  <div className="flex items-center gap-3 mb-4 text-retro-green group-hover:text-white transition-colors">
                    {cat.icon}
                    <span className="font-black italic tracking-tighter text-lg underline decoration-retro-green/30 underline-offset-4 uppercase">{cat.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {cat.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-gray-400 font-mono text-xs flex items-center gap-2">
                        <span className="text-retro-pink font-bold">»</span> {skill}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
