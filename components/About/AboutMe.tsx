"use client";
import React from "react";
import { Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";
import { skills } from "@/config/data/skills";

export default function AboutMe() {
  return (
    <section className="flex justify-between h-[100vh] items-center gap-[4vw]">
      <div className=" w-[46vw] h-[75vh]">
        <Image
          className="h-[64vh] w-full object-contain"
          alt="NextUI hero Image"
          src="https://static.vecteezy.com/system/resources/previews/019/153/003/original/3d-minimal-programming-icon-coding-screen-web-development-concept-laptop-with-a-coding-screen-and-a-coding-icon-3d-illustration-png.png"
        />
      </div>
      <div className="w-[46vw] h-[80vh] flex flex-col gap-5">
        <Card>
          <CardBody>
            <h3 className=" font-bold text-[38px] ">ABOUT ME</h3>I am fullstack
            software developer and engineer also working on some software
            development projects. Day by day learning and improving myself. I’m
            passionate about software development and technologies. I’m looking
            forward to getting to work on new exciting and challenging projects.
          </CardBody>
        </Card>

        <Tabs
          className="mb-2"
          key="underlined"
          variant="underlined"
          aria-label="Tabs variants"
          items={skills}
        >
          {(item) => (
            <Tab key={item.title} title={item.title}>
              <Card>
                <CardBody>
                  {item.value.map((el, key) => {
                    return <li key={key}>{el}</li>;
                  })}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
    </section>
  );
}
