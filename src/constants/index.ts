// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  github,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Work",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "source-code",
    title: "Source Code",
    link: "https://github.com/sanyamsaurav/portfolio-new",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "UI/UX Enthusiast",
    icon: backend,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Frontend Technology",
    company_name: "Codec Technology",
    icon: reactjs,
    iconBg: "#383E56",
    date: "30/06/2025 - 31/07/2025",
    points: [
      "Developing frontend UI components and ensuring optimal user experience.",
      "Collaborating with backend developers to integrate APIs into the application.",
      "Implementing responsive web design using modern CSS frameworks and libraries.",
    ],
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Sanyam proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: user1,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Sanyam does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: user2,
  },
  {
    testimonial:
      "After Sanyam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: user3,
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "AI Recipe Platform",
    description:
      "An intelligent platform that helps users discover and create recipes powered by AI, featuring a modern, responsive UI and intuitive interactions.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/sanyamsaurav/Ai-Recipe-Plateform.git",
    live_site_link: "https://ai-recipe-plateform-bysanyam-efed.vercel.app/",
  },
  {
    name: "Zerodha Clone",
    description:
      "A comprehensive trading dashboard clone featuring real-time charts, portfolio tracking, and a sleek financial UI reminiscent of popular brokage platforms.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tradingview",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/sanyamsaurav/zerodha-clone.git",
    live_site_link: "https://zerodha-clone-sanyam.vercel.app/",
  },
  {
    name: "Sony Headphones",
    description:
      "A stunning, interactive product landing page showcasing Sony headphones with dynamic animations, 3D elements, and smooth scrolling experiences.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer-motion",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/sanyamsaurav/sony-headphone.git",
    live_site_link: "https://sony-headphones-delta.vercel.app/",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/sanyam-saurav-a265362ba",
  },

  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/sanyamsaurav",
  },
] as const;
