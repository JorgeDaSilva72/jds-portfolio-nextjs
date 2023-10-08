import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kristImg from "@/public/Krist.png";
import nikeImg from "@/public/Nike.png";
import LuxoImportImg from "@/public/Luxo-Import.png";

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
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
