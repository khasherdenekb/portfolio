"use client";
import { Image } from "@nextui-org/react";
import React from "react";
import code from "@/public/assets/code.webp";

const HomePage = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 justify-center md:h-[100vh] h-[130vh] items-center max-w-7xl mx-auto px-6 md:px-12">
      <div className="w-full h-[40vh] md:h-auto">
        <Image
          className="w-full h-full object-contain"
          alt="code photo"
          src={code.src}
        />
      </div>
      <div className="w-full max-w-lg text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Hi there, 👋🏻 I'm
        </h1>
        <h1 className="text-gradient_blue-purple text-4xl md:text-5xl font-extrabold mb-4">
          Khash-Erdene
        </h1>
        <h1 className="text-2xl md:text-3xl mb-4">
          a Software Engineer based in Ulaanbaatar, Mongolia
        </h1>
        <h2 className="text-lg md:text-xl mt-4">
          I am a fullstack web and mobile software developer and engineer, also
          working on some software development projects. Day by day, I'm
          learning and improving myself. I'm passionate about software
          development and technologies. I'm looking forward to getting to work
          on new exciting and challenging projects.
        </h2>
      </div>
    </section>
  );
};

export default HomePage;
