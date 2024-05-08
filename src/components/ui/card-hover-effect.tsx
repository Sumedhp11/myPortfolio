"use client";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";

import { useState } from "react";
import ProjectModal from "../ProjectModal";

export interface ProjectItem {
  title: string;
  image: StaticImageData;
  projectlink: string;
  githublink: string[];
  TechStack: string[];
  Features: string[];
}
export const HoverEffect = ({
  items,
  className,
}: {
  items: ProjectItem[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [openModal, setopenModal] = useState<boolean>(false);
  const [selectedProject, setselectedProject] = useState<ProjectItem | null>(
    null
  );

  const handleCardClick = (item: ProjectItem) => {
    setselectedProject(item);
    setopenModal(true);
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-4",
        className
      )}
    >
      {items.map((item: ProjectItem, idx: any) => (
        <div
          key={item?.title}
          className="relative group  block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleCardClick(item)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="w-full flex items-center justify-center">
              <Image src={item.image} alt="Project-Image" />
            </div>
            <CardTitle>{item.title}</CardTitle>
          </Card>
        </div>
      ))}
      {openModal && (
        <ProjectModal project={selectedProject} setopenModal={setopenModal} />
      )}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden  border border-transparent dark:border-white/[0.2] group-hover:border-slate-700 relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
