"use client";
import { useEffect } from "react";

export default function Skills() {
  // Load Spline Viewer sekali
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js";
    document.head.appendChild(script);

    // FIX: Cleanup harus return void, bukan return HTMLScriptElement
    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <section
      id="skills"
      className="relative min-h-screen bg-black text-white flex flex-col justify-center px-6 py-20"
    >
      {/* 🔹 Title */}
      <div className="w-full max-w-6xl mx-auto flex items-center justify-between mb-12">
        <div className="text-left">
          <h2 className="text-4xl font-medium mb-3">Skills</h2>
          <div className="space-y-1 mb-6">
            <div className="w-16 h-0.5 bg-white rounded"></div>
            <div className="w-10 h-0.5 bg-white rounded"></div>
          </div>
        </div>
      </div>

      {/* 🔹 3D Model */}
      <div className="w-full max-w-6xl mx-auto">
        <div className="w-full h-[600px] md:h-[700px] lg:h-[800px] rounded-3xl overflow-hidden shadow-2xl">
          {/* @ts-expect-error: custom Spline element */}
          <spline-viewer
            url="https://prod.spline.design/h4UeXH4AxFGOPPZ3/scene.splinecode"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </section>
  );
}
