"use client";
import AboutPage from "@/components/(About)/layout";
import HomePage from "@/components/(Home)/page";
import ProjectPage from "@/components/(Project)/layout";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start gap-4 py-8 md:py-10 min-h-screen">
      <HomePage />
      <AboutPage />
      <ProjectPage />
    </section>
  );
}
