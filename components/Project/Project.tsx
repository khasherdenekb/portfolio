"use client";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import React from "react";

export default function ProjectSection() {
  const list = [
    {
      title: "TEST",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      tech: "MERN STACK",
    },
    {
      title: "TEST",
      img: "https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg",
      tech: "MERN STACK",
    },
  ];

  return (
    <div className="w-[88vw] gap-2 grid grid-cols-1 sm:grid-cols-3">
      {list.map((item, index) => (
        <Card
          shadow="sm"
          key={index}
          isPressable
          onPress={() => console.log("item pressed")}
        >
          <CardBody className="overflow-visible p-0">
            <Image
              isZoomed
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[30vh]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.tech}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
