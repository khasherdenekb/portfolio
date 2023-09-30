"use client";

import blogCover from "@/public/assets/blogCover.png";
import nikeCover from "@/public/assets/nikeCover.png";
import porfolioCover from "@/public/assets/portfolioCover.png";
import foodCover from "@/public/assets/foodCover.png";
import netflixCover from "@/public/assets/netflixCover.jpg";

import React from "react";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function page() {
  const list = [
    {
      title: "BLOG",
      img: blogCover.src,
      link: "https://blogkx.vercel.app",
    },
    {
      title: "NIKE CLONE UI",
      img: nikeCover.src,
      link: "https://nikekx.vercel.app",
    },
    {
      title: "PORTFOLIO",
      img: porfolioCover.src,
      link: "/",
    },
  ];
  return (
    <div className="max-w-6xl w-screen gap-4 grid grid-cols-12 grid-rows-2 mt-40 md:mt-40 mb-40 px-10 xl:px-0">
      {list.map((item, index) => (
        <Card key={index} className="col-span-12 sm:col-span-4 h-fit">
          <Link target="_blank" href={item.link}>
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
              <p className="text-tiny text-violet-700 uppercase font-bold">
                {item?.title}
              </p>
            </CardHeader>
            <Image
              isZoomed
              removeWrapper
              alt="Card background"
              className="z-0 w-full h-full object-cover"
              src={item.img}
            />
          </Link>
        </Card>
      ))}

      <Card
        isFooterBlurred
        className="w-full h-[200px] lg:h-[300px] col-span-12 sm:col-span-5"
      >
        <Link target="_blank" href="https://hoollymernapp.web.app">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              FOOD DELIVERY
            </p>
          </CardHeader>
          <Image
            removeWrapper
            isZoomed
            alt="Card example background"
            className="z-0 object-fill h-full"
            src={foodCover.src}
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Click and view.</p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              MERN STACK
            </Button>
          </CardFooter>
        </Link>
      </Card>
      <Card
        isFooterBlurred
        className="w-full h-[200px] lg:h-[300px] col-span-12 sm:col-span-7"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          <p className="text-tiny text-white/60 uppercase font-bold">
            Netflix clone
          </p>
        </CardHeader>
        <Image
          isZoomed
          removeWrapper
          alt="Relaxing app background"
          className="z-0 w-full h-full object-fill"
          src={netflixCover.src}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">Non deploy</p>
            </div>
          </div>
          <Button radius="full" size="sm">
            MERN STACK
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
