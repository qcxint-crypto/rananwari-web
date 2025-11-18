// /root/app/components/SplineViewer.tsx
"use client";
import { useEffect, useState } from "react";

interface SplineViewerProps {
  url: string;
  className?: string;
}

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if ((window as any).splineViewerLoaded) {
      setIsLoaded(true);
      return;
    }

    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js";
    script.onload = () => {
      (window as any).splineViewerLoaded = true;
      setIsLoaded(true);
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup optional
    };
  }, []);

  if (!isLoaded) {
    return (
      <div className={`w-full h-full flex items-center justify-center bg-gray-900 rounded-2xl ${className || ""}`}>
        <div className="text-gray-400 text-sm">Loading 3D...</div>
      </div>
    );
  }

  return (
    <spline-viewer
      url={url}
      className={className}
      style={{ width: "100%", height: "100%" }}
    />
  );
}