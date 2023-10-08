import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kristImg from "@/public/Krist.png";
import nikeImg from "@/public/Nike.png";
import LuxoImportImg from "@/public/Luxo-Import.png";
import htmlImg from "@/public/skills/html5.png";
import cssImg from "@/public/skills/css.png";
import javascriptImg from "@/public/skills/javascript.png";
import typescriptImg from "@/public/skills/typescript.png";
import reactImg from "@/public/skills/react.png";
import nextImg from "@/public/skills/next.png";
import nodeImg from "@/public/skills/node.png";
import gitImg from "@/public/skills/git.png";
import tailwindImg from "@/public/skills/tailwind.png";
import sassImg from "@/public/skills/sass.png";
import materialUImg from "@/public/skills/mu5.png";
import mongoDBImg from "@/public/skills/mongoDB.png";
import reduxImg from "@/public/skills/redux.png";
import graphqlImg from "@/public/skills/graphql.png";
import expressImg from "@/public/skills/express.png";
import framerMotionImg from "@/public/skills/framermotion.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Krist",
    description:
      "I created this full responsive website incorporating a blog and a contact section working with EmailJs library. ",
    tags: ["React", "EmailJs"],
    githubUrl: "https://github.com/JorgeDaSilva72/react-voltaique",
    projectUrl: "https://hervekrist.netlify.app/",
    imageUrl: kristImg,
  },
  {
    title: "Nike",
    description:
      "A website developed for presentation purposes using React and Tailwind CSS.",
    tags: ["React", "Tailwind"],
    githubUrl: "https://github.com/JorgeDaSilva72/nike-landing-page",
    projectUrl:
      "https://nike-landing-page-89udso85g-jorgedasilva72.vercel.app/",
    imageUrl: nikeImg,
  },
  {
    title: "Luxo-Import",
    description: "A car sales showcase website.",
    tags: ["HTML", "CSS", "JAVASCRIPT"],
    githubUrl: "https://github.com/JorgeDaSilva72/Luxo-import-Miranda",
    projectUrl: "https://luxo-import-miranda.netlify.app/",
    imageUrl: LuxoImportImg,
  },
] as const;

export const skillsData = [
  {
    name: "Html",
    image: htmlImg,
  },
  {
    name: "Css",
    image: cssImg,
  },
  {
    name: "JavaScript",
    image: javascriptImg,
  },
  {
    name: "TypeScript",
    image: typescriptImg,
  },
  {
    name: "React",
    image: reactImg,
  },
  {
    name: "Next",
    image: nextImg,
  },
  {
    name: "Node.js",
    image: nodeImg,
  },
  {
    name: "Git",
    image: gitImg,
  },
  {
    name: "Tailwind",
    image: tailwindImg,
  },
  {
    name: "Sass",
    image: sassImg,
  },
  {
    name: "Material UI",
    image: materialUImg,
  },
  {
    name: "MongoDB",
    image: mongoDBImg,
  },
  {
    name: "Redux",
    image: reduxImg,
  },
  {
    name: "GraphQL",
    image: graphqlImg,
  },
  {
    name: "Express",
    image: expressImg,
  },
  {
    name: "Framer Motion",
    image: framerMotionImg,
  },
] as const;
