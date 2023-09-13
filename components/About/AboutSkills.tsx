"use client";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Chip,
} from "@nextui-org/react";
import { skills } from "@/config/data/skills";

export default function AboutSkills() {
  return (
    <section className="flex w-[80vw] gap-5 flex-col md:flex-row">
      {skills.map((el) => (
        <Card className="min-w-[22vw] min-h-[15vh] h-full">
          <CardHeader className="flex gap-3">
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src={el.image.src}
              width={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <p className="text-md">{el?.title}</p>
              <p className="text-small text-default-500">@khasherdeneswe</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{el.description}</p>
          </CardBody>
          <Divider />
          <CardFooter className="flex flex-wrap gap-2">
            {el.skills.map((skill) => (
              <Chip>{skill}</Chip>
            ))}
          </CardFooter>
        </Card>
      ))}
    </section>
  );
}
