"use client";

import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";
import { useWindowSize } from "usehooks-ts";

export default function ProjectPage() {
  const { width } = useWindowSize();
  const list = [
    {
      title: "BLOG",
      img: "/assets/blogCover.png",
      link: "https://blogkx.vercel.app",
    },
    {
      title: "NIKE CLONE UI",
      img: "/assets/nikeCover.png",
      link: "https://nikekx.vercel.app",
    },
    {
      title: "PORTFOLIO",
      img: "/assets/portfolioCover.png",
      link: "/",
    },
  ];
  return (
    <section id="projects">
      <div className="grid w-screen max-w-6xl grid-cols-12 grid-rows-2 gap-4 px-10 py-40 xl:px-0">
        {list.map((item, index) => (
          <Card key={index} className="col-span-12 sm:col-span-4 h-fit">
            <Link target="_blank" href={item.link}>
              <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p className="font-bold uppercase text-tiny text-violet-700">
                  {item?.title}
                </p>
              </CardHeader>
              <Image
                isZoomed={width > 768 ? true : false}
                removeWrapper
                alt="Card background"
                className="z-0 object-cover w-full h-full"
                src={item.img}
              />
            </Link>
          </Card>
        ))}

        <Card
          isFooterBlurred
          className="w-full h-[200px] md:h-[300px] col-span-12 sm:col-span-5"
        >
          <Link target="_blank" href="https://hoollymernapp.web.app">
            <CardHeader className="absolute z-10 flex-col items-start top-1">
              <p className="font-bold uppercase text-tiny text-white/60">
                FOOD DELIVERY
              </p>
            </CardHeader>
            <Image
              removeWrapper
              isZoomed={width > 768 ? true : false}
              alt="foodCover image"
              className="z-0 object-fill w-full h-full"
              src="/assets/foodCover.png"
            />
            <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50">
              <div>
                <p className="text-tiny">Click and view.</p>
              </div>
              <Button className="text-tiny" radius="full" size="sm">
                MERN STACK
              </Button>
            </CardFooter>
          </Link>
        </Card>
        <Card
          isFooterBlurred
          className="w-full h-[250px] md:h-[300px]  col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 flex-col items-start top-1">
            <p className="font-bold uppercase text-tiny text-white/60">
              Netflix clone
            </p>
          </CardHeader>
          <Image
            isZoomed={width > 768 ? true : false}
            removeWrapper
            alt="netflix cover image"
            className="z-0 object-fill w-full h-full"
            src="/assets/netflixCover.jpg"
          />
          <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex items-center flex-grow gap-2">
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
    </section>
  );
}
