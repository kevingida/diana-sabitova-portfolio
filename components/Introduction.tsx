import React from "react";
import ArrowDownRight from "./svg/ArrowDownRight";
import localFont from "next/font/local";
import { introduction } from "@/static/Static";
import ArrowRight from "./svg/ArrowRight";
import Image from "next/image";

const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });
const dosisSemibold = localFont({ src: "../font/Dosis-SemiBold.otf" });
const dosisRegular = localFont({ src: "../font/Dosis-Regular.otf" });
const dosisMedium = localFont({ src: "../font/Dosis-Medium.otf" });
const robotoRegular = localFont({ src: "../font/Roboto-Regular.ttf" });

const Introduction = () => {
  return (
    <section className=" w-full  pt-12 lg:pt-[128px] z-20">
      <div className=" flex flex-row justify-start items-center gap-5 lg:gap-8 lg:pl-[60px] xl:pl-[120px]">
        <p
          className={`${dmSansRegular.className} text-[20px] lg:text-[24px] uppercase`}
        >
          scroll to explore
        </p>
        <ArrowDownRight className=" h-6 lg:h-9" />
      </div>
      <div className="pt-[80px] pb-[80px] lg:pb-[164px] flex flex-nowrap flex-row gap-5 lg:gap-12 overflow-x-auto snap-x snap-mandatory z-40 lg:px-[60px] xl:px-[120px]">
        <div
          style={{ backgroundImage: "url('/Folder.svg')" }}
          className=" w-[266px] h-[332px] lg:w-[400px] lg:h-[500px] flex-none snap-always snap-center z-30 px-[26px] py-[46px] lg:px-[40px] lg:py-[80px] bg-contain"
        >
          <Image
            src="/dianaPhoto.png"
            alt="Diana Photo"
            width={125}
            height={125}
            className=" w-[65px] h-[65px] lg:w-[125px] lg:h-[125px] rounded-full"
          />
          <p
            className={`${dosisSemibold.className} pt-8 lg:pt-[60px] pb-7 lg:pb-[34px] text-[32px] lg:text-[48px] w-[190px] lg:w-[280px] leading-[50px]`}
          >
            Hello, I&apos;m Diana Sabitova
          </p>
          <div className="flex-grow border-t border-black/60" />
          <div className="flex flex-row justify-between items-center gap-4 pt-[18px] lg:pt-[20px]">
            <p
              className={`${robotoRegular.className} text-[14px] lg:text-[16px]  `}
            >
              [ UX/UI Designer ]
            </p>
            <ArrowRight className=" w-[22px] h-[22px] lg:w-[50px] lg:h-[50px]" />
          </div>
        </div>
        {introduction.map((intro, index) => (
          <div
            style={{ backgroundImage: "url('/Folder.svg')" }}
            className=" w-[266px] h-[332px] lg:w-[400px] lg:h-[500px] flex-none snap-always snap-center z-30 px-[26px] py-[46px] lg:px-[40px] lg:py-[80px] bg-contain"
            key={index}
          >
            <h1
              className={`${dosisRegular.className} text-[26px] lg:text-[40px] leading-none`}
            >
              {intro.id}
            </h1>
            <p
              className={`${dosisMedium.className} text-[26px] lg:text-[48px] pb-4`}
            >
              {intro.title}
            </p>
            <div className="flex-grow border-t border-black/60 pb-4 lg:pb-8 " />

            <p
              className={`${robotoRegular.className} text-[12px] lg:text-[16px] uppercase leading-[20px] lg:leading-[29px] lg:tracking-[0.63px]`}
            >
              {intro.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
