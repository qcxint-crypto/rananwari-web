"use client";
import { Suspense } from "react";
import { ModelViewer, ModelViewerLoading } from "./ModelViewer";
import { motion, type Variants } from "framer-motion";
import { Cpu, Maximize2 } from "lucide-react";

interface Tech {
  name: string;
  icon: string;
}

interface ModelCardProps {
  title: string;
  description: string;
  tech: Tech[];
  modelUrl: string;
  onClick: () => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export const ModelCard = ({ title, description, tech, modelUrl, onClick }: ModelCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="group relative bg-zinc-900 border-2 border-white/10 hover:border-retro-blue transition-all duration-300 shadow-[6px_6px_0px_rgba(0,0,0,0.5)] hover:shadow-[6px_6px_0px_rgba(0,255,255,0.2)] flex flex-col overflow-hidden"
      onClick={onClick}
    >
      {/* 3D Model Header */}
      <div className="h-64 w-full relative bg-black/50 border-b border-white/10 overflow-hidden">
        <Suspense fallback={<ModelViewerLoading />}>
          <ModelViewer modelUrl={modelUrl} autoRotate={true} />
        </Suspense>
        
        {/* Interaction Overlay */}
        <div className="absolute inset-0 bg-retro-blue/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none flex items-center justify-center">
           <Maximize2 className="text-retro-blue animate-pulse" size={32} />
        </div>

        {/* Engineering Tag */}
        <div className="absolute top-3 left-3 bg-black/80 border border-retro-blue/30 px-2 py-0.5 rounded-sm flex items-center gap-1">
           <Cpu size={10} className="text-retro-blue" />
           <span className="font-mono text-[8px] text-retro-blue uppercase tracking-tighter">CAD_PREVIEW</span>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <h3 className="text-xl font-black italic tracking-tighter text-white uppercase group-hover:text-retro-blue transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-gray-400 text-xs font-mono uppercase tracking-tighter line-clamp-2">
            {description || "// NO_DESCRIPTION_AVAILABLE"}
          </p>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
          {tech.map((t, i) => (
            <div key={i} className="flex items-center gap-1.5 px-2 py-1 bg-white/5 border border-white/10 rounded-sm">
              <img
                src={t.icon}
                alt={t.name}
                className="w-3 h-3 object-contain opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <span className="text-[9px] font-mono text-gray-500 group-hover:text-gray-300 uppercase">{t.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Interface Bar */}
      <div className="bg-white/5 p-2 flex justify-between items-center px-4 border-t border-white/10">
         <div className="flex gap-1">
            {[1,2,3].map(i => <div key={i} className="w-1 h-2 bg-retro-blue/30 group-hover:bg-retro-blue transition-colors"></div>)}
         </div>
         <span className="font-mono text-[8px] text-gray-600 uppercase tracking-widest">ACCESS_FILE_001</span>
      </div>
    </motion.div>
  );
};
