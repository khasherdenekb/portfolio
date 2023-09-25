"use client";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import heroCard from "@/public/assets/hero-card-example.jpeg";
import blogCover from "@/public/assets/blogCover.png";
import Link from "next/link";

export default function ProjectSection() {
  const list = [
    {
      title: "Blog",
      img: blogCover.src,
      tech: "MERN STACK",
      link: "https://blogkx.vercel.app",
    },
    {
      title: "TEST2",
      img: heroCard.src,
      tech: "MERN STACK",
      link: "/",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
      link: "/",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
      link: "/",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
      link: "/",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
      link: "/",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:max-w-6xl mx-auto md:mt-40 mb-40 px-10 xl:px-0">
      {list.map((item, index) => (
        <Link target="_blank" href={item.link}>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none cursor-pointer h-52"
            key={index}
          >
            <Image
              isZoomed
              alt="Woman listing to music"
              className="object-cover h-full w-full"
              src={item.img}
            />

            <CardFooter className="justify-between border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 shadow-small ml-1 z-10 ">
              <div className="flex w-full justify-between items-center">
                <p className="text-tiny ">{item?.title}</p>
                <Button
                  className="text-tiny  bg-black/20"
                  variant="flat"
                  color="default"
                  radius="lg"
                  size="sm"
                >
                  MERN STACK
                </Button>
              </div>
            </CardFooter>
          </Card>
        </Link>
      ))}
    </section>
  );
}
