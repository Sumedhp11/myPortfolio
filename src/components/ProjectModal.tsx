import React from "react";
import { ProjectItem } from "./ui/card-hover-effect";
import Image from "next/image";
import { Key } from "lucide-react";

const ProjectModal = ({
  project,
  setopenModal,
}: {
  project: ProjectItem | null;
  setopenModal: (arg0: boolean) => void;
}) => {
  if (!project) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setopenModal(false);
      }}
      className="fixed top-0 left-0 w-full h-full z-30 flex justify-center items-center overflow-hidden"
    >
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-8 z-40 overflow-y-auto h-[75%] w-[70%] overflow-x-hidden ">
        <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
        <div className="w-full flex justify-center items-center">
          <Image
            src={project?.image}
            alt="Project"
            className="w-[40%] border border-black rounded-md"
          />
        </div>
        <div className="flex gap-3 my-2">
          <p className="font-semibold text-base">Project Link: </p>
          <a
            className="font-medium text-base hover:text-blue-800 hover:underline"
            href={project.projectlink}
          >
            {project.projectlink}
          </a>
        </div>
        <div className="w-full flex gap-5 py-1">
          <h4 className="font-semibold text-base">Github Links: </h4>
          {project.githublink.map((link) => (
            <a
              className="font-medium text-base hover:text-blue-800 hover:underline"
              key={link}
              href={link}
            >
              {link}
            </a>
          ))}
        </div>
        <div className="w-full flex gap-5 py-1">
          <h4 className="font-semibold text-base">Tech Stack: </h4>
          <div className="flex flex-col">
            {project.TechStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </div>
        </div>
        <div className="w-full flex gap-5 py-1">
          <h4 className="font-semibold text-base">Features: </h4>
          <div className="flex flex-col">
            {project.Features.map((feat) => (
              <li key={feat}>{feat}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
