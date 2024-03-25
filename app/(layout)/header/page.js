import React from "react";
import Header from "./Header";

export const socialData = [
  {
    id: 0,
    social: "WhatsApp",
    href: "https://wa.me/923036828908",
    icon: "ri-whatsapp-line",
  },
  {
    id: 1,
    social: "Instagram",
    href: "https://www.instagram.com/omarxoxo._/",
    icon: "ri-instagram-line",
  },
  {
    id: 2,
    social: "GitHub",
    href: "https://github.com/OMARxKHALID",
    icon: "ri-github-line",
  },
  {
    id: 3,
    social: "Linkedin",
    href: "https://www.linkedin.com/in/dev-umarkhalid/",
    icon: "ri-linkedin-line",
  },
];

export const profileInfo = [
  {
    id: 0,
    title: "2+",
    desctiption: "Years of commercial development",
  },
  {
    id: 1,
    title: 3,
    desctiption: "Completed personal projects",
  },
  {
    id: 2,
    title: "Fiverr",
    desctiption: "Working as a freelancer",
  },
];

const Page = () => {
  return <Header socialData={socialData} profileInfo={profileInfo} />;
};

export default Page;
