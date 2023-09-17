"use client";
import NextLink from "next/link";
import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import { Image } from "@nextui-org/react";
import typing from "../public/assets/aesthetic-typing.gif";
import AboutPage from "@/components/About/AboutMain";
import Project from "@/components/Project/ProjectMain";

export default function Home() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 h-[100vh] lg:h-[90vh]">
        <div className="inline-block max-w-lg text-center justify-center">
          <h1 className={title({ class: "text-[30px] lg:text-[40px]" })}>
            Hi 👋🏻 I'm{" "}
          </h1>
          <h1 className={title({ color: "cyan" })}>Khash-Erdene</h1>
          <br />
          <h1 className={title()}>sotware engineer</h1>
          <h2 className={subtitle({ class: "mt-2 md:mt-4" })}>
            Fullstack | Web | Mobile
          </h2>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            as={NextLink}
            href={siteConfig.links.mail}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            khasherdeneswe@gmail.com
          </Link>
          <Link
            isExternal
            as={NextLink}
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideSymbol hideCopyButton variant="flat">
            <Image
              width={300}
              height={200}
              alt="NextUI hero Image with delay"
              src={typing.src}
            />
          </Snippet>
        </div>
      </section>
      <section
        id="about"
        className={` flex flex-col items-center justify-center gap-4 py-20 md:py-10 h-[150vh] sm:h-[110vh]`}
      >
        <AboutPage />
      </section>
      <section
        className={`flex flex-col items-center justify-center gap-4 py-20 md:py-10  sm:h-[140vh] md:h-[110vh] lg:h-[82vh]`}
        id="projects"
      >
        <Project />
      </section>
    </>
  );
}
