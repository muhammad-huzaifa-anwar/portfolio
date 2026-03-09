"use client";
import { motion } from "framer-motion";

const experiences = [
  {
    company: "INPL Innovative Private Limited",
    role: "Software Developer",
    period: "Dec 2025 – Present",
    bullets: [
      "Collaborated on full-stack ERP/HRM system development from scratch, covering payroll, attendance, leaves, POS (billing/inventory), and procurement/finance modules; ensured the solution was scalable, reusable, and multi-tenant ready.",
      "Engineered full-stack ERP/HRM system from scratch, covering payroll, attendance, leaves, POS (billing/inventory), and procurement/finance modules etc; designed to be scalable, reusable, and multi-tenant ready.",
      "Architected multi-tenant Postgres (Prisma) + Redis caching and implemented JIT onboarding/provisioning for automated tenant/user setup.",
      "Developed approval workflows, including request forwarding, notifications, email via Nodemailer; streamlined procurement flow RFQ → quotation → PO → GRN → landed-cost with real-time stock ledger.",
      "Oversaw production deployment on DigitalOcean (Ubuntu droplet) using Docker Compose, Nginx reverse proxy, Certbot SSL, healthchecks, and graceful shutdowns; enabled Swagger API documentation and activity/audit logging.",
      "Delivered ERP/HRM solutions for Speed Private Limited and other clients, ensuring reusability and multi-tenant scalability.",
      "Integrated with DriveSafe Project: SSO (JWT HS256) + HMAC server APIs; enforced RBAC permissions and access control.",
    ],
    tech: "Tech Stack: Next.js, NestJS, TypeScript, Fastify, Prisma, PostgreSQL, Bull, Redis, Docker, Nginx, Certbot, Swagger, Nodemailer",
  },
  {
    company: "Codeswifters",
    role: "MERN Stack Developer",
    period: "Sep 2025 – Nov 2025",
    bullets: [
      "Contributed to full-stack development for international clients: Weight Guide App, Jewellery Auction Platform, and Vision Tech; built responsive frontends using React and Next.js, integrating APIs with Node.js, NestJS & Express.",
      "Enhanced backend capabilities with NestJS APIs, Redis caching, Bull queues, cron jobs for scheduled/background tasks, and implemented Stripe test payments for e-commerce workflows.",
      "Integrated third-party tools like Tawk.io (live chat) and Miro (collaboration/diagramming) into client projects.",
      "Handled server-side rendering (SSR) with Next.js, containerized applications via Docker, and deployed projects on AWS.",
      "Optimized performance, reusability, and maintainability across frontend and backend components.",
    ],
    tech: "Tech Stack: MERN (MongoDB, Express, React, Node.js), NestJS, Next.js, Docker, AWS, Redis, Bull, Cron, Stripe, Tawk.io, Miro",
  },
  {
    company: "TA Creative",
    role: "Junior MERN Stack Intern",
    period: "June 2025 – Aug 2025",
    bullets: [
      "Assisted in mern stack development of interactive web applications, implementing responsive frontends with React and integrating REST APIs using Node.js & Express.",
      "Gained hands-on experience with CRUD operations, backend API consumption, and state management.",
      "Collaborated with team members to debug, optimize, and enhance frontend components for performance and usability.",
      "Participated in version control workflows and team sprints, contributing to feature delivery and testing.",
      "Developed foundational skills in REST API integration, frontend architecture, and React component design.",
    ],
    tech: "Tech Stack: MERN (MongoDB, Express, React, Node.js), REST APIs, Git",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 w-full py-16 bg-gray-900 text-white"
    >
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl sm:text-5xl font-bold text-center text-white mb-6"
      >
        Experience
      </motion.h2>

      <div className="mt-6 grid md:grid-cols-2 gap-6 w-full">
        {experiences.map((exp, idx) => (
          <motion.div
            key={`${exp.company}-${idx}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-gray-800 rounded-lg border border-white/10 p-6"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="text-lg font-semibold">
                  {exp.role} – {exp.company}
                </div>
              </div>
              <div className="text-sm text-neutral-300">{exp.period}</div>
            </div>
            <ul className="mt-4 space-y-2 list-disc pl-5 text-sm text-neutral-200">
              {exp.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
            <div className="mt-4 text-xs text-neutral-300">{exp.tech}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
