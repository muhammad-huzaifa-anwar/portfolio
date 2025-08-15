"use client";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaBootstrap,
  FaDatabase,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiTailwindcss,
  SiNestjs,
  SiPostgresql,
  SiGraphql,
  SiShadcnui,
  SiExpress,
  SiFirebase,
} from "react-icons/si";

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

  // New additions:
  { name: "GitHub", icon: FaGithub, color: "text-gray-300" },
  { name: "Express.js", icon: SiExpress, color: "text-black" },
  { name: "Firebase", icon: SiFirebase, color: "text-yellow-400" },
  { name: "RESTful APIs", icon: FaServer, color: "text-indigo-500" },
];

// Variants for container to stagger children animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Variants for each skill item
const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 flex flex-col justify-center items-center min-h-[50vh] w-full"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-6"
      >
        Skills
      </motion.h2>

      <motion.div
        className="mt-4 flex flex-wrap gap-6 justify-center items-center w-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((s) => (
          <motion.div
            key={s.name}
            variants={skillVariants}
            transition={{ type: "spring", stiffness: 120, damping: 15 }}
            whileHover={{ scale: 1.15, rotate: 5, zIndex: 10 }}
            className="flex flex-col items-center w-16 h-16 justify-center cursor-pointer select-none"
            title={s.name}
          >
            <s.icon className={`text-3xl ${s.color}`} />
            <span className="mt-1 text-xs font-medium text-white text-center">{s.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
