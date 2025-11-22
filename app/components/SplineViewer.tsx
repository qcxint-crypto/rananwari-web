"use client";

import { useEffect } from "react";

interface SplineViewerProps {
  url: string;
  className?: string;
}

export default function SplineViewer({ url, className }: SplineViewerProps) {
  // Load script Spline sekali saja
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js"]'
    );

    // Kalau sudah ada script-nya, jangan tambah lagi
    if (existingScript) return;

    const script = document.createElement("script");
    script.type = "module";
    script.src =
      "https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js";
    document.head.appendChild(script);

    // Tidak perlu cleanup: biarkan script stay di head
  }, []);

  return (
    <div className={className} style={{ width: "100%", height: "100%" }}>
      {/* @ts-ignore: custom Spline web component yang tidak dikenal oleh JSX */}
      <spline-viewer
        url={url}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
