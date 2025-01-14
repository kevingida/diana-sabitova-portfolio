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
    <section className=" w-full lg:pl-[60px] xl:pl-[120px] pt-[128px] z-50">
      <div className=" flex flex-row justify-start items-center gap-8">
        <p className={`${dmSansRegular.className} text-[24px] uppercase`}>
          scroll to explore
        </p>
        <ArrowDownRight height={36} />
      </div>
      <div className="pt-[80px] pb-[164px] flex flex-nowrap flex-row gap-12 overflow-x-auto snap-x snap-mandatory">
        <div
          style={{ backgroundImage: "url('/Folder.svg')" }}
          className=" w-[400px] h-[500px] flex-none snap-always snap-center z-50 px-[40px] py-[80px]"
        >
          <Image
            src="/dianaPhoto.png"
            alt="Diana Photo"
            width={125}
            height={125}
          />
          <p
            className={`${dosisSemibold.className} pt-[60px] pb-[34px] text-[48px] w-[280px] leading-[50px]`}
          >
            Hello, I&apos;m Diana Sabitova
          </p>
          <div className="flex-grow border-t border-black/60" />
          <div className="flex flex-row justify-between items-center gap-4 pt-[20px]">
            <p className={`${robotoRegular.className} text-[16px]  `}>
              [ UX/UI Designer ]
            </p>
            <ArrowRight />
          </div>
        </div>
        {introduction.map((intro, index) => (
          <div
            style={{ backgroundImage: "url('/Folder.svg')" }}
            className=" w-[400px] h-[500px] flex-none snap-always snap-center z-50 px-[40px] py-[94px]"
            key={index}
          >
            <h1
              className={`${dosisRegular.className} text-[40px] leading-none`}
            >
              {intro.id}
            </h1>
            <p className={`${dosisMedium.className} text-[48px] pb-4`}>
              {intro.title}
            </p>
            <div className="flex-grow border-t border-black/60 pb-8 " />

            <p
              className={`${robotoRegular.className} text-[16px] uppercase leading-[29px] tracking-[0.63px]`}
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
