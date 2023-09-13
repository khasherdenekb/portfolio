"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

import { link as linkStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import clsx from "clsx";

import { ThemeSwitch } from "@/components/theme-switch";
import { TwitterIcon, GithubIcon, LeetcodeIcon } from "@/components/icons";

import { Logo } from "@/components/icons";
import { Link as Link2 } from "react-scroll";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Link2
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={50}
            className="flex justify-start items-center gap-1 cursor-pointer"
            to="home"
          >
            <Logo />
            <p className="font-bold text-inherit">XASH</p>
          </Link2>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.to}>
              <Link2
                activeClass="active"
                spy={true}
                smooth={true}
                offset={0}
                duration={300}
                delay={50}
                to={item.to}
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
                )}
                color="foreground"
              >
                {item.label}
              </Link2>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden md:flex gap-2">
          <Link
            isExternal
            href={siteConfig.links.linkedin}
            aria-label="linkedin"
          >
            <TwitterIcon className="text-default-500" />
          </Link>
          <Link
            isExternal
            href={siteConfig.links.leetcode}
            aria-label="leetcode"
          >
            <LeetcodeIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} aria-label="Github">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <Link isExternal href={siteConfig.links.linktree}>
            <Button
              radius="full"
              className="bg-gradient-to-tr from-violet-500 to-blue-500 text-white shadow-lg"
            >
              LinkTree 🌳
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="md:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) =>
            item.external ? (
              <div key={`${item}-${index}`}>
                <Link isExternal href={item.href}>
                  Linktree 🌳
                </Link>
              </div>
            ) : (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link2
                  activeClass="active"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={200}
                  to={item.href}
                  className={clsx(
                    linkStyles({ color: "foreground" }),
                    "data-[active=true]:text-primary data-[active=true]:font-medium cursor-pointer"
                  )}
                  color="foreground"
                >
                  {item.label}
                </Link2>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
