"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-gray-900 border-b border-neutral-200/60 dark:border-neutral-800">
      <nav className="max-w-full px-[10%] py-3 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white">PORTFOLIO</Link>
        <button
          className="sm:hidden text-white p-2 rounded focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className="hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-80 text-white">About</a>
          <a href="#skills" className="hover:opacity-80 text-white">Skills</a>
          <a href="#projects" className="hover:opacity-80 text-white">Projects</a>
          <a href="#experience" className="hover:opacity-80 text-white">Experience</a>
          <a href="#contact" className="hover:opacity-80 text-white">Contact</a>
        </div>
      </nav>
      {/* Mobile Nav Links */}
      {open && (
        <div className="sm:hidden flex flex-col gap-4 px-[10%] pb-4 text-sm bg-gray-900">
          <a href="#about" className="hover:opacity-80 text-white">About</a>
          <a href="#skills" className="hover:opacity-80 text-white">Skills</a>
          <a href="#projects" className="hover:opacity-80 text-white">Projects</a>
          <a href="#experience" className="hover:opacity-80 text-white">Experience</a>
          <a href="#contact" className="hover:opacity-80 text-white">Contact</a>
        </div>
      )}
    </header>
  );
}
