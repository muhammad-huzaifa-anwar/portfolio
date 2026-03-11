"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 w-full py-16 bg-gray-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-12"
      >
        About Me
      </motion.h2>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="md:col-span-2 space-y-6 text-neutral-300 leading-relaxed"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg"
          >
            Full Stack Engineer building service-based and product-driven web systems, from database architecture to user interfaces. I&apos;ve worked on ERP, HRMS, POS, CRM, and CMS platforms, focusing on real business workflows and scalable system design.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg"
          >
            I also explore Agentic AI, workflow automation with n8n, and applied Data Science to create solutions that optimize operations and support smarter decision-making.
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-lg"
          >
            I&apos;m driven to work on products and client solutions where technology directly shapes business processes and long-term growth.
          </motion.p>
        </motion.div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ 
            scale: 1.03,
            boxShadow: "0 4px 16px rgba(0,0,0,0.15)"
          }}
          className="bg-neutral-900 border border-white/10 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-white/10 hover:ring-indigo-400/40"
        >
          <h3 className="font-semibold text-xl mb-4 text-white">Education</h3>
          <div className="flex items-start gap-3">
            <motion.span 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5, type: "spring", stiffness: 200 }}
              className="mt-2 size-2.5 rounded-full bg-indigo-400 flex-shrink-0"
            />
            <div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.6 }}
                className="font-semibold text-white text-base mb-1"
              >
                BS in Computer Engineering
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.7 }}
                className="text-neutral-300 text-sm leading-snug"
              >
                Sir Syed University of Engineering and Technology, Karachi
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
