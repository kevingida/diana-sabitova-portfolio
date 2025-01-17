"use client";
import { projects } from "@/static/Static";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";

const dmSansMedium = localFont({ src: "../font/DMSans-Medium.ttf" });
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });
const dmSansSemiBold = localFont({ src: "../font/DMSans-SemiBold.ttf" });

const Project = () => {
  return (
    <section
      className="relative w-full px-4 pb-[60px] pt-[60px] md:px-[30px] lg:px-[60px] lg:pb-[245px] lg:pt-[91px] xl:px-[120px]"
      id="featured-work"
    >
      <h2 className={`${dmSansMedium.className} text-[30px] lg:text-[60px]`}>
        Projects
      </h2>
      <p
        className={`${dmSansRegular.className} w-[270px] pb-8 text-[16px] leading-5 lg:w-[450px] lg:pb-[91px] lg:text-[24px] lg:leading-[140%]`}
      >
        As a seasoned creator of contemporary, user-friendly web designs and
        digital solutions, I aim to assist you in constructing the brand of your
        fantasies.
      </p>
      <ul className="grid grid-cols-1 gap-x-[76px] gap-y-12 md:grid-cols-2 lg:gap-y-[69px]">
        {projects.map((project, index) => (
          <li key={index}>
            <Link href={`/projects/${project.slug}`}>
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={500}
                className="h-auto w-[800px] cursor-pointer before:content-['caseStudy']"
              />
            </Link>
            <h3
              className={`${dmSansSemiBold.className} pt-4 text-[16px] lg:pt-11 lg:text-[28px]`}
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
