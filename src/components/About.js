"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 text-white">
      <motion.h2 
        initial={{ opacity: 0, y: 10 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }} 
        transition={{ duration: 0.4 }} 
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-6"
      >
        About Me
      </motion.h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          <p>
            I’m a Full Stack Developer and a BS Computer Engineering Graduate from (SSUET).
I’m passionate about building modern, scalable, and user-friendly web applications while continuously exploring new technologies to sharpen my skills.
          </p>
          <p>
            My expertise lies in the MERN Stack and related tools. I focus on delivering responsive, high-performance, and maintainable applications with clean code and intuitive design..
          </p>
        </div>
        <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4">
          <h3 className="font-medium mb-2 text-black">Education</h3>
          <ul className="space-y-2 text-sm text-black">
            <li className="flex items-start gap-3">
              <span className="mt-1 size-2 rounded-full bg-neutral-400" />
              <div>
                <div className="font-semibold text-black">BS IN Computer Engineering</div>
                <div className="text-black">Sir Syed University of Engineering and Technology, Karachi</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
