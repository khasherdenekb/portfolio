"use client";
import AboutPage from "../components/About/AboutPage";
import HomePage from "../components/Home/HomePage";
import ProjectPage from "../components/Project/page";
import StatPage from "../components/Stats/StatPage";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start gap-4 py-8 md:py-10 min-h-screen">
      <HomePage />
      <AboutPage />
      <ProjectPage />
      <StatPage />
    </section>
  );
}
