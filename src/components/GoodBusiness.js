"use client";
import Image from "next/image";

const skills = [
	{
		src: "/backend.jpg",
		alt: "Backend Development",
		title: "Backend Development",
		description:
			"Strong skills in building scalable and maintainable web applications using RESTful as well as GraphQL APIs.",
	},
	{
		src: "/devtools.jpg",
		alt: "Fluency With Dev Tools",
		title: "Fluency With Dev Tools",
		description:
			"Proficiency in Dev Tools such as VSCode, Git, CI/CD. These tools aid in tasks such as writing, debugging, testing, and deploying code.",
	},
	{
		src: "/frontend.jpg",
		alt: "Frontend Development",
		title: "Frontend Development",
		description:
			"Skilled in creating complex UI designs and implementing them in efficient, reusable code while adhering to best practices and standards.",
	},
	{
		src: "/database.jpg",
		alt: "Database Technologies",
		title: "Database Technologies",
		description:
			"Experience in designing and optimizing database schemas, writing complex queries, and implementing efficient indexing strategies.",
	},
];

export default function SkillsSection() {
	return (
		<section className="py-16 bg-white">
			<div className="container mx-auto px-4">
				<h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-12">
					I Know That Good Apps
					<br />
					Means Good Business
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{skills.map((skill, idx) => (
						<div
							key={idx}
							className="bg-white rounded-xl shadow-lg p-6 text-center transition-transform hover:scale-105"
						>
							<div className="relative w-full h-40 mb-4">
								<Image
									src={skill.src}
									alt={skill.alt}
									fill
									className="object-contain"
									sizes="(max-width: 768px) 100vw, 25vw"
								/>
							</div>
							<h3 className="text-lg font-bold mb-2">{skill.title}</h3>
							<p className="text-gray-600 text-sm">
								{skill.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
