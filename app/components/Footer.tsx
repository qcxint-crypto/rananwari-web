"use client";

import { IoIosHeart } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center">
      <p className="text-gray-700 text-base opacity-80">
        Created with{" "}
        <IoIosHeart className="inline text-cyan-600 mx-1" /> by{" "}
        <a
          href="https://lynk.id/rananwari"
          target="_blank"
          className="text-cyan-600 font-medium hover:underline"
        >
          Rafli Anwari Nurafwan
        </a>
      </p>
    </footer>
  );
}


