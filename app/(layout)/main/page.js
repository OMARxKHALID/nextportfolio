"use client";

import Main from "./Main";
import InstagramClonePreview from "@/images/projects/InstagramClonePreview.png";
import PizzaWebAppPreview from "@/public/images/projects/PizzaWebAppPreview.png";
import ThreadsClonePreview from "@/public/images/projects/ThreadsClonePreview.png";

export const projectData = [
  {
    id: 0,
    img: ThreadsClonePreview,
    imgAlt: "MERN Stack Threads Clone",
    title: "MERN Stack Threads Clone",
    subtitle:
      "MERN Stack Threads Clone + Advanced Chat App | Socket.io && JWT && Redux && Chakra UI",
    projectLink: "https://reactthreadsclone.onrender.com/",
  },
  {
    id: 1,
    img: InstagramClonePreview,
    imgAlt: "Instagram Clone",
    title: "Instagram Clone",
    subtitle: "Instagram Clone | Firebase && JWT && Redux && Tailwind Css",
    projectLink: "https://reactjsinstagramclone.vercel.app",
  },
  {
    id: 2,
    img: PizzaWebAppPreview,
    imgAlt: "Pizza App",
    title: "MERN Stack Pizza App",
    subtitle:
      "MERN Pizza E-Commerece Web App | REDUX && TAILWIND CSS && Geolocation API",
    projectLink: "https://react-pizza-ctup.onrender.com/",
  },
];

export const skillsDataFrontEnd = [
  {
    id: 0,
    skill: "HTML5",
    icon: "ri-html5-line",
  },
  {
    id: 1,
    skill: "CSS3",
    icon: "ri-css3-line",
  },
  {
    id: 2,
    skill: "JavaScript",
    icon: "ri-braces-line",
  },
  {
    id: 3,
    skill: "ReactJS",
    icon: "ri-reactjs-line",
  },
  {
    id: 4,
    skill: "Redux/Zustand",
    icon: "ri-reactjs-line",
  },
  {
    id: 5,
    skill: "NextJs",
    icon: "ri-nextjs-line",
  },
  {
    id: 6,
    skill: "Git",
    icon: "ri-git-branch-line",
  },
];

export const skillsDataBackEnd = [
  {
    id: 0,
    skill: "NodeJs/NestJs",
    icon: "ri-server-line",
  },
  {
    id: 1,
    skill: "Firebase",
    icon: "ri-fire-line",
  },
  {
    id: 1,
    skill: "SQL",
    icon: "ri-database-line",
  },
];

const Page = () => {
  return (
    <Main
      projectData={projectData}
      skillsDataBackEnd={skillsDataBackEnd}
      skillsDataFrontEnd={skillsDataFrontEnd}
    />
  );
};

export default Page;
