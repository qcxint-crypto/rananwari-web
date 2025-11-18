"use client";

import { IoIosHeart } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-white py-6 text-center">
      <p className="text-gray-700 text-base opacity-80">
        Created with{" "}
        <IoIosHeart className="inline text-cyan-600 mx-1" /> by{" "}
        <a
          href="https://github.com/princechayon"
          target="_blank"
          className="text-cyan-600 font-medium hover:underline"
        >
          Wildan
        </a>
      </p>
    </footer>
  );
}
