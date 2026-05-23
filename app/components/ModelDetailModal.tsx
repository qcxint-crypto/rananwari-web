"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Box, Layers, FileText, ChevronLeft, ArrowRight, Cpu, ChevronRight } from "lucide-react";
import { ModelViewer, ModelViewerLoading } from "./ModelViewer";
import Image from "next/image";
import { useLanguage } from "../../lib/LanguageContext";
import type { ProjectData, ProjectPart } from "../../lib/project-data";

interface Project extends Omit<ProjectData, "titleKey" | "descKey"> {
  title: string;
  description: string;
}

interface ModelDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ModelDetailModal = ({ project, onClose }: ModelDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<"model" | "parts" | "designs">("model");
  const [selectedPart, setSelectedPart] = useState<ProjectPart | null>(null);
  const [designIndex, setDesignIndex] = useState(0);
  const { t } = useLanguage();
  const currentDesigns = selectedPart?.designUrl ? [selectedPart.designUrl] : project.designs;

  // Reset state when project changes
  useEffect(() => {
    setSelectedPart(null);
    setDesignIndex(0);
    setActiveTab("model");
  }, [project]);

  useEffect(() => {
    if (activeTab === "parts" && !selectedPart && project.parts.length > 0) {
      setSelectedPart(project.parts[0]);
    }
  }, [activeTab, selectedPart, project.parts]);

  useEffect(() => {
    setDesignIndex(0);
  }, [selectedPart, activeTab, project.id]);

  const handleNextDesign = () => {
    if (currentDesigns.length > 0) {
      setDesignIndex((prev) => (prev + 1) % currentDesigns.length);
    }
  };

  const handlePrevDesign = () => {
    if (currentDesigns.length > 0) {
      setDesignIndex((prev) => (prev - 1 + currentDesigns.length) % currentDesigns.length);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/95 backdrop-blur-md uppercase overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-7xl h-full max-h-[92vh] bg-zinc-950 border-2 border-retro-green shadow-[0px_0px_50px_rgba(57,255,20,0.2)] flex flex-col rounded-sm overflow-hidden"
      >
        {/* Header */}
        <div className="p-6 border-b-2 border-white/10 flex justify-between items-center bg-black/50">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-retro-green font-mono text-[10px] tracking-[0.4em]">
              <Cpu size={14} />
              {t.modal_inspector} // DATA_ACTIVE
            </div>
            <h2 className="text-2xl md:text-4xl font-black italic tracking-tighter text-white uppercase leading-none">
              {activeTab === "parts" && selectedPart ? selectedPart.name : project.title}
            </h2>
          </div>
          <button 
            onClick={onClose}
            className="p-3 border-2 border-white/10 text-white hover:text-retro-pink hover:border-retro-pink transition-all bg-white/5"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="flex border-b-2 border-white/10 bg-zinc-900/50">
          <TabButton 
            active={activeTab === "model"} 
            onClick={() => { setActiveTab("model"); setSelectedPart(null); }}
            icon={<Box size={16} />}
            label={t.modal_main}
          />
          <TabButton 
            active={activeTab === "parts"} 
            onClick={() => setActiveTab("parts")}
            icon={<Layers size={16} />}
            label={`${t.modal_parts} [${project.parts.length}]`}
          />
          <TabButton 
            active={activeTab === "designs"} 
            onClick={() => setActiveTab("designs")}
            icon={<FileText size={16} />}
            label={`${t.modal_schematics} [${currentDesigns.length}]`}
          />
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 overflow-hidden">
          {/* Left: Visualizer */}
          <div className="lg:col-span-7 relative bg-black border-r-2 border-white/10 overflow-hidden min-h-[350px] lg:min-h-0">
            <AnimatePresence mode="wait">
              {activeTab === "model" && (
                <motion.div key="main-model" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full">
                  <ModelViewer modelUrl={project.modelUrl} autoRotate isInModal={true} />
                </motion.div>
              )}

              {activeTab === "parts" && (
                <motion.div key="parts-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full flex flex-col">
                  {selectedPart?.modelUrl ? (
                    <div className="flex-1">
                       <ModelViewer modelUrl={selectedPart.modelUrl} autoRotate isInModal={true} />
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 font-mono p-8 text-center space-y-4">
                      <Layers size={64} className="opacity-20" />
                      <p className="text-xs tracking-widest leading-relaxed uppercase">
                        {selectedPart ? "// PART_VISUAL_NOT_AVAILABLE" : "// SELECT_COMPONENT_FROM_REGISTRY"}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {activeTab === "designs" && (
                <motion.div key="design-view" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="w-full h-full relative group bg-zinc-900">
                  {currentDesigns.length > 0 ? (
                    <>
                      <Image 
                        src={currentDesigns[designIndex]} 
                        alt="Schematic" 
                        fill 
                        className="object-contain p-4" 
                        priority 
                      />
                      <div className="absolute top-4 left-4 bg-black/80 border border-retro-pink/50 px-3 py-1 font-mono text-[10px] text-retro-pink z-10">
                        DOC_ID: {designIndex + 1}/{currentDesigns.length}
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-gray-600 font-mono p-12 text-center uppercase">
                      <FileText size={64} className="opacity-20 mb-4" />
                      <p className="text-xs tracking-widest leading-relaxed">// NO_SCHEMATICS_ARCHIVED</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right: Info Panel */}
          <div className="lg:col-span-5 p-8 md:p-12 overflow-y-auto bg-zinc-900/30">
            <AnimatePresence mode="wait">
              {activeTab === "model" && (
                <motion.div key="info-model" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                   <section className="space-y-4">
                      <h3 className="text-retro-blue font-black italic tracking-tighter text-3xl underline decoration-retro-blue/30 underline-offset-8">
                        {t.modal_desc}
                      </h3>
                      <p className="text-white font-mono text-sm leading-relaxed border-l-4 border-retro-blue pl-6 py-2 bg-retro-blue/5 uppercase tracking-tighter">
                        {project.description}
                      </p>
                   </section>

                   <section className="space-y-4">
                      <h3 className="text-retro-pink font-black italic tracking-tighter text-2xl uppercase">
                        {t.modal_type}
                      </h3>
                      <div className="inline-block px-6 py-2 bg-retro-pink text-black font-black italic text-sm skew-x-[-10deg]">
                        {project.type}
                      </div>
                   </section>

                   <section className="space-y-6">
                      <h3 className="text-retro-green font-black italic tracking-tighter text-2xl uppercase">
                        {t.modal_stack}
                      </h3>
                      <div className="flex flex-wrap gap-4">
                        {project.tech.map((t) => (
                          <div key={t.name} className="flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-3 group hover:border-retro-green transition-colors">
                            <Image src={t.icon} alt={t.name} width={24} height={24} className="grayscale group-hover:grayscale-0" />
                            <span className="font-mono text-xs text-white uppercase">{t.name}</span>
                          </div>
                        ))}
                      </div>
                   </section>
                </motion.div>
              )}

              {activeTab === "parts" && (
                <motion.div key="info-parts" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-8">
                  <h3 className="text-retro-green font-black italic tracking-tighter text-3xl underline decoration-retro-green/30 underline-offset-8 mb-8">
                    COMPONENT_REGISTRY
                  </h3>
                  <div className="space-y-4">
                    {project.parts.length > 0 ? project.parts.map((part) => (
                      <button
                        key={part.id}
                        onClick={() => setSelectedPart(part)}
                        className={`w-full p-6 text-left border-2 transition-all flex items-center justify-between group ${
                          selectedPart?.id === part.id 
                            ? "bg-retro-green border-retro-green text-black" 
                            : "border-white/10 hover:border-retro-green text-white bg-white/5"
                        }`}
                      >
                        <span className="font-black italic tracking-tighter text-xl uppercase">{part.name}</span>
                        <div className={`w-3 h-3 rounded-full ${selectedPart?.id === part.id ? "bg-black" : "bg-retro-green animate-pulse"}`}></div>
                      </button>
                    )) : (
                      <p className="text-gray-600 font-mono text-xs italic tracking-widest">// NO_SUB_MODULES_REGISTERED</p>
                    )}
                  </div>
                </motion.div>
              )}

              {activeTab === "designs" && (
                <motion.div key="info-designs" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="space-y-12">
                   <h3 className="text-retro-pink font-black italic tracking-tighter text-3xl underline decoration-retro-pink/30 underline-offset-8 mb-8 uppercase">
                    NAVIGATION_DECK
                   </h3>
                   
                   <div className="space-y-6">
                      <p className="text-gray-500 font-mono text-[10px] tracking-widest uppercase">SCHEMATIC_SELECTOR:</p>
                      <div className="grid grid-cols-2 gap-4">
                        <button 
                          onClick={handlePrevDesign}
                          disabled={currentDesigns.length <= 1}
                          className="flex flex-col items-center justify-center p-8 border-2 border-white/10 hover:border-retro-pink hover:bg-retro-pink/10 text-white transition-all group disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:bg-transparent"
                        >
                          <ChevronLeft size={32} className="group-hover:-translate-x-2 transition-transform" />
                          <span className="font-mono text-[8px] mt-4 opacity-50 uppercase">PREV_DOC</span>
                        </button>
                        <button 
                          onClick={handleNextDesign}
                          disabled={currentDesigns.length <= 1}
                          className="flex flex-col items-center justify-center p-8 border-2 border-retro-pink hover:bg-retro-pink text-white hover:text-black transition-all group disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
                        >
                          <ChevronRight size={32} className="group-hover:translate-x-2 transition-transform" />
                          <span className="font-mono text-[8px] mt-4 opacity-70 uppercase">NEXT_DOC</span>
                        </button>
                      </div>
                   </div>

                   <div className="p-6 bg-retro-pink/5 border border-retro-pink/20 rounded-sm">
                      <p className="text-retro-pink font-mono text-[10px] leading-relaxed uppercase tracking-tighter">
                        SYSTEM_NOTICE: VIEWING HIGH-FIDELITY ENGINEERING BLUEPRINTS. AUTHORIZED ACCESS ONLY.
                      </p>
                   </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) => (
  <button
    onClick={onClick}
    className={`flex-1 flex items-center justify-center gap-3 py-6 px-4 font-black italic tracking-tighter text-xs transition-all border-r border-white/5 uppercase ${
      active ? "bg-retro-green text-black" : "text-gray-500 hover:text-white hover:bg-white/5"
    }`}
  >
    {icon}
    <span className="hidden sm:inline">{label}</span>
  </button>
);
