"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";
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
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:max-w-7xl mx-auto px-[5vw] ">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
          className="w-[90vw] md:w-full"
        >
          <CardBody className="overflow-visible p-0 relative">
            <div className="aspect-w-16 aspect-h-9">
              <Image
                isZoomed
                shadow="sm"
                radius="lg"
                alt={item.title}
                className="object-cover"
                src={item.img}
              />
            </div>
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.tech}</p>
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
