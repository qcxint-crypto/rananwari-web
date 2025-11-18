"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/MWA.png"
            alt="Logo"
            width={40}
            height={40}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-400">
          <Link href="/" className="hover:text-white transition">Home</Link>
          <Link href="/project-detail" className="hover:text-white transition">Projects</Link>
          <Link href="/certificates" className="hover:text-white transition">Certificates</Link>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg text-white px-6 py-4 space-y-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="block hover:text-white">Home</Link>
          <Link href="/project-detail" onClick={() => setIsOpen(false)} className="block hover:text-white">Projects</Link>
          <Link href="/certificates" onClick={() => setIsOpen(false)} className="block hover:text-white">Certificates</Link>
        </div>
      )}
    </nav>
  );
}
