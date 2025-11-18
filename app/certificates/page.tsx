"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCw, X } from "lucide-react";

const certificates = [
  {
    name: "Sertifikat Kompetensi BNSP Maintenance",
    company: "Badan Nasional Sertifikasi Profesi (BNSP)",
    images: ["/certificates/BNSP-maintenance-depan.png", "/certificates/BNSP-maintenance-belakang.png"],
  },
  {
    name: "Program Internship pemagangan",
    company: "PT. Indorama Synthetics Tbk",
    images: ["/certificates/sertif-magang.png"],
  },
  {
    name: "Mechanical Drafting Competition CAD 2023 Tingkat Nasional",
    company: "HMM FPTK UPI",
    images: ["/certificates/Mechanical-Drafting-Competition.jpg"], 
  },
  {
    name: "Solidwork Software Training",
    company: "HMM ITBU",
    images: ["/certificates/solidworks-software-training.jpg"], // hanya 1 halaman
  },
  {
    name: "Cyber Security Fundamental",
    company: "Wehack",
    images: ["/certificates/cyber-seccurity-fundamental.png"],
  },
  {
    name: "Content Hack Personal Branding Online Course",
    company: "Content Academy by @akademicreator",
    images: ["/certificates/content-hack-personal-branding.jpg"],
  },
  {
    name: "Realizing A Youth For Technopreneurship",
    company: "HME PEI",
    images: ["/certificates/realizing-a-youth-for-technopreneurship.jpg"],
  },
  {
    name: "What To Know About Cryptocurrency In This Era",
    company: "HMM TRPL PEI",
    images: ["/certificates/what-to-know-cryptocurrency-in-this-era.jpg"],
  },
];

export default function Certificates() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [imageIndex, setImageIndex] = useState(0);

  const handleRotate = (index: number) => {
    if (certificates[index].images.length > 1) {
      setImageIndex((prev) => (prev + 1) % certificates[index].images.length);
      setActiveIndex(index); //
    }
  };

  const handlePreview = (index: number) => {
    setActiveIndex(index);
    setImageIndex(0);
  };

  const closePreview = () => {
    setActiveIndex(null);
    setImageIndex(0);
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      <section className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Certificates
        </h1>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-lg overflow-hidden relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              {/* Certificate Image */}
              <div
                className="relative cursor-pointer"
                onClick={() => handlePreview(idx)}
              >
                <Image
                  src={cert.images[imageIndex % cert.images.length]}
                  alt={cert.name}
                  width={400}
                  height={300}
                  className="w-full h-48 object-contain bg-black"
                />
              </div>

              {/* Card Content */}
              <div className="p-4">
                <h2 className="font-semibold text-lg">{cert.name}</h2>
                <p className="text-sm text-cyan-600">{cert.company}</p>
              </div>

              {/* Rotate Button */}
              {cert.images.length > 1 && (
                <button
                  onClick={() => handleRotate(idx)}
                  className="absolute top-3 right-3 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                >
                  <RotateCw size={18} />
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Preview Modal */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePreview}
          >
            <div
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
            <Image
              src={
                certificates[activeIndex].images[
                  imageIndex % certificates[activeIndex].images.length
                ]
              }
              alt={certificates[activeIndex].name}
              width={1000}
              height={700}
              className="max-h-[80vh] max-w-full w-auto h-auto object-contain mx-auto rounded-lg"
            />

              {/* Close Button */}
              <button
                onClick={closePreview}
                className="absolute top-4 right-4 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
              >
                <X size={20} />
              </button>

              {/* Rotate button di modal kalau ada lebih dari 1 halaman */}
              {certificates[activeIndex].images.length > 1 && (
                <button
                  onClick={() => handleRotate(activeIndex)}
                  className="absolute bottom-4 right-4 bg-white/10 p-3 rounded-full hover:bg-white/20 transition"
                >
                  <RotateCw size={22} />
                  
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Contact />
      <Footer />
    </main>
  );
}
