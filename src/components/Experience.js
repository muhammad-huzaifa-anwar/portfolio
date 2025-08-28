"use client";
import { motion } from "framer-motion";

const experienceData = [
  {
    role: "Mern Stack Developer - TA Creatives",
    duration: "Feb 2025 - July 2025",
    desc: "Completed a 6-month MERN stack (PAID internship) at TA Creatives, where I worked on frontend-backend integration using RESTful APIs, and contributed to frontend development using React.js. I gained hands-on experience with MongoDB, Express.js, React, and Node.js, and collaborated with a cross-functional team to build and maintain web applications."
  },
  {
    role: "MERN Stack Internship - Coderatory",
    duration: "June 2024 - Sep 2024",
    desc: "Completed a 4-month internship as a MERN Stack Developer, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 pb-20 w-full relative overflow-hidden text-white py-12"
    >
      {/* 🌈 Animated Gradient Blobs */}
      <motion.div
        className="absolute top-[-150px] left-[-100px] w-[500px] h-[500px] bg-blue-500 rounded-full opacity-20 blur-[100px] z-0"
        animate={{
          x: [0, 120, -60, 0],
          y: [0, 90, -45, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-[-150px] right-[-100px] w-[400px] h-[400px] bg-indigo-700 rounded-full opacity-20 blur-[100px] z-0"
        animate={{
          x: [0, -100, 50, 0],
          y: [0, -80, 40, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* 💬 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-10 relative z-10"
      >
        Experience
      </motion.h2>

      {/* 🗂️ Experience List */}
      <ol className="relative border-l border-neutral-200 dark:border-neutral-800 max-w-4xl mx-auto space-y-8 z-10">
        {experienceData.map((item, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.15 }}
            className="relative pl-8"
          >
            {/* Timeline Dot */}
            <span className="absolute left-0 top-2 w-4 h-4 bg-indigo-400 rounded-full border-2 border-white dark:border-black" />

            <time className="mb-1 block text-sm font-mono text-indigo-300">
              {item.duration}
            </time>
            <h3 className="text-xl font-semibold text-white">{item.role}</h3>
            <p className="text-neutral-300 mt-1">{item.desc}</p>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
