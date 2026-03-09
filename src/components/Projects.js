"use client";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRouter } from "next/navigation";

const projects = [
	{
		slug: "fullstack-ecommerce-firebase",
		title: "Fullstack E-commerce using Firebase",
		description:
			"Complete e-commerce application built with React and Firebase for authentication, database, and hosting.",
		image: "/fullstackfirebaseECO.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/fullstack-Ecommerce-using-firebase",
		demo: "https://fullstack-ecommerce-using-firebase.vercel.app/",
		tech: [
			"React",
			"Firebase",
			"Authentication",
			"Database",
			"E-commerce",
		],
	},
	{
		slug: "reactjs-blog-app",
		title: "React.js Blog App",
		description:
			"Blog application built with React.js featuring user authentication and content management.",
		image: "/blogapppic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/Reactjs-blog-app",
		demo: "https://reactjs-blog-app-nine.vercel.app/",
		tech: ["React", "JavaScript", "Blog", "Authentication"],
	},
	{
		slug: "react-pokemon",
		title: "React Pokemon App",
		description:
			"Pokemon application built with React, featuring Pokemon data and interactive features.",
		image: "/pokemonpic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/React-Pokemon",
		demo: "https://react-pokemon-six-psi.vercel.app/",
		tech: ["React", "JavaScript", "Pokemon API", "UI/UX"],
	},
	{
		slug: "fullstack-course-selling-app",
		title: "Full-stack Course Selling App",
		description:
			"Complete course selling platform with payment integration and course management.",
		image: "/Full-stackCourseSellingApppic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/Full-stack-Course-selling-App",
		demo: "https://github.com/muhammad-huzaifa-anwar/Full-stack-Course-selling-App",
		tech: [
			"Full-stack",
			"Course Management",
			"Payment Integration",
			"User Management",
		],
	},
	{
		slug: "figma-design-nextjs",
		title: "Figma Design to Next.js",
		description:
			"Converting Figma designs to functional Next.js components with pixel-perfect implementation.",
		image: "/FigmaDesigntoNext.jspic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/figma-design-nextjs",
		demo: "https://github.com/muhammad-huzaifa-anwar/figma-design-nextjs",
		tech: ["Next.js", "Figma", "Design Implementation", "UI/UX"],
	},
	{
		slug: "nextjs-movie-website",
		title: "Next.js Movie Website",
		description:
			"Full-stack movie website built with Next.js featuring movie listings and user interactions.",
		image: "/nextjsmoviepic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/nextjs-basic-fullstack-movie-website",
		demo: "https://github.com/muhammad-huzaifa-anwar/nextjs-basic-fullstack-movie-website",
		tech: ["Next.js", "Full-stack", "Movie API", "Database"],
	},
	{
		slug: "event-management-nextjs",
		title: "Event Management Next.js",
		description:
			"Event management system built with Next.js for organizing and managing events.",
		image: "/eventapppic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/event-management-nextjs",
		demo: "https://github.com/muhammad-huzaifa-anwar/event-management-nextjs",
		tech: ["Next.js", "Event Management", "Database", "User Management"],
	},
	{
		slug: "react-todo-app",
		title: "React Todo App",
		description:
			"Todo application built with React using useState, useContext, and useReducer hooks.",
		image: "/reacttodopic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/React-Todo-App",
		demo: "https://github.com/muhammad-huzaifa-anwar/React-Todo-App",
		tech: ["React", "JavaScript", "useState", "useContext", "useReducer"],
	},
	{
		slug: "saltnpepper-restaurant",
		title: "Salt n Pepper Restaurant",
		description:
			"Fully responsive restaurant website built with HTML and CSS.",
		image: "/saltpepperpic.PNG",
		github: "https://github.com/muhammad-huzaifa-anwar/saltnpepper-restaurant-website",
		demo: "https://github.com/muhammad-huzaifa-anwar/saltnpepper-restaurant-website",
		tech: ["HTML", "CSS", "Responsive Design"],
	},
];

