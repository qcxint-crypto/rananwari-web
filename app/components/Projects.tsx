"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function Projects() {
  // Load Spline Viewer
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js";
    document.head.appendChild(script);

    // Cleanup: hapus script saat komponen unmount
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="relative min-h-screen bg-black text-white flex flex-col justify-center px-6 py-20 overflow-hidden"
    >
      {/* 🔹 Title */}
      <div className="w-full max-w-7xl mx-auto flex items-center justify-between mb-12">
        <div className="text-left">
          <h2 className="text-4xl font-medium mb-3">Projects</h2>
          <div className="space-y-1 mb-6">
            <div className="w-16 h-0.5 bg-white rounded"></div>
            <div className="w-10 h-0.5 bg-white rounded"></div>
          </div>
        </div>
      </div>

      {/* 🔹 Content: 3D Model + Teks */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* KIRI → 3D Model */}
        <div className="flex justify-center md:justify-end -mx-4 md:-mx-8 pointer-events-none">
          <div className="w-full max-w-5xl">
            <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-3xl overflow-visible">
              {/* @ts-expect-error: custom Spline web component, type not declared in JSX.IntrinsicElements */}
              <spline-viewer
                url="https://prod.spline.design/nbEqf50UilycpJRo/scene.splinecode"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "140%",
                  height: "140%",
                  maxWidth: "none",
                  pointerEvents: "auto", // hanya 3D yang bisa diinteraksi
                }}
              />
            </div>
          </div>
        </div>

        {/* KANAN → Teks + Tombol */}
        <div className="flex flex-col justify-center h-full space-y-6 relative z-10">
          <h3 className="text-2xl font-semibold">Project Showcase</h3>
          <p className="text-gray-400 leading-relaxed">
            Beberapa project yang saya kerjakan merupakan sebuah Study Case,
            Tugas Kuliah, Permintaan Client, dan Project Mandiri. Saya memiliki
            beberapa project seperti 3D drawing Mesin CNC Router 3 Axis,
            3D drawing part part Mesin Mesin di Perusahaan tempat magang saya, 
            Mold and Dies, dan 3D drawing berbagai model Shaft.
          </p>
          <div className="flex justify-start items-center py-4">
            <Link
              href="/project-detail"
              className="px-6 py-2 rounded-full border border-gray-400 text-gray-200 hover:bg-gray-200 hover:text-black transition-colors duration-300 shadow-md hover:shadow-lg relative z-20"
            >
              Go Archive
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

