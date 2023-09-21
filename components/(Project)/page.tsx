"use client";
import { Button, Card, CardFooter, Image } from "@nextui-org/react";
import heroCard from "@/public/assets/hero-card-example.jpeg";

export default function ProjectSection() {
  const list = [
    {
      title: "TEST1",
      img: heroCard.src,
      tech: "MERN STACK",
    },
    {
      title: "TEST2",
      img: heroCard.src,
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: heroCard.src,
      tech: "MERN STACK",
    },
  ];
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:max-w-6xl mx-auto md:mt-40 mb-40 px-10 xl:px-0">
      {list.map((item, index) => (
        <Card
          isFooterBlurred
          radius="lg"
          className="border-none cursor-pointer "
          key={index}
        >
          <Image
            isZoomed
            alt="Woman listing to music"
            className="object-cover h-full w-full"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
            <p className="text-tiny text-white/80">Available soon.</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
            >
              MERN STACK
            </Button>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
