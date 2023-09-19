"use client";
import AboutPage from "@/components/(About)/layout";
import HomePage from "@/components/(Home)/page";
import ProjectPage from "@/components/(Project)/layout";

export default function Home() {
  return (
    <section className="">
      <HomePage />
      <AboutPage />
      <ProjectPage />
    </section>
  );
}
