"use client";
import { Card, CardBody, Tabs, Tab, Image } from "@nextui-org/react";
import { skills } from "../../config/data/skills";

export default function AboutPage() {
  return (
    <section id="about">
      <div className="flex flex-col-reverse max-w-6xl gap-20 py-40 md:flex-row lg:gap-10">
        <div className="flex flex-col items-center justify-center w-full px-10 h-72 md:h-96 xl:px-0">
          <Image
            className="object-cover w-auto h-auto"
            alt="code photo"
            src="/assets/coding.webp"
          />
        </div>
        <div className="flex flex-col w-full gap-10 px-10 xl:px-0 h-96">
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
                        <li className="font-medium " key={key}>
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
      </div>
    </section>
  );
}
