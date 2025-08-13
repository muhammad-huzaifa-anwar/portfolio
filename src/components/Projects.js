"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const projects = [
  {
    slug: "fullstack-ecommerce-firebase",
    title: "Fullstack E-commerce using Firebase",
    description: "Complete e-commerce application built with React and Firebase for authentication, database, and hosting.",
    image: "/fullstackfirebaseECO.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/fullstack-Ecommerce-using-firebase",
    demo: "https://fullstack-ecommerce-using-firebase.vercel.app/",
    tech: ["React", "Firebase", "Authentication", "Database", "E-commerce"],
  },
  {
    slug: "reactjs-blog-app",
    title: "React.js Blog App",
    description: "Blog application built with React.js featuring user authentication and content management.",
    image: "/blogapppic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/Reactjs-blog-app",
    demo: "https://reactjs-blog-app-nine.vercel.app/",
    tech: ["React", "JavaScript", "Blog", "Authentication"],
  },
  {
    slug: "react-pokemon",
    title: "React Pokemon App",
    description: "Pokemon application built with React, featuring Pokemon data and interactive features.",
    image: "/pokemonpic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/React-Pokemon",
    demo: "https://react-pokemon-six-psi.vercel.app/",
    tech: ["React", "JavaScript", "Pokemon API", "UI/UX"],
  },
  {
    slug: "fullstack-course-selling-app",
    title: "Full-stack Course Selling App",
    description: "Complete course selling platform with payment integration and course management.",
    image: "/Full-stackCourseSellingApppic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/Full-stack-Course-selling-App",
    demo: "https://github.com/muhammad-huzaifa-anwar/Full-stack-Course-selling-App",
    tech: ["Full-stack", "Course Management", "Payment Integration", "User Management"],
  },
  {
    slug: "figma-design-nextjs",
    title: "Figma Design to Next.js",
    description: "Converting Figma designs to functional Next.js components with pixel-perfect implementation.",
    image: "/FigmaDesigntoNext.jspic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/figma-design-nextjs",
    demo: "https://github.com/muhammad-huzaifa-anwar/figma-design-nextjs",
    tech: ["Next.js", "Figma", "Design Implementation", "UI/UX"],
  },
  {
    slug: "nextjs-movie-website",
    title: "Next.js Movie Website",
    description: "Full-stack movie website built with Next.js featuring movie listings and user interactions.",
    image: "/nextjsmoviepic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/nextjs-basic-fullstack-movie-website",
    demo: "https://github.com/muhammad-huzaifa-anwar/nextjs-basic-fullstack-movie-website",
    tech: ["Next.js", "Full-stack", "Movie API", "Database"],
  },
  {
    slug: "event-management-nextjs",
    title: "Event Management Next.js",
    description: "Event management system built with Next.js for organizing and managing events.",
    image: "/eventapppic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/event-management-nextjs",
    demo: "https://github.com/muhammad-huzaifa-anwar/event-management-nextjs",
    tech: ["Next.js", "Event Management", "Database", "User Management"],
  },
  {
    slug: "react-todo-app",
    title: "React Todo App",
    description: "Todo application built with React using useState, useContext, and useReducer hooks.",
    image: "/reacttodopic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/React-Todo-App",
    demo: "https://github.com/muhammad-huzaifa-anwar/React-Todo-App",
    tech: ["React", "JavaScript", "useState", "useContext", "useReducer"],
  },
  {
    slug: "saltnpepper-restaurant",
    title: "Salt n Pepper Restaurant",
    description: "Fully responsive restaurant website built with HTML and CSS.",
    image: "/saltpepperpic.PNG",
    github: "https://github.com/muhammad-huzaifa-anwar/saltnpepper-restaurant-website",
    demo: "https://github.com/muhammad-huzaifa-anwar/saltnpepper-restaurant-website",
    tech: ["HTML", "CSS", "Responsive Design"],
  },
  
];

export default function Projects() {
  const router = useRouter();

  const handleProjectClick = (project) => {
    if (project.demo && project.demo !== project.github) {
      window.open(project.demo, '_blank');
    } else {
      window.open(project.github, '_blank');
    }
  };

  return (
    <section id="projects" className="scroll-mt-20">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.4 }} 
        className="text-3xl sm:text-4xl font-bold text-center mb-8"
      >
        My Personal Projects
      </motion.h2>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <motion.div 
            key={p.slug}
            initial={{ opacity: 0, scale: 0.9 }}
            whileHover={{ scale: 1.03, boxShadow: "0 4px 16px rgba(0,0,0,0.10)" }}
            whileTap={{ scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring", stiffness: 140 }}
            className={
              `group rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 cursor-pointer shadow-md ` +
              `bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-950 hover:shadow-lg w-full max-w-xs mx-auto`
            }
            onClick={() => handleProjectClick(p)}
            style={{ minHeight: '260px' }}
          >
            <div className="relative h-28 bg-neutral-100 dark:bg-neutral-900">
              <Image 
                src={p.image} 
                alt={p.title} 
                fill 
                className="object-cover dark:invert" 
                style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.10))" }}
              />
            </div>
            <div className="p-3 space-y-1">
              <div className="font-semibold text-base group-hover:underline text-center text-black">{p.title}</div>
              <p className="text-xs text-black text-center">{p.description}</p>
              <div className="flex flex-wrap gap-1 pt-1 justify-center">
                {p.tech.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 text-[10px] bg-neutral-100 dark:bg-neutral-800 rounded text-black">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-xs pt-1 justify-center">
                <a 
                  href={p.demo} 
                  onClick={(e) => e.stopPropagation()} 
                  className="px-3 py-1 rounded-full bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all duration-200 text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live
                </a>
                <a 
                  href={p.github} 
                  onClick={(e) => e.stopPropagation()} 
                  className="px-3 py-1 rounded-full bg-gray-800 text-white font-semibold shadow hover:bg-gray-900 transition-all duration-200 text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
