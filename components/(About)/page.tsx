"use client";
import { Card, CardBody, Image, Tabs, Tab } from "@nextui-org/react";
import { skills } from "@/config/data/skills";
import coding from "@/public/assets/coding.webp";

export default function AboutMe() {
  return (
    <div className="flex flex-col-reverse md:flex-row max-w-6xl gap-10 md:mt-40 mb-40">
      <div className="w-full flex flex-col justify-center items-center md:h-[400px] px-10 xl:px-0">
        <Image
          className="w-full h-full object-cover"
          alt="code photo"
          src={coding.src}
        />
      </div>
      <div className="flex  gap-10 flex-col w-full px-10 xl:px-0 h-96">
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
                      <li className=" font-medium" key={key}>
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
  );
}
