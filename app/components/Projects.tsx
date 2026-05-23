"use client";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight, Monitor, Package, Wrench } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";

export default function Projects() {
  const containerRef = useRef<HTMLElement>(null);
  const { t } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x3D = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const rotate3D = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative py-32 bg-zinc-950 overflow-hidden border-t border-white/10"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20 border-b-2 border-white/10 pb-8 uppercase">
          <div className="space-y-4">
            <span className="text-retro-blue font-mono text-[10px] tracking-[0.5em]">REPOSITORY // DATA_STREAM</span>
            <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter text-white leading-none">
              {t.projects_title} <br />
              <span className="text-retro-pink">{t.projects_subtitle}</span>
            </h2>
          </div>
          <div className="md:w-1/3">
            <p className="text-gray-500 font-mono text-xs leading-relaxed tracking-tighter">
              {t.projects_desc}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          <motion.div 
            style={{ x: x3D, rotate: rotate3D }}
            className="lg:col-span-7 h-[500px] md:h-[700px] relative"
          >
            <div className="absolute inset-0 bg-white/5 border-2 border-white/10 rounded-sm overflow-hidden shadow-[0px_0px_50px_rgba(255,0,255,0.1)]">
              {/* Spline Embed - Optimized for Speed */}
              <iframe 
                src="https://my.spline.design/verticallayoutaccordioncopycopy-iQsUdnEAuxg5RYCMQRj0LdB2-f94/" 
                frameBorder="0" 
                width="100%" 
                height="100%"
                className="w-full h-full scale-[1.15]"
                title="Spline Project View"
              ></iframe>
              
              <div className="absolute top-6 left-6 flex flex-col gap-1 font-mono text-[10px] text-retro-pink bg-black/60 px-3 py-2 border border-retro-pink/30">
                <span>[SCANNING_GALLERY]</span>
                <span>DATA_SOURCE: REMOTE_CLOUD</span>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col space-y-12">
            <div className="space-y-8">
              <ProjectDetailItem 
                icon={<Monitor size={20} />} 
                title={t.project_item_1} 
                desc={t.project_item_1_desc} 
              />
              <ProjectDetailItem 
                icon={<Package size={20} />} 
                title={t.project_item_2} 
                desc={t.project_item_2_desc} 
              />
              <ProjectDetailItem 
                icon={<Wrench size={20} />} 
                title={t.project_item_3} 
                desc={t.project_item_3_desc} 
              />
            </div>

            <div className="pt-8">
              <Link
                href="/project-detail"
                className="group flex items-center justify-between p-6 bg-white text-black font-black italic text-2xl tracking-tighter hover:bg-retro-green transition-all shadow-[6px_6px_0px_#ccc] hover:shadow-[6px_6px_0px_#1a5c0a]"
              >
                <span>{t.projects_btn}</span>
                <ArrowUpRight size={32} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectDetailItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="group flex gap-6"
    >
      <div className="flex-shrink-0 w-12 h-12 border border-white/20 flex items-center justify-center text-retro-blue group-hover:bg-retro-blue group-hover:text-black transition-all">
        {icon}
      </div>
      <div className="space-y-2">
        <h4 className="text-xl font-black italic tracking-tighter text-white uppercase group-hover:text-retro-blue transition-colors">
          {title}
        </h4>
        <p className="text-gray-500 text-sm font-medium leading-relaxed uppercase tracking-tighter">
          {desc}
        </p>
      </div>
    </motion.div>
  )
}
