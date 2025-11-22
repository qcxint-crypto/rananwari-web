"use client";
import { Suspense } from "react";
import { ModelViewer, ModelViewerLoading } from "./ModelViewer";
import { motion } from "framer-motion";

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

// Animasi muncul dari bawah
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1], // mirip easeInOut
    },
  },
};


// Animasi teks diketik dari kiri
const textVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
};

export const ModelCard = ({ title, description, tech, modelUrl, onClick }: ModelCardProps) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      className="group relative rounded-2xl overflow-hidden bg-[#0f0f0f] border border-[#1a1a1a] hover:border-[#6c5ce7] transition-all duration-500 shadow-lg hover:shadow-xl cursor-pointer"
      onClick={onClick}
    >
      {/* 3D CARD */}
      <div className="h-64 w-full relative bg-black">
        <Suspense fallback={<ModelViewerLoading />}>
          <ModelViewer modelUrl={modelUrl} autoRotate={true} />
        </Suspense>
      </div>

      {/* INFO */}
      <div className="p-6 space-y-3">
        <motion.h3
          variants={textVariants}
          className="text-xl font-semibold text-white group-hover:text-[#6c5ce7] transition-colors"
        >
          {title}
        </motion.h3>

        <motion.p
          variants={textVariants}
          className="text-gray-300 text-sm line-clamp-2"
        >
          {description}
        </motion.p>

        {/* SOFTWARE + LOGO */}
        <motion.div
          variants={textVariants}
          className="flex flex-wrap gap-2"
        >
          {tech.map((t, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <img
                  src={t.icon}
                  alt={t.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <span className="bg-[#1a1a1a] text-gray-300 px-3 py-1.5 rounded-full text-xs border border-[#2a2a2a]">
                {t.name}
              </span>
            </div>
          ))}
        </motion.div>

        <motion.button
          variants={textVariants}
          className="text-[#6c5ce7] text-sm font-medium hover:text-[#a29bfe] flex items-center mt-2"
        >
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </motion.button>
      </div>
    </motion.div>
  );

};
