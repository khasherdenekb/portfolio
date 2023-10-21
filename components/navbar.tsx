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

import { siteConfig } from "../config/site";
import clsx from "clsx";

import { ThemeSwitch } from "../components/theme-switch";
import { TwitterIcon, GithubIcon, LeetcodeIcon } from "../components/icons";

import { Logo } from "../components/icons";
import { Link as ReactLink } from "react-scroll";

export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <ReactLink
            activeClass="active"
            spy={true}
            smooth={true}
            offset={0}
            duration={300}
            delay={50}
            className="flex items-center justify-start gap-1 cursor-pointer"
            to="home"
          >
            <Logo />
            <p className="font-bold text-inherit">XASH</p>
          </ReactLink>
        </NavbarBrand>
        <ul className="justify-start hidden gap-4 ml-2 md:flex">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.to}>
              <ReactLink
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
              </ReactLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden gap-2 md:flex">
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
              className="text-white shadow-lg bg-gradient-to-tr from-violet-500 to-blue-500"
            >
              LinkTree 🌳
            </Button>
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="pl-4 md:hidden basis-1" justify="end">
        <Link isExternal href={siteConfig.links.github} aria-label="Github">
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex flex-col gap-2 mx-4 mt-2">
          {siteConfig.navMenuItems.map((item, index) =>
            item.external ? (
              <div key={`${item}-${index}`}>
                <Link isExternal href={item.href}>
                  Linktree 🌳
                </Link>
              </div>
            ) : (
              <NavbarMenuItem key={`${item}-${index}`}>
                <ReactLink
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
                </ReactLink>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
