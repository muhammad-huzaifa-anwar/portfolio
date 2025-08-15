"use client";

import { useEffect, useState } from 'react';
import { Hero, About, Skills, Projects, Experience } from '../components';
import GoodBusiness from '../components/GoodBusiness';

export default function Home() {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return null; // Render nothing until hydration is complete
  }

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-gray-900 p-8 text-white z-10">
        <Hero />
      </section>

      {/* About Section */}
      <section className="w-full bg-gray-800  p-8 text-white z-10">
        <About />
      </section>

      {/* Experience Section */}
      <section className="w-full bg-gray-800  p-8 text-white z-10">
        <Experience />
      </section>

      {/* Projects Section */}
      <section className="w-full bg-gray-900  p-8 text-white z-10">
        <Projects />
      </section>

      {/* Skills Section */}
      <section className="w-full bg-gray-900  p-8 text-white z-10">
        <Skills />
      </section>

      {/* GoodBusiness Section */}
      <section className="w-full z-10">
        <GoodBusiness />
      </section>
    </>
  );
}
