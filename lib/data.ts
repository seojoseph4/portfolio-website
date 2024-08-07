import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

import bonbonImg from "@/public/Bonbon.png";
import leapImg from "@/public/Leap.png";
import growerImg from "@/public/Grower.png";
import stealthImg from "@/public/stealthImg.jpg";


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
    name: "Contact",
    hash: "#contact",
  },
] as const;


export const projectsData = [
  {
    title: "VIP GROWER Project",
    description:
      "Managed existing power outage datasets including cleaning, merging with other datasets, and standardizing for further analysis using the Pandas Library.",
    tags: ["Python", "Google Collabs", "Pandas", "Matplot"],
    imageUrl: growerImg,
  },
  {
    title: "'Titan Attack' a LEAP mod",
    description:
      "Produced a mod for the game “Leap” by Blue Isle Studio using their mod editor engine with the Unreal Engine framework.",
    tags: ["Unreal Engine", "C++"],
    imageUrl: leapImg,
  },
  {
    title: "Bonbon",
    description:
      "Collaborated in developing game mechanics with other developers in club using the Unity game engine and utilized Github for version control.",
    tags: ["Unity","C#","Git/Github"],
    imageUrl: bonbonImg,
  },
  {
    title: "Stealth Start-Up",
    description:
      "Developed a prototype for startup software while specializing in front-end development, leveraging React-Native to design and implement dynamic and responsive user interfaces for mobile app",
    tags: ["React-Native","Node.js","MangoDB"],
    imageUrl: stealthImg,
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
  "MongoDB",
  "Python",
  "Django",
  "Framer Motion",
  "Pandas",
  "React-Native"
] as const;