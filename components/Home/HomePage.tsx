"use client";
import Image from "next/image";

const HomePage = () => {
  return (
    <section className="flex flex-col max-w-6xl gap-10 py-10 md:py-40 md:flex-row">
      <div className="w-full px-10 text-center md:text-left xl:px-0">
        <h1 className="py-2 text-3xl font-bold md:text-4xl lg:text-5xl">
          Hi there, 👋🏻 I'm
        </h1>
        <h1 className="py-2 text-4xl font-medium text-gradient_blue-purple md:text-4xl lg:text-5xl ">
          Khash-Erdene
        </h1>
        <h1 className="py-2 text-2xl md:text-2xl ">
          Software Engineer based in Ulaanbaatar, Mongolia
        </h1>
        <h2 className="py-4 text-lg text-gray-400 md:text-lg">
          I am a fullstack web and mobile software developer and engineer, also
          working on some software development projects. Day by day, I'm
          learning and improving myself. I'm passionate about software
          development and technologies. I'm looking forward to getting to work
          on new exciting and challenging projects.
        </h2>
      </div>
      <div className="relative flex flex-col items-center justify-center w-full px-10 h-72 md:h-96 xl:px-0">
        <Image
          className="object-cover w-full h-full px-10"
          alt="coding room"
          src="/assets/coding-room.jpeg"
          layout="fill"
        />
      </div>
    </section>
  );
};

export default HomePage;
