"use client";

import { useEffect, useState } from "react";

interface SplineViewerProps {
  url: string;
  className?: string;
}

export default function SplineViewer({ url, className }: SplineViewerProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js"]'
    );

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://unpkg.com/@splinetool/viewer@1.11.4/build/spline-viewer.js";
      document.head.appendChild(script);
      script.onload = () => setIsLoaded(true);
    } else {
      setIsLoaded(true);
    }
  }, []);

  return (
    <div className={className} style={{ width: "100%", height: "100%", position: "relative" }}>
      {isLoaded && (
        /* @ts-ignore: custom Spline web component */
        <spline-viewer
          url={url}
          style={{
            width: "100%",
            height: "100%",
            display: "block"
          }}
          hint="false"
        />
      )}
    </div>
  );
}
