import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "Javascript", icon: "/icons/javascript.svg" },
      { name: "Typescript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Go", icon: "/icons/go.png" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "Rust", icon: "/icons/rust.png" },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Reactjs", icon: "/icons/reactjs.svg" },
      { name: "Nextjs", icon: "/icons/nextjs.svg" }, // You need to add this SVG/PNG to /public/icons/
      { name: "Redux", icon: "/icons/redux.svg" },
      { name: "Tailwindcss", icon: "/icons/tailwindcss.svg" },
      { name: "Framer motion", icon: "/icons/fram.svg" }, // Ensure this file exists
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Nodejs", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" }, // Add this manually if it doesn't exist
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      { name: "MongoDB", icon: "/icons/mongodb.svg" },
      { name: "Postgress", icon: "/icons/postgresql.svg" },
      { name: "Prisma", icon: "/icons/prisma.svg" },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      { name: "Git", icon: "/icons/git.svg" },
      { name: "Docker", icon: "/icons/docker.svg" },
      { name: "Kubernetes", icon: "/icons/kubernetes.svg" }, // Add icon if not available
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
    ],
  },
];
