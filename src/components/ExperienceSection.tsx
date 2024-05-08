import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import NextgenInternshipExperienceLetter from "@/assets/Nextgen-InternshipComplete-Letter.jpg";
import NamasteReactCertificate from "@/assets/Namaste-React-Certificate.png";

const ExperienceSection = () => {
  return (
    <div className="flex w-full justify-center items-center">
      <div className=" overflow-hidden">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="text-4xl font-semibold text-black dark:text-white py-5">
                Experience & Certifications
                <br />
              </h1>
            </>
          }
        >
          <Image
            src={NextgenInternshipExperienceLetter}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-contain h-full object-left-top"
            draggable={false}
          />
          <Image
            src={NamasteReactCertificate}
            alt="hero"
            height={720}
            width={500}
            className="mx-auto rounded-2xl object-fill h-full object-right-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </div>
  );
};

export default ExperienceSection;
