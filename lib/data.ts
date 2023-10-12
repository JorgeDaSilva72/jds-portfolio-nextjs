import React from "react";

import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import kristImg from "@/public/projects/Krist.png";
import nikeImg from "@/public/projects/Nike.png";
import LuxoImportImg from "@/public/projects/Luxo-Import.png";
import HidayaImg from "@/public/projects/Hidaya.png";
import Hidaya2Img from "@/public/projects/Hidaya2.png";
import GerichtImg from "@/public/projects/Gericht.png";
import HoobankImg from "@/public/projects/Hoobank.png";
import SpotifyImg from "@/public/projects/Spotify.png";
import YoutubeImg from "@/public/projects/Youtube.png";
import SharemeImg from "@/public/projects/Shareme.png";
import TiktikImg from "@/public/projects/Tiktik.png";
import BlogImg from "@/public/projects/Blog.png";
import StoreImg from "@/public/projects/Store.png";
import PortfolioImg from "@/public/projects/Portfolio.png";
import PortfolioNextImg from "@/public/projects/PortfolioNext.png";

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
  {
    title: "Hidaya",
    description: "A full stack food delivery application.",
    tags: ["REACT", "REDUX"],
    githubUrl: "https://github.com/JorgeDaSilva72/food-delivery-react",
    projectUrl: "https://hydaya.netlify.app/",
    imageUrl: HidayaImg,
  },
  {
    title: "Hidaya2",
    description: "A full stack food delivery application totally responsive.",
    tags: ["REACT", "REDUX", "FIREBASE", "FRAMER MOTION", "TAILWIND"],
    githubUrl: "https://github.com/JorgeDaSilva72/restaurant-react",
    projectUrl: "https://hydaya2.netlify.app/",
    imageUrl: Hidaya2Img,
  },
  {
    title: "Gericht",
    description: "A Fully Responsive Restaurant Website with Modern UI and UX.",
    tags: ["REACT"],
    githubUrl: "https://github.com/JorgeDaSilva72/gerish-restaurant",
    projectUrl: "https://jds-resto.netlify.app",
    imageUrl: GerichtImg,
  },
  {
    title: "Hoobank",
    description: "A modern UI/UX website totally responsive.",
    tags: ["REACT", "TAILWIND"],
    githubUrl: "https://github.com/JorgeDaSilva72/hoobank-react",
    projectUrl: "https://jds-bank.netlify.app/",
    imageUrl: HoobankImg,
  },
  {
    title: "Spotify Clone",
    description: "A Spotify Clone Music App. ",
    tags: ["REACT", "REDUX", "TAILWIND", "RapidAPI"],
    githubUrl: "https://github.com/JorgeDaSilva72/lyriks-react",
    projectUrl: "https://jds-spotify.netlify.app/",
    imageUrl: SpotifyImg,
  },
  {
    title: "Youtube Clone",
    description: "A Modern YouTube Clone. ",
    tags: ["REACT", "MAETRIAL UI", "RapidAPI"],
    githubUrl: "https://github.com/JorgeDaSilva72/youtube-clone-react",
    projectUrl: "https://jds-youtube.netlify.app/",
    imageUrl: YoutubeImg,
  },
  {
    title: "TikTok Clone",
    description: "A Full Stack Video-Sharing Social Media Website",
    tags: ["NEXTJS", "TYPESCRIPT", "TAILWIND", "ZUSTAND", "SANITY"],
    githubUrl:
      "https://github.com/JorgeDaSilva72/tiktik-nextjs-sanity-tailwind",
    projectUrl: "https://tiktik-nextjs-sanity-tailwind.vercel.app/",
    imageUrl: TiktikImg,
  },
  {
    title: "ShareME",
    description: "A Modern Full Stack Social Media App sharing images.",
    tags: ["REACT", "REDUX", "SANITY"],
    githubUrl: "https://github.com/JorgeDaSilva72/shareme",
    projectUrl: "https://jds-shareme.netlify.app/",
    imageUrl: SharemeImg,
  },
  {
    title: "Blog",
    description: "A Modern Blog App with React | GraphQL, NextJS, Tailwind CSS",
    tags: ["NEXTJS", "TAILWIND", "GRAPHQL", "HYGRAPH"],
    githubUrl: "https://github.com/JorgeDaSilva72/my_blog_cms_nextjs",
    projectUrl: "https://jds-my-blog.vercel.app/",
    imageUrl: BlogImg,
  },
  {
    title: "Store",
    description: "A Modern Full Stack ECommerce with Stripe.",
    tags: ["NEXTJS", "SANITY", "STRIPE"],
    githubUrl:
      "https://github.com/JorgeDaSilva72/ecommerce_sanity_stripe_nextjs",
    projectUrl: "https://jds-ecommerce.vercel.app/",
    imageUrl: StoreImg,
  },
  {
    title: "My Portfolio en React",
    description:
      "It's a full stack responsive portfolio website working with Sanity in Backend.",
    tags: ["REACT", "SASS", "SANITY"],
    githubUrl: "https://github.com/JorgeDaSilva72/jds-portfolio",
    projectUrl: "https://jds-portfolio.netlify.app",
    imageUrl: PortfolioImg,
  },
  {
    title: "My Portfolio en NextJS",
    description: "My Portfolio Website created with Next.js.",
    tags: ["NEXT", "TYPESCRIPT", "TAILWIND", "FRAMER MOTION"],
    githubUrl: "https://github.com/JorgeDaSilva72/jds-portfolio-nextjs",
    projectUrl: "https://jds-portfolio-nextjs.vercel.app/",
    imageUrl: PortfolioNextImg,
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
