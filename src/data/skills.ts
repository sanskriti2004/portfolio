import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      { name: "Javascript", icon: "/icons/javascript.svg" },
      { name: "Typescript", icon: "/icons/typescript.svg" },
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Go", icon: "/icons/go.svg" },
      { name: "Java", icon: "/icons/java.svg" },
      { name: "Rust", icon: "/icons/rust.svg" },
    ],
  },
  {
    sectionName: "Frontend",
    skills: [
      { name: "HTML", icon: "/icons/html.svg" },
      { name: "CSS", icon: "/icons/css.svg" },
      { name: "Reactjs", icon: "/icons/reactjs.svg" },
      { name: "Nextjs", icon: "/icons/next.svg" },
      { name: "Redux", icon: "/icons/redux.svg" },
      { name: "Tailwindcss", icon: "/icons/tailwindcss.svg" },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      { name: "Nodejs", icon: "/icons/nodejs.svg" },
      { name: "Express", icon: "/icons/express.svg" },
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
      { name: "Kubernetes", icon: "/icons/kubernetes.svg" },
      { name: "AWS", icon: "/icons/aws.svg" },
      { name: "Postman", icon: "/icons/postman.svg" },
    ],
  },
];
