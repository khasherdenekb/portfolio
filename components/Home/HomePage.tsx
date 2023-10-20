"use client";
import { Image } from "@nextui-org/react";

const HomePage = () => {
  return (
    <section className="flex flex-col md:flex-row max-w-6xl gap-10 md:mt-40 mb-40">
      <div className="w-full text-center md:text-left px-10 xl:px-0">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Hi there, 👋🏻 I'm
        </h1>
        <h1 className="text-gradient_blue-purple text-4xl md:text-4xl lg:text-5xl font-medium mb-4 ">
          Khash-Erdene
        </h1>
        <h1 className="text-2xl md:text-2xl mb-4 ">
          Software Engineer based in Ulaanbaatar, Mongolia
        </h1>
        <h2 className="text-lg md:text-lg mt-4 text-gray-400">
          I am a fullstack web and mobile software developer and engineer, also
          working on some software development projects. Day by day, I'm
          learning and improving myself. I'm passionate about software
          development and technologies. I'm looking forward to getting to work
          on new exciting and challenging projects.
        </h2>
      </div>
      <div className="w-full flex flex-col justify-center items-center md:h-96 px-10 xl:px-0">
        <Image
          className="w-full object-cover"
          alt="code photo"
          src="/assets/coding-room.jpeg"
        />
      </div>
    </section>
  );
};

export default HomePage;
