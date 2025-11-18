"use client";
import { Suspense, useState } from "react";
import { ModelViewer, ModelViewerLoading } from "./ModelViewer";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Part {
  id: string;
  name: string;
  modelUrl: string;
  designUrl: string;
}

interface Project {
  title: string;
  description: string;
  type: string; // BARU: Assembly / Parts
  tech: { name: string; icon: string }[];
  modelUrl: string;
  parts: Part[];
  designs: string[];
}

interface ModelDetailModalProps {
  project: Project;
  onClose: () => void;
}

export const ModelDetailModal = ({ project, onClose }: ModelDetailModalProps) => {
  const [activeTab, setActiveTab] = useState<"main" | "parts" | "2d">("main");
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [designIndex, setDesignIndex] = useState(0);

  const currentDesigns = activeTab === "parts" && selectedPart
    ? [selectedPart.designUrl]
    : project.designs;

  const handlePrev = () => {
    setDesignIndex((prev) => (prev > 0 ? prev - 1 : currentDesigns.length - 1));
  };

  const handleNext = () => {
    setDesignIndex((prev) => (prev < currentDesigns.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div
        className="w-full max-w-7xl h-[90vh] bg-[#0a0a0a] rounded-2xl overflow-hidden border border-[#1a1a1a] shadow-2xl flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-[#1a1a1a] flex justify-between items-center bg-[#0a0a0a]/95 backdrop-blur z-10">
          <h2 className="text-2xl font-bold text-white">
            {selectedPart ? selectedPart.name : project.title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white transition p-2 rounded-lg hover:bg-[#1a1a1a]"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-[#1a1a1a]">
          <button
            onClick={() => {
              setActiveTab("main");
              setSelectedPart(null);
            }}
            className={`px-6 py-3 font-medium transition ${
              activeTab === "main" ? "text-[#6c5ce7] border-b-2 border-[#6c5ce7]" : "text-gray-400"
            }`}
          >
            Main View
          </button>
          <button
            onClick={() => setActiveTab("parts")}
            className={`px-6 py-3 font-medium transition ${
              activeTab === "parts" ? "text-[#6c5ce7] border-b-2 border-[#6c5ce7]" : "text-gray-400"
            }`}
          >
            Parts ({project.parts.length})
          </button>
          <button
            onClick={() => setActiveTab("2d")}
            className={`px-6 py-3 font-medium transition ${
              activeTab === "2d" ? "text-[#6c5ce7] border-b-2 border-[#6c5ce7]" : "text-gray-400"
            }`}
          >
            2D ({currentDesigns.length})
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
          {/* 3D Viewer */}
          {activeTab !== "2d" && (
            <div className="w-full lg:w-3/5 h-64 lg:h-full bg-black p-4">
              <Suspense fallback={<ModelViewerLoading />}>
                <ModelViewer
                  modelUrl={selectedPart?.modelUrl || project.modelUrl}
                  isInModal={true}
                  autoRotate={activeTab === "main"}
                />
              </Suspense>
            </div>
          )}

          {/* Right Panel */}
          <div className={`w-full ${activeTab === "2d" ? "lg:w-full" : "lg:w-2/5"} p-6 overflow-y-auto space-y-6 bg-[#0a0a0a]`}>
            {activeTab === "main" && (
              <>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Description</h3>
                  <p className="text-gray-300 leading-relaxed">{project.description}</p>
                </div>

                {/* TAMBAH: Type */}
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-white">Type</h3>
                  <span className="inline-block bg-[#6c5ce7] text-white px-4 py-1.5 rounded-full text-sm font-medium">
                    {project.type}
                  </span>
                </div>

                {/* Software */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-white">Software</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-2">
                        {/* LOGO BULAT & TRANSPARAN */}
                        <div className="w-7 h-7 flex items-center justify-center">
                          <img
                            src={t.icon}
                            alt={t.name}
                            className="max-w-full max-h-full object-contain"
                          />
                        </div>
                        <span className="bg-[#1a1a1a] text-gray-300 px-3 py-1.5 rounded-full text-sm border border-[#2a2a2a]">
                          {t.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab === "parts" && (
              <div>
                <h3 className="text-lg font-semibold mb-4 text-white">Available Parts</h3>
                <div className="space-y-3">
                  {project.parts.map((part) => (
                    <button
                      key={part.id}
                      onClick={() => setSelectedPart(part)}
                      className={`w-full text-left p-4 rounded-lg border transition ${
                        selectedPart?.id === part.id
                          ? "border-[#6c5ce7] bg-[#1a1a1a]"
                          : "border-[#2a2a2a] hover:border-[#6c5ce7] hover:bg-[#1a1a1a]"
                      }`}
                    >
                      <p className="font-medium text-white">{part.name}</p>
                      <p className="text-sm text-gray-400 mt-1">Click to view 3D & Design</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* 2D TAB — FULL SCREEN JPG */}
            {activeTab === "2d" && currentDesigns.length > 0 && (
              <div className="flex-1 flex flex-col h-full">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-white">
                    Desain {designIndex + 1}/{currentDesigns.length}
                  </h3>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrev}
                      className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
                    >
                      <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                      onClick={handleNext}
                      className="p-2 rounded-lg bg-[#1a1a1a] hover:bg-[#2a2a2a] transition"
                    >
                      <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-lg">
                  <img
                    src={currentDesigns[designIndex]}
                    alt={`Desain ${designIndex + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};