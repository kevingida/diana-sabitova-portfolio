"use client";
import useScreenSize from "@/lib/useScreenSize";
import { aboutMe } from "@/static/Static";
import localFont from "next/font/local";
import Link from "next/link";

const dmSansLight = localFont({ src: "../font/DMSans-Light.ttf" });
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

const AboutMe = () => {
  const { isMobile } = useScreenSize();
  return (
    <div
      className="relative mx-auto flex w-full max-w-screen-xl flex-col overflow-hidden bg-saladGreen px-4 py-14 md:px-[30px] lg:px-[60px] lg:py-[120px] xl:px-[120px]"
      id="about-me"
    >
      <div className="grid grid-cols-1 grid-rows-[40px_auto_auto_auto] md:grid-cols-[300px_auto] lg:grid-cols-[460px_auto] lg:grid-rows-[88px_auto_auto_auto] xl:grid-cols-[566px_auto]">
        {!isMobile && <span className="text-[20px] font-light">/02</span>}
        <p
          className={`${dmSansLight.className} text-[18px] uppercase leading-[36px] lg:text-[20px]`}
        >
          more about me
        </p>
        <p className="pb-7 text-[20px] uppercase leading-[30px] md:col-start-2 lg:pb-8 lg:text-[34px] lg:leading-[54px] xl:text-[45px]">
          I’m a multi-disciplinary designer with 2+ years of experience located
          in Helsinki, Finland. A moderate perfectionist on a journey of
          constant learning. My mission is to focus on making a human-centric
          projects, harmonizing minimalism and brutalism.
        </p>
        <p
          className={`${dmSansRegular.className} h-[170px] text-[20px] uppercase leading-[30px] md:col-start-2 lg:h-[267px] lg:text-[34px] lg:leading-[54px] xl:text-[45px]`}
        >
          My mission is to focus on making a human-centric projects, harmonizing
          minimalism and brutalism.
        </p>
        <span className="pb-[53px] text-[18px] font-light uppercase lg:pb-[158px] lg:text-[20px]">
          {isMobile ? "/ area of expertise" : "/03"}
        </span>
      </div>
      {aboutMe.map((content, index) => (
        <div
          key={index}
          className="grid pb-12 md:grid-cols-[300px_auto] lg:grid-cols-[460px_auto] lg:pb-[155px] xl:grid-cols-[566px_auto]"
        >
          <h3
            className={`${dmSansRegular.className} pb-8 text-[24px] uppercase leading-[54px] lg:pb-0 lg:text-[30px] xl:text-[35px]`}
          >
            {content.title}
          </h3>
          <ul>
            {content.list.map((list, index) => (
              <li
                className="flex flex-col gap-6 pb-4 text-[16px] uppercase lg:gap-[30px] lg:pb-[30px] lg:text-[24px] lg:leading-[35px] xl:gap-[40px] xl:pb-[40px] xl:text-[30px] xl:leading-[54px]"
                key={index}
              >
                {list}
                <div className="flex-grow border-t border-black/30" />
              </li>
            ))}
          </ul>
        </div>
      ))}
      <Link
        href="https://drive.google.com/file/d/1Cz3ZCBBi_nrJbXH8A5gR4hXOZwqO8EE2/view"
        target="_blank"
        className="z-30 flex h-[80px] w-[351px] items-center justify-center self-center bg-black text-[24px] uppercase text-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] lg:h-[94px] lg:w-[301px] lg:text-[30px]"
      >
        my resume
      </Link>
    </div>
  );
};

export default AboutMe;