const ProjectCard = ({ p, onClick }) => {
	const rx = useMotionValue(0);
	const ry = useMotionValue(0);
	const sx = useSpring(rx, { stiffness: 200, damping: 20 });
	const sy = useSpring(ry, { stiffness: 200, damping: 20 });
	const onMove = (e) => {
		const rect = e.currentTarget.getBoundingClientRect();
		const x = e.clientX - rect.left;
		const y = e.clientY - rect.top;
		const dx = x / rect.width - 0.5;
		const dy = y / rect.height - 0.5;
		rx.set(dy * -10);
		ry.set(dx * 10);
	};
	const onLeave = () => {
		rx.set(0);
		ry.set(0);
	};
	return (
		<motion.div
			key={p.slug}
			initial={{ x: -100, opacity: 0 }}
			whileHover={{
				scale: 1.03,
				boxShadow: "0 4px 16px rgba(0,0,0,0.10)",
			}}
			whileTap={{ scale: 0.97 }}
			whileInView={{ x: 0, opacity: 1 }}
			viewport={{ once: true, amount: 0.5 }}
			transition={{ duration: 0.6, type: "spring", stiffness: 140 }}
			className={
				"group rounded-2xl overflow-hidden cursor-pointer shadow-md " +
				"bg-neutral-900 hover:shadow-xl w-full relative ring-1 ring-white/10 hover:ring-indigo-400/40"
			}
			onClick={onClick}
			style={{ minHeight: "320px" }}
			onMouseMove={onMove}
			onMouseLeave={onLeave}
		>
			<motion.div
				className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
				style={{
					background:
						"radial-gradient(700px 200px at 50% 0%, rgba(99,102,241,0.10), rgba(99,102,241,0))",
					filter: "blur(24px)",
				}}
			/>
			<motion.div style={{ rotateX: sx, rotateY: sy }} className="relative z-10">
				<div className="relative h-36 md:h-40 bg-neutral-800">
					<Image src={p.image} alt={p.title} fill className="object-cover" priority={false} />
					<motion.div
						initial={{ y: "100%" }}
						whileHover={{ y: 0 }}
						transition={{ type: "spring", stiffness: 200, damping: 24 }}
						className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
					/>
				</div>
				<div className="p-4 space-y-2">
					<motion.div
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="font-semibold text-base text-center text-white"
					>
						{p.title}
					</motion.div>
					<motion.p
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.05, duration: 0.4 }}
						className="text-sm text-neutral-300 text-center"
					>
						{p.description}
					</motion.p>
					<motion.div
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true }}
						variants={{
							hidden: { opacity: 0 },
							visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
						}}
						className="flex flex-wrap gap-2 pt-2 justify-center"
					>
						{p.tech.map((tech) => (
							<motion.span
								key={tech}
								variants={{ hidden: { y: 6, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
								className="px-2.5 py-0.5 text-[11px] bg-neutral-800 rounded-full text-neutral-200 border border-white/10"
							>
								{tech}
							</motion.span>
						))}
					</motion.div>
					<div className="flex gap-3 text-xs pt-3 justify-center">
						<a
							href={p.demo}
							onClick={(e) => e.stopPropagation()}
							className="px-3 py-1 rounded-full bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition-all duration-200 text-xs"
							target="_blank"
							rel="noopener noreferrer"
						>
							Live
						</a>
						<a
							href={p.github}
							onClick={(e) => e.stopPropagation()}
							className="px-3 py-1 rounded-full bg-neutral-700 text-white font-semibold shadow hover:bg-neutral-800 transition-all duration-200 text-xs"
							target="_blank"
							rel="noopener noreferrer"
						>
							Code
						</a>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

export default function Projects() {
	const router = useRouter();

	const handleProjectClick = (project) => {
		if (project.demo && project.demo !== project.github) {
			window.open(project.demo, "_blank");
		} else {
			window.open(project.github, "_blank");
		}
	};

	return (
		<section
			id="projects"
			className="w-full py-16 bg-gray-900 text-white"
		>
			<h2 className="text-4xl sm:text-5xl font-bold text-center text-white mb-6">
				MY personal projects
			</h2>
			<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((p) => (
					<ProjectCard
						key={p.slug}
						p={p}
						onClick={() => handleProjectClick(p)}
					/>
				))}
			</div>
		</section>
	);
}
