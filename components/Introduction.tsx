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
    <section className="z-20 w-full pt-12 lg:pt-[128px]">
      <div className="flex flex-row items-center justify-start gap-5 md:pl-[30px] lg:gap-8 lg:pl-[60px] xl:pl-[120px]">
        <p
          className={`${dmSansRegular.className} text-[20px] uppercase lg:text-[24px]`}
        >
          scroll to explore
        </p>
        <ArrowDownRight className="h-6 lg:h-9" />
      </div>
      <div className="z-40 flex snap-x snap-mandatory flex-row flex-nowrap gap-5 overflow-x-auto py-[80px] md:px-[30px] md:pt-[50px] lg:gap-12 lg:px-[60px] lg:pb-[164px] xl:px-[120px]">
        <div
          style={{ backgroundImage: "url('/Folder.svg')" }}
          className="z-30 h-[332px] w-[266px] flex-none snap-center snap-always bg-contain px-[26px] py-[46px] lg:h-[500px] lg:w-[400px] lg:px-[40px] lg:py-[80px]"
        >
          <Image
            src="/dianaPhoto.png"
            alt="Diana Photo"
            width={125}
            height={125}
            className="h-[65px] w-[65px] rounded-full lg:h-[125px] lg:w-[125px]"
          />
          <p
            className={`${dosisSemibold.className} w-[190px] pb-7 pt-8 text-[32px] leading-[50px] lg:w-[280px] lg:pb-[34px] lg:pt-[60px] lg:text-[48px]`}
          >
            Hello, I&apos;m Diana Sabitova
          </p>
          <div className="flex-grow border-t border-black/60" />
          <div className="flex flex-row items-center justify-between gap-4 pt-[18px] lg:pt-[20px]">
            <p
              className={`${robotoRegular.className} text-[14px] lg:text-[16px]`}
            >
              [ UX/UI Designer ]
            </p>
            <ArrowRight className="h-[22px] w-[22px] lg:h-[50px] lg:w-[50px]" />
          </div>
        </div>
        {introduction.map((intro, index) => (
          <div
            style={{ backgroundImage: "url('/Folder.svg')" }}
            className="z-30 h-[332px] w-[266px] flex-none snap-center snap-always bg-contain px-[26px] py-[46px] lg:h-[500px] lg:w-[400px] lg:px-[40px] lg:py-[80px]"
            key={index}
          >
            <h1
              className={`${dosisRegular.className} text-[26px] leading-none lg:text-[40px]`}
            >
              {intro.id}
            </h1>
            <p
              className={`${dosisMedium.className} pb-4 text-[26px] lg:text-[48px]`}
            >
              {intro.title}
            </p>
            <div className="flex-grow border-t border-black/60 pb-4 lg:pb-8" />

            <p
              className={`${robotoRegular.className} text-[12px] uppercase leading-[20px] lg:text-[16px] lg:leading-[29px] lg:tracking-[0.63px]`}
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
