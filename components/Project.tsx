import { projects } from "@/static/Static";
import localFont from "next/font/local";
import Image from "next/image";
import React from "react";

const dmSansMedium = localFont({ src: "../font/DMSans-Medium.ttf" });
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });
const dmSansSemiBold = localFont({ src: "../font/DMSans-SemiBold.ttf" });

const Project = () => {
  return (
    <section className="w-full px-4 lg:px-[60px] xl:px-[120px] pt-[60px] lg:pt-[91px] pb-[60px] lg:pb-[245px] relative">
      <h2 className={`${dmSansMedium.className} text-[30px] lg:text-[60px]`}>
        Projects
      </h2>
      <p
        className={`${dmSansRegular.className} text-[16px] leading-5 w-[270px] pb-8 lg:text-[24px] lg:leading-[140%] lg:w-[450px] lg:pb-[91px]`}
      >
        As a seasoned creator of contemporary, user-friendly web designs and
        digital solutions, I aim to assist you in constructing the brand of your
        fantasies.
      </p>
      <ul className="grid grid-cols-1 lg:grid-cols-2 gap-x-[76px] gap-y-12 lg:gap-y-[69px]">
        {projects.map((project, index) => (
          <li key={index}>
            <Image
              src={project.image}
              alt={project.title}
              width={800}
              height={680}
            />
            <h3
              className={`${dmSansSemiBold.className} text-[16px] lg:text-[28px] pt-4 lg:pt-11`}
            >
              {project.title}
            </h3>
            <p
              className={`${dmSansRegular.className} text-[16px] lg:text-[28px]`}
            >
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
