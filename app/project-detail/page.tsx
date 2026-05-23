"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { ModelCard } from "../components/ModelCard";
import { ModelDetailModal } from "../components/ModelDetailModal";
import { motion } from "framer-motion";
import { Database, Search, Filter } from "lucide-react";
import { useLanguage } from "../../lib/LanguageContext";
import { projects, type ProjectData } from "../../lib/project-data";

export default function ProjectDetails() {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const { t } = useLanguage();

  return (
    <main className="bg-black text-white min-h-screen manga-dots">
      <Navbar />
      <Contact />
      
      <section className="pt-32 pb-20 px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col mb-16 space-y-4">
             <div className="flex items-center gap-2 text-retro-blue font-mono text-[10px] tracking-[0.5em] uppercase">
                <Database size={14} />
                SYSTEM // REGISTRY
             </div>
             <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter uppercase leading-none drop-shadow-[4px_4px_0px_#ff00ff]">
                {t.archive_header} <br />
                <span className="text-retro-pink">{t.archive_subheader}</span>
             </h1>
          </div>

          <div className="flex flex-col md:flex-row gap-4 mb-12">
             <div className="flex-grow bg-white/5 border border-white/10 p-4 flex items-center gap-4 group hover:border-retro-green transition-colors">
                <Search className="text-gray-500 group-hover:text-retro-green" size={20} />
                <input 
                  type="text" 
                  placeholder={t.archive_search} 
                  className="bg-transparent border-none outline-none w-full font-mono text-sm uppercase tracking-widest text-white placeholder:text-gray-600"
                />
             </div>
             <button className="bg-retro-green text-black font-black italic px-8 py-4 flex items-center gap-3 hover:bg-white transition-all uppercase tracking-tighter shadow-[4px_4px_0px_#1a5c0a]">
                <Filter size={20} />
                {t.archive_filter}
             </button>
          </div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {projects.map((project) => (
              <ModelCard
                key={project.id}
                title={(t as any)[project.titleKey] || project.titleKey}
                description={(t as any)[project.descKey] || project.descKey}
                tech={project.tech}
                modelUrl={project.modelUrl}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {selectedProject && (
        <ModelDetailModal
          project={{
            ...selectedProject,
            title: (t as any)[selectedProject.titleKey] || selectedProject.titleKey,
            description: (t as any)[selectedProject.descKey] || selectedProject.descKey,
            tech: selectedProject.tech
          }}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <Footer />
    </main>
  );
}
