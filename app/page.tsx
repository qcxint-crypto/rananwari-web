"use client";

import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Profile from "./components/Profile";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen"; //

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 6000); //Durasi splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <main className="bg-black text-white">
      <Navbar />
      <Contact />
      <Hero />
      <Profile />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

