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
      className="max-w-screen-xl mx-auto bg-saladGreen relative overflow-hidden w-full flex flex-col px-4 py-14 lg:px-[60px] xl:px-[120px] lg:py-[120px]"
      id="about-me"
    >
      <div className="grid grid-cols-1 grid-rows-[40px_auto_auto_auto] lg:grid-cols-[460px_auto] xl:grid-cols-[566px_auto] lg:grid-rows-[88px_auto_auto_auto]">
        {!isMobile && <span className=" text-[20px] font-light">/02</span>}
        <p
          className={`${dmSansLight.className} text-[18px] lg:text-[20px] leading-[36px] uppercase`}
        >
          more about me
        </p>
        <p className="lg:col-start-2 text-[20px] leading-[30px] pb-7 lg:text-[34px] xl:text-[45px] lg:leading-[54px] uppercase lg:pb-8">
          I’m a multi-disciplinary designer with 2+ years of experience located
          in Helsinki, Finland. A moderate perfectionist on a journey of
          constant learning. My mission is to focus on making a human-centric
          projects, harmonizing minimalism and brutalism.
        </p>
        <p
          className={`${dmSansRegular.className} lg:col-start-2 text-[20px] leading-[30px] lg:leading-[54px] lg:text-[34px] xl:text-[45px] uppercase h-[170px] lg:h-[267px]`}
        >
          My mission is to focus on making a human-centric projects, harmonizing
          minimalism and brutalism.
        </p>
        <span className=" text-[18px] lg:text-[20px] font-light pb-[53px] lg:pb-[158px] uppercase">
          {isMobile ? "/ area of expertise" : "/03"}
        </span>
      </div>
      {aboutMe.map((content, index) => (
        <div
          key={index}
          className="grid lg:grid-cols-[460px_auto] xl:grid-cols-[566px_auto] pb-12 lg:pb-[155px]"
        >
          <h3
            className={`${dmSansRegular.className} text-[24px] leading-[54px] lg:text-[30px] xl:text-[35px] pb-8 lg:pb-0  uppercase`}
          >
            {content.title}
          </h3>
          <ul>
            {content.list.map((list, index) => (
              <li
                className=" text-[16px] lg:text-[24px] lg:leading-[35px] xl:text-[30px] xl:leading-[54px] flex flex-col gap-6 pb-4 lg:gap-[30px] lg:pb-[30px] xl:gap-[40px] xl:pb-[40px] uppercase"
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
        className=" z-50 flex self-center justify-center items-center uppercase w-[351px] lg:w-[301px] h-[80px] lg:h-[94px] bg-black text-white text-[24px] lg:text-[30px] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)]"
      >
        my resume
      </Link>
    </div>
  );
};

export default AboutMe;
