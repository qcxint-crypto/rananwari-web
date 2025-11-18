"use client";

import { useRef } from "react";
import LightRays from './LightRays';
import TrueFocus from './TrueFocus';
import { FaGlobe } from 'react-icons/fa';

export default function Hero() {
  const containerRef = useRef(null);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden"
    >
      {/* 🔹 Content */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        {/* 🔹 Small Location Tag */}
        <span className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/20 text-white text-xs sm:text-sm font-medium backdrop-blur-md">
          <FaGlobe className="text-white text-sm" />
          <span>West Java, Indonesia</span>
        </span>
      </div>

      {/* 🔹 Background LightRays */}
      <div className="absolute inset-0 z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      {/* 🔹 Hero Text */}
      <div className="relative z-10 text-center px-4 sm:px-6">
        <h1
          className="
            text-3xl        
            sm:text-4xl     
            md:text-5xl     
            lg:text-6xl     
            font-semibold text-center
          ">
          Hi, Welcome to My Portfolio!
        </h1>
      </div>

      {/* 🔹 Sub text TrueFocus */}
      <div className="relative z-10 mt-4">
        <TrueFocus 
          sentence="CAD 3Ddrawing Engineering"
          manualMode={false}
          blurAmount={5}
          borderColor="white"
          animationDuration={1}
          pauseBetweenAnimations={0.5}
        />
      </div>
    </section>
  );
}
