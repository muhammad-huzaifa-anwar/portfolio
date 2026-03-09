"use client";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { 
  motion, 
  AnimatePresence, 
  useScroll, 
  useMotionValueEvent, 
  useSpring, 
  useMotionValue 
} from "framer-motion";

const navLinks = [
  { name: "about", href: "#about" },
  { name: "skills", href: "#skills" },
  { name: "projects", href: "#projects" },
  { name: "experience", href: "#experience" },
  { name: "contact", href: "#contact" },
];

// 🧲 Advanced Magnetic Component with Spring Physics
const Magnetic = ({ children }) => {
  const ref = useRef(null);
  const position = { x: useMotionValue(0), y: useMotionValue(0) };
  
  const springX = useSpring(position.x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(position.y, { stiffness: 150, damping: 15, mass: 0.1 });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    position.x.set(middleX * 0.2); // Sensitivity
    position.y.set(middleY * 0.2);
  };

  const reset = () => {
    position.x.set(0);
    position.y.set(0);
  };

  return (
    <motion.div
      style={{ x: springX, y: springY }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
    >
      {children}
    </motion.div>
  );
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    const ids = navLinks.map((n) => n.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          const id = visible[0].target.id;
          setActive(id);
        }
      },
      { threshold: [0.25, 0.5, 0.75], rootMargin: "0px 0px -35% 0px" }
    );
    elements.forEach((el) => observer.observe(el));
    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (open) {
      const handleKey = (e) => {
        if (e.key === "Escape") setOpen(false);
      };
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
      return () => {
        document.removeEventListener("keydown", handleKey);
        document.body.style.overflow = "";
      };
    }
  }, [open]);

  // 🎭 Navbar Variants
  const navVariants = {
    hidden: { 
      y: -100, 
      opacity: 0,
    },
    visible: { 
      y: 0, 
      opacity: 1,
      width: scrolled ? "90%" : "100%",
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1], // Custom cubic-bezier for premium feel
      }
    },
    scrolled: {
      width: "90%",
      maxWidth: "1000px",
      y: 20,
      opacity: 1,
      backgroundColor: "rgba(17, 24, 39, 0.7)", // Glassmorphism
      backdropFilter: "blur(12px)",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      borderRadius: "9999px",
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    },
    top: {
      width: "100%",
      maxWidth: "100%",
      y: 0,
      opacity: 1,
      backgroundColor: "rgba(17, 24, 39, 0)", // Transparent
      backdropFilter: "blur(0px)",
      border: "1px solid rgba(255, 255, 255, 0)",
      borderRadius: "0px",
      paddingTop: "1.5rem",
      paddingBottom: "1.5rem",
      boxShadow: "none",
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  // Mobile Menu Variants (Slide from Right)
  const menuVariants = {
    closed: { 
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    },
    open: { 
      x: "0%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 flex justify-center pointer-events-none">
      <motion.header
        variants={navVariants}
        initial="hidden"
        animate={scrolled ? "scrolled" : "top"}
        className="pointer-events-auto flex items-center justify-between px-6 sm:px-10 overflow-hidden"
      >
        {/* 🌀 Logo */}
        <Link href="/" onClick={() => setActive("")} className="relative z-10" aria-label="Home">
          <Magnetic>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="font-black text-xl sm:text-2xl tracking-widest cursor-pointer flex items-center gap-2"
            >
              <span className="text-white">Software Developer</span>
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ 
                  duration: 5, 
                  repeat: Infinity, 
                  ease: "linear" 
                }}
                style={{ backgroundSize: "200% auto" }}
              >
                Enginner
              </motion.span>
            </motion.div>
          </Magnetic>
        </Link>

        {/* 🍔 Mobile Toggle */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          className="sm:hidden text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 relative group"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close Menu" : "Open Menu"}
          aria-expanded={open}
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center gap-1.5 overflow-hidden">
             <motion.span 
               animate={open ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
               className="w-full h-0.5 bg-white rounded-full block origin-center transition-all duration-300"
             />
             <motion.span 
               animate={open ? { x: 20, opacity: 0 } : { x: 0, opacity: 1 }}
               className="w-full h-0.5 bg-white rounded-full block transition-all duration-300"
             />
             <motion.span 
               animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
               className="w-full h-0.5 bg-white rounded-full block origin-center transition-all duration-300"
             />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-white/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>

        {/* 🖥 Desktop Nav */}
        <nav className="hidden sm:flex gap-1 items-center bg-white/5 rounded-full p-1.5 border border-white/10 backdrop-blur-md shadow-lg" role="navigation">
          {navLinks.map((link) => {
            const isActive = active === link.name;
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActive(link.name)}
                className="relative"
                aria-current={isActive ? "page" : undefined}
              >
                <Magnetic>
                  <motion.div 
                    className="px-5 py-2.5 rounded-full relative overflow-hidden group"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Active Indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="pill-nav"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 rounded-full"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    
                    {/* Hover Effect */}
                    {!isActive && (
                      <div className="absolute inset-0 bg-white/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    )}

                    <span className={`relative z-10 text-sm font-bold tracking-wide capitalize transition-colors duration-200 ${isActive ? "text-white" : "text-gray-300 group-hover:text-white"}`}>
                      {link.name}
                    </span>
                  </motion.div>
                </Magnetic>
              </Link>
            );
          })}
        </nav>
      </motion.header>

      {/* 📱 Full Screen Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-gray-950 z-40 flex flex-col items-center justify-center pointer-events-auto overflow-hidden"
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
          >
            {/* Animated Background Gradient */}
            <motion.div 
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-gray-950 to-gray-950 pointer-events-none" 
            />

            <nav className="flex flex-col gap-8 text-center relative z-10">
              {navLinks.map((link, index) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100%" }}
                    transition={{ delay: 0.1 + index * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => {
                        setActive(link.name);
                        setOpen(false);
                      }}
                      className="relative text-5xl sm:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-500 hover:to-white transition-all capitalize group block"
                    >
                      <span className="relative z-10 group-hover:tracking-widest transition-all duration-300">{link.name}</span>
                      {/* Hover Strikethrough Effect */}
                      <span className="absolute left-0 bottom-2 w-0 h-1 bg-purple-500 group-hover:w-full transition-all duration-300 ease-out" />
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="absolute bottom-10 flex gap-6 text-gray-400"
            >
              <span>Twitter</span>
              <span>•</span>
              <span>LinkedIn</span>
              <span>•</span>
              <span>GitHub</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
