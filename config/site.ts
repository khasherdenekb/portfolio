export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Khash-Erdene 'B",
  description: "Software engineer & developer | fullstack | web | mobile",
  image: "",
  navItems: [
    {
      label: "Home",
      to: "home",
    },
    {
      label: "About",
      to: "about",
    },
    {
      label: "Projects",
      to: "projects",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "home",
    },
    {
      label: "About",
      href: "about",
    },
    {
      label: "Projects",
      href: "projects",
    },
    {
      label: "LinkTree 🌳",
      href: "https://linktr.ee/khasherdene",
      external: true,
    },
  ],
  links: {
    github: "https://github.com/khasherdeneswe",
    linkedin: "https://www.linkedin.com/in/khasherdeneswe",
    leetcode: "https://leetcode.com/khasherdenexash",
    mail: "mailto:khasherdeneswe@gmail.com",
    linktree: "https://linktr.ee/khasherdene",
  },
};
