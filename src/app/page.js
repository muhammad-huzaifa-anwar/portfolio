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
    // Render null or a loader on server-side
    return null;
  }

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center space-y-24 px-4 py-12"

    >

      <section className="w-full max-w-5xl bg-gray-900 rounded-lg p-8 text-white">
        <Hero />
      </section>


      <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 text-white">
        <About />
      </section>

      <section className="w-full max-w-5xl bg-gray-800 rounded-lg p-8 text-white">
        <Experience />
      </section>

      <section className="w-full max-w-5xl bg-gray-900 rounded-lg p-8 text-white">
        <Projects />
      </section>


      <section className="w-full max-w-5xl bg-gray-900 rounded-lg p-8 text-white">
        <Skills />
      </section>


      <section className="w-full max-w-5xl">
        <GoodBusiness />
      </section>





    </div>
  );
}
