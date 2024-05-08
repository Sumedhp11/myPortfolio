"use client";
import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import HTMLLOGO from "@/assets/html-logo.svg";
import Csslogo from "@/assets/css-logo.svg";
import jslogo from "@/assets/js-logo.svg";
import reactlogo from "@/assets/react-logo.svg";
import nodelogo from "@/assets/nodejs-logo.svg";
import tailwindlogo from "@/assets/tailwind-logo.svg";
import expresslogo from "@/assets/expressjs-logo.svg";
import mongodblogo from "@/assets/mongodb-logo.svg";
import jwtLogo from "@/assets/jwt-logo.svg";
import socketlogo from "@/assets/socketlogo.webp";
import nextjslogo from "@/assets/nextjs-logo.svg";
import reduxlogo from "@/assets/redux-logo.svg";
import reactquerylogo from "@/assets/react-query-logo.webp";
import tslogo from "@/assets/ts-logo.svg";
import { motion } from "framer-motion";

const SkillSection = () => {
  const skills = [
    {
      image: HTMLLOGO,
      skillname: "HTML",
    },
    {
      image: Csslogo,
      skillname: "CSS",
    },
    {
      image: tailwindlogo,
      skillname: "TAILWIND CSS",
    },
    {
      image: jslogo,
      skillname: "JAVASCRIPT",
    },
    {
      image: reactlogo,
      skillname: "REACTJS",
    },
    {
      image: tslogo,
      skillname: "TYPESCRIPT",
    },
    {
      image: reactquerylogo,
      skillname: "TANSTACK QUERY",
    },
    {
      image: reduxlogo,
      skillname: "REDUX",
    },
    {
      image: nodelogo,
      skillname: "NODEJS",
    },
    {
      image: expresslogo,
      skillname: "EXPRESSJS",
    },
    {
      image: mongodblogo,
      skillname: "MONGODB",
    },
    {
      image: jwtLogo,
      skillname: "JWT",
    },
    {
      image: socketlogo,
      skillname: "SOCKET.IO",
    },
    {
      image: nextjslogo,
      skillname: "NEXTJS",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full h-[40rem] rounded-md flex flex-col antialiased items-center justify-center relative  mt-12"
    >
      <h1 className="font-bold text-4xl text-white">Skills</h1>
      <InfiniteMovingCards items={skills} direction="right" speed="slow" />
    </motion.div>
  );
};

export default SkillSection;
