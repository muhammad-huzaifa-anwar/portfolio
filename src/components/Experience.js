"use client";
import { motion } from "framer-motion";

const experienceData = [
  { 
    role: "Frontend Internship - TA Creatives", 
    duration: "Feb 2025 - April 2025", 
    desc: "Completed a 3-month frontend development internship at TA Creatives, working with React.js and Bootstrap." 
  },
  { 
    role: "MERN Stack Internship - Coderatory", 
    duration: "June 2024 - Sep 2024", 
    desc: "Completed a 4-month internship as a MERN Stack Developer, gaining hands-on experience in MongoDB, Express.js, React.js, and Node.js." 
  },
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-20 pb-20 text-white">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.4 }} 
        className="text-3xl sm:text-4xl font-bold text-center"
      >
        Experience
      </motion.h2>
      <ol className="mt-6 relative border-s border-neutral-200 dark:border-neutral-800">
        {experienceData.map((item, idx) => (
          <li key={idx} className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-neutral-300 rounded-full mt-1.5 -start-1.5 border border-white dark:border-black" />
            <time className="mb-1 text-sm">{item.duration}</time>
            <h3 className="text-lg font-semibold">{item.role}</h3>
            <p className="text-sm">{item.desc}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
