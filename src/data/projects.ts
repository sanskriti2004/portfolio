import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "AI Tone Editor",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "MistralAI", "Express"],
    image: {
      LIGHT: "/images/projects/aitone_1.jpg",
      DARK: "/images/projects/aitone_1.jpg",
    },
  },
  {
    index: 1,
    title: "BlockAid",
    href: "/projects",
    tags: ["Reactjs", "Tailwindcss", "Solidity", "Hardhat", "Vercel"],
    image: {
      LIGHT: "/images/projects/blockaid_1.jpg",
      DARK: "/images/projects/blockaid_1.jpg",
    },
  },
  {
    index: 2,
    title: "TourCraft",
    href: "/projects",
    tags: ["Reactjs", "Vite", "Tailwindcss", "Express", "JWT", "MongoDB"],
    image: {
      LIGHT: "/images/projects/tourcraft_1.jpg",
      DARK: "/images/projects/tourcraft_1.jpg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "AI Tone Editor",
    favicon: "/images/projects/logos/jsontree.ico",
    imageUrl: [
      "/images/projects/jsontreeLight.webp",
      "/images/projects/jsontreeDark.webp",
    ],
    description:
      "An interactive AI Tone Adjustment Tool where users can edit text and control its tone from formal to casual and concise to expanded using a 2D slider.",
    sourceCodeHref: "https://github.com/sanskriti2004/ai-tone-editor",
    liveWebsiteHref: "https://ai-tone-editor-client.vercel.app/",
  },
  {
    name: "BlockAid",
    favicon: "/images/projects/logos/kanban.ico",
    imageUrl: [
      "/images/projects/kanbanLight.webp",
      "/images/projects/kanbanDark.webp",
      "/images/projects/kanbanCardLight.webp",
    ],
    description:
      "BlockAid is a decentralized platform designed to automate and streamline disaster relief distribution using blockchain technology. It enables transparent, fast, and tamper-proof aid management, especially for rural and underserved communities.",
    sourceCodeHref: "https://github.com/sanskriti2004/blockaid_haccverse",
    liveWebsiteHref: "https://blockaid-nine.vercel.app/",
  },
  {
    name: "TourCraft",
    favicon: "/images/projects/logos/manygames.ico",
    imageUrl: [
      "/images/projects/manyGamesDark.webp",
      "/images/projects/manyGamesLight.webp",
      "/images/projects/manyGames2048.webp",
      "/images/projects/manyGamesPuzzle.webp",
      "/images/projects/manyGamesWordle.webp",
    ],
    description:
      "A full-stack product demo platform, this project demonstrates the my ability to design, develop and deploy a modern web application that enables users to create and share interactive product walkthroughs.",
    sourceCodeHref: "https://github.com/sanskriti2004/TourCraft",
    liveWebsiteHref: "https://tour-craft-frontend.vercel.app/",
  },
  {
    name: "My portfolio",
    favicon: "/favicon.ico",
    imageUrl: [
      "/images/projects/portfolioDark.webp",
      "/images/projects/portfolioLight.webp",
    ],
    description:
      "My personal portfolio website made using Nextjs, tailwindcss and framer motion.",
    sourceCodeHref: "https://github.com/sanskriti2004/portfolio",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "Resume Builder",
    favicon: "/images/projects/logos/resume-ready.png",
    imageUrl: [
      "/images/projects/covidTracker.webp",
      "/images/projects/covidTrackerMap.webp",
      "/images/projects/covidTrackerTable.webp",
    ],
    description:
      "Engineered with React functional components and Hooks to capture user input and render real-time updates on an A4-sized layout. Applied Tailwind CSS for consistent styling and responsive design, ensuring clean print-ready formatting for PDF exports.",
    sourceCodeHref: "https://github.com/sanskriti2004/resume-ready",
    liveWebsiteHref: "https://resume-ready-mu.vercel.app/",
  },
  {
    name: "Blockchain Simulator",
    favicon: "/images/projects/logos/stockpredictor.ico",
    imageUrl: [
      "/images/projects/stockPredictor.webp",
      "/images/projects/stockPredictorCandleChart.webp",
      "/images/projects/stockPredictorCompareChart.webp",
      "/images/projects/stockPredictorLineChart.webp",
    ],
    description:
      "A Rust-based blockchain simulator that mimics the mining process using SHA-256 hashing and proof-of-work (PoW). It features a simplified blockchain structure to demonstrate core concepts like cryptographic hashing, decentralized ledger updates, and transaction validation.",
    sourceCodeHref: "https://github.com/sanskriti2004/blockchain-simulator",
  },
];
