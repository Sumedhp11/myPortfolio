"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import { HeroHighlight, Highlight } from "./ui/hero-highlight";
import MyPic from "@/assets/Portfolio Pic.jpg";

const HeroSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col h-[40%]  gap-4  px-4 w-full "
    >
      <div className="flex w-full h-full items-center gap-5">
        <div className="w-[30%] h-full  flex justify-center items-center">
          <Image
            src={MyPic}
            alt="My Photo"
            className="w-72 h-72 object-contain rounded-full   "
          />
        </div>
        <div className="w-[60%] h-fit  py-2">
          <HeroHighlight>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
            >
              HEY!, I Am Sumedh Pawar
            </motion.h1>
            <Highlight className="text-black dark:text-white text-4xl font-bold">
              And I am A Full Stack MERN Developer
            </Highlight>
          </HeroHighlight>
          <h4 className="font-bold text-sm mt-4 text-white ">
            Driven MERN Stack and Next.js Developer with a passion for crafting
            dynamic web applications. Dedicated to creating seamless digital
            experiences.
          </h4>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
