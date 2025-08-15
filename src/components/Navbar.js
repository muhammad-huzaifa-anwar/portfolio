"use client";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = ["about", "skills", "projects", "experience", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-40 w-full bg-gray-900 border-b border-neutral-700"
    >
      <nav className="w-full px-[10%] py-4 flex items-center justify-between bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 shadow-lg">
        <Link
          href="/"
          className="font-bold text-xl sm:text-3xl text-white tracking-widest hover:text-purple-400 transition-colors duration-300 select-none"
        >
          PORTFOLIO
        </Link>

        {/* 🍔 Mobile Toggle */}
        <button
          className="sm:hidden text-white p-2 rounded focus:outline-none"
          aria-label="Toggle navigation"
          onClick={() => setOpen(!open)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* 🖥 Desktop Nav */}
        <div className="hidden sm:flex gap-6 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link}
              href={`#${link}`}
              onClick={() => setActive(link)}
              className={`relative text-white capitalize hover:opacity-80 transition-all duration-200 ${
                active === link ? "font-semibold" : ""
              }`}
            >
              {link}
              {/* Animated underline */}
              {active === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 h-[2px] w-full bg-white"
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </Link>
          ))}
        </div>
      </nav>

      {/* 📱 Mobile Nav */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="sm:hidden flex flex-col gap-4 px-[10%] pb-4 text-sm bg-gray-900 w-full"
          >
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link}`}
                onClick={() => {
                  setActive(link);
                  setOpen(false);
                }}
                className="capitalize text-white hover:opacity-80"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
