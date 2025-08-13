"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaBootstrap, FaDatabase } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTailwindcss, SiNestjs, SiPostgresql, SiGraphql, SiShadcnui } from "react-icons/si";

const skills = [
  { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "TypeScript", icon: FaJs, color: "text-blue-400" },
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
  { name: "MySQL", icon: FaDatabase, color: "text-blue-700" },
  { name: "Supabase", icon: FaDatabase, color: "text-green-600" },
  { name: "GraphQL", icon: SiGraphql, color: "text-pink-600" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400" },
  { name: "Shadcn", icon: SiShadcnui, color: "text-neutral-700 dark:text-neutral-300" },
  { name: "Bootstrap", icon: FaBootstrap, color: "text-purple-600" },
  { name: "DaisyUI", icon: FaDatabase, color: "text-cyan-500" },
  { name: "Vercel", icon: FaDatabase, color: "text-black dark:text-white" },
  { name: "Render", icon: FaDatabase, color: "text-blue-400" },
  { name: "Clerk Auth", icon: FaDatabase, color: "text-pink-400" },
];

export default function Skills() {
  return (
  <section id="skills" className="scroll-mt-20 flex flex-col justify-center items-center min-h-[50vh]">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.4 }} 
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-6"
      >
        Skills
      </motion.h2>
      <div className="mt-4 flex flex-wrap gap-6 justify-center items-center">
        {skills.map((s) => (
          <motion.div 
            key={s.name} 
            initial={{ opacity: 0, scale: 0.8 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.3, type: "spring", stiffness: 120 }} 
            className="flex flex-col items-center w-16 h-16 justify-center"
          >
            <s.icon className={`text-3xl ${s.color}`} />
            <span className="mt-1 text-xs font-medium text-white text-center">{s.name}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
