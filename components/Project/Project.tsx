"use client";
import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import { github_projects } from "@/config/data/github_projects";

export default function ProjectSection() {
  return (
    <div className="w-[88vw] gap-2 grid grid-cols-12 grid-rows-2 px-8">
      {github_projects.map((project) => (
        <Card
          isFooterBlurred
          className="col-span-12 sm:col-span-4 h-[40vh] cursor-pointer"
        >
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <h4 className="  font-medium text-large">{project.name}</h4>
          </CardHeader>
          <Image
            isZoomed
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-contain"
            src={project.image.src}
          />
          <CardFooter className="absolute  bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100 justify-between">
            <div>
              <p className=" text-tiny">Github link </p>
            </div>
            <Button
              className="text-tiny"
              color="primary"
              radius="full"
              size="sm"
            >
              Visit project
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
