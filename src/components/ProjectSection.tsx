"use client";
import React from "react";
import { HoverEffect } from "./ui/card-hover-effect";
import FriendMe from "@/assets/FriendMe.png";
import Foodlab from "@/assets/Foodlab.png";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Foodlab",
    image: Foodlab,
    projectlink: "https://foodllaab.vercel.app/",
    githublink: [
      "https://github.com/Sumedhp11/FoodLab-Frontend",
      "https://github.com/Sumedhp11/FoodLab-Backend",
    ],
    TechStack: [
      "React.js - For dynamic and responsive user interfaces",
      "ShadCn UI - Elevating the aesthetics and user experience",
      "Tanstack Query/React Query - Ensuring efficient data fetching and caching.",
      "Tailwind CSS - Streamlining UI development with utility-first CSS.",
      "Redux - Managing state like a pro.",
      "Lucide Icons - Adding visual flair with sleek icons.",
      "Zod - For robust data validation.",
      "React Router-Dom - Navigating seamlessly through app pages.",
      "Framer Motion - Adding delightful animations.",
      "React-Hook-Form - Simplifying form management with hooks",
      "Node.js - For scalable server-side logic.",
      "Express - Building robust APIs effortlessly.",
      "Mongoose - Streamlining MongoDB data modeling.",
      "MongoDB - Our reliable and flexible NoSQL database.",
      "Multer - Handling file uploads seamlessly.",
      "JWT - Ensuring secure authentication.",
      "Nodemailer - Powering email communication.",
      "Bcrypt - Safeguarding user passwords with hashing.",
    ],
    Features: [
      " Seamless food ordering experience.",
      "RazorPay integration for smooth payments.",
      "Cloudinary for efficient file storage.",
      "Protected Routes ",
      "Role Based Routes",
      "User Authentication",
      "Admin panel with functionalities: Manage users.",
      "Manage restaurants: add, edit, delete.",
      "Change the delivery order status of any user's order.",
      "Track users and their orders.",
      "User-centric features:Favorite dishes or restaurants.",
      "Add to cart functionality.",
      "Add new addresses for delivery.",
      "Safe Payments.",
    ],
  },
  {
    title: "FriendMe",
    image: FriendMe,
    projectlink: "https://friend--me.vercel.app/",
    githublink: [
      "https://github.com/Sumedhp11/FriendMe-Backend-Node",
      "https://github.com/Sumedhp11/FriendMe-Frontend",
    ],
    TechStack: [
      "React.js - For dynamic and responsive user interfaces",
      "Material UI For Styling",
      "Redux/RTK Query - State Management and Data Fetching.",
      "React Router-Dom - Navigating seamlessly through app pages.",
      "Axios - For Data Fetching",
      "Chartjs - For Charts",
      "Framer-motion - For Seamless Animations and transitions",
      "socket.io-client - For Smooth WebSocket Implemention in Frontend",
      "Node.js - For scalable server-side logic.",
      "Express - Building robust APIs effortlessly.",
      "Mongoose - Streamlining MongoDB data modeling.",
      "MongoDB - Our reliable and flexible NoSQL database.",
      "Multer - Handling file uploads seamlessly.",
      "JWT - Ensuring secure authentication.",
      "Socket.IO - For Integrating WebSockets in Backend",
    ],
    Features: [
      "User Authentication",
      "Send Friend Request",
      "Recieve Notification",
      "Real time Chat",
      "Send Any File Attachment In Chat",
      "CRUD Group",
      "Admin Dashboard For Monitoring the User Chat App",
    ],
  },
];
const ProjectSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="w-full flex flex-col justify-center items-center"
    >
      <h1 className="font-bold text-4xl text-white">Projects</h1>
      <div className="max-w-5xl mx-auto px-8 ">
        <HoverEffect items={projects} />
      </div>
    </motion.div>
  );
};

export default ProjectSection;
