"use client";
import React from "react";
import { Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";
import { skills } from "@/config/data/skills";
import library from "@/public/assets/library.webp";

export default function AboutMe() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 justify-center md:h-[100vh] h-[130vh] items-center max-w-7xl mx-auto px-6 md:px-12">
      <div className="w-full max-w-lg h-[50%]">
        <Tabs
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
                    return (
                      <li className="md:text-xl" key={key}>
                        {el}
                      </li>
                    );
                  })}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
      </div>
      <div className="w-full md:h-auto order-first md:order-last">
        <Image
          className="w-full h-full object-contain"
          alt="NextUI hero Image"
          src={library.src}
        />
      </div>
    </section>
  );
}
