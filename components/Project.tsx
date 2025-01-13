import { projects } from "@/static/Static";
import localFont from "next/font/local";
import React from "react";

const dmSansMedium = localFont({ src: "../font/DMSans-Medium.ttf" });
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });
const dmSansSemiBold = localFont({ src: "../font/DMSans-SemiBold.ttf" });

const Project = () => {
  return (
    <section className="w-full px-[120px] pt-[91px] pb-[245px] relative">
      <h2 className={`${dmSansMedium.className} text-[60px]`}>Projects</h2>
      <p
        className={`${dmSansRegular.className} text-[24px] leading-[140%] w-[450px] pb-[91px]`}
      >
        As a seasoned creator of contemporary, user-friendly web designs and
        digital solutions, I aim to assist you in constructing the brand of your
        fantasies.
      </p>
      <ul className="grid grid-cols-2 gap-x-[76px] gap-y-[69px]">
        {projects.map((project, index) => (
          <li key={index}>
            <img src={project.image} alt={project.title} />
            <h3 className={`${dmSansSemiBold.className} text-[28px] pt-11`}>
              {project.title}
            </h3>
            <p className={`${dmSansRegular.className} text-[28px]`}>
              {project.description}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Project;
