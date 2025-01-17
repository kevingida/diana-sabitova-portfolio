"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import BackToTop from "@/components/BackToTop";
import BackToHomepage from "@/components/BackToHomepage";

const dmSansSemiBold = localFont({ src: "../../../font/DMSans-SemiBold.ttf" });
const dmSansRegular = localFont({ src: "../../../font/DMSans-Regular.ttf" });
const openSansSemiBold = localFont({
  src: "../../../font/OpenSans-SemiBold.ttf",
});
const openSansRegular = localFont({
  src: "../../../font/OpenSans-Regular.ttf",
});
const interRegular = localFont({ src: "../../../font/Inter-Regular.otf" });
const robotoRegular = localFont({ src: "../../../font/Roboto-Regular.ttf" });
const robotoBold = localFont({ src: "../../../font/Roboto-Bold.ttf" });
const robotoLight = localFont({ src: "../../../font/Roboto-Light.ttf" });
const robotoMedium = localFont({ src: "../../../font/Roboto-Medium.ttf" });
const exposure = localFont({ src: "../../../font/Exposure.otf" });

const AppyBitePage = () => {
  return (
    <div className="relative">
      <div className="relative mx-auto w-full max-w-screen-xl bg-white px-4 lg:px-[100px] lg:pb-[110px] xl:px-[120px]">
        <Cursor />
        <Navbar color="black" bgColor="white" />
        <Image
          src="/appyBite-hero-desktop.png"
          alt="appyBite hero image"
          width={1680}
          height={994}
        />
        <div className="flex flex-row justify-between py-[75px] md:gap-[100px] xl:gap-[217px]">
          <div>
            <div className="pb-6 lg:pb-12">
              <p
                className={`${dmSansSemiBold.className} pb-2 text-[24px] leading-[125%] text-spaceCadet md:text-[38px] lg:text-[54px]`}
              >
                Product Overview
              </p>
              <p
                className={`${dmSansRegular.className} text-[14px] leading-[150%] md:text-[20px] lg:text-[32px]`}
              >
                AppyBite is a food delivery service that aims to revolutionize
                the way people approach healthy eating. Launched with a strong
                emphasis on responsible entrepreneurship and sustainability,
                AppyBite provides personalized, freshly prepared meals developed
                in collaboration with professional chefs and nutritionists. By
                offering convenience and customized nutrition, AppyBite targets
                individuals with busy lifestyles who want to improve their diet
                and overall well-being without the hassle of meal planning and
                cooking.
              </p>
            </div>
            <div className="pb-6 lg:pb-12">
              <p
                className={`${dmSansSemiBold.className} pb-2 text-[24px] leading-[125%] text-spaceCadet md:text-[38px] lg:text-[54px]`}
              >
                Duration
              </p>
              <p
                className={`${dmSansRegular.className} text-[14px] leading-[150%] md:text-[20px] lg:text-[32px]`}
              >
                6 Weeks
              </p>
            </div>
            <div className="pb-6 lg:pb-12">
              <p
                className={`${dmSansSemiBold.className} pb-2 text-[24px] leading-[125%] text-spaceCadet md:text-[38px] lg:text-[54px]`}
              >
                My role
              </p>
              <p
                className={`${dmSansRegular.className} w-[150px] text-[14px] leading-[150%] md:w-full md:text-[20px] lg:text-[32px]`}
              >
                UX Designer, UI Designer
              </p>
            </div>
            <div className="pb-6 lg:pb-12">
              <p
                className={`${dmSansSemiBold.className} pb-2 text-[24px] leading-[125%] text-spaceCadet md:text-[38px] lg:text-[54px]`}
              >
                Tools used
              </p>
              <p
                className={`${dmSansRegular.className} w-[150px] text-[14px] leading-[150%] md:w-full md:text-[20px] lg:text-[32px]`}
              >
                Figma, Google forms, Canva, Miro, Adobe illustrator
              </p>
            </div>
          </div>
          <Image
            src="/appyBite-phone.png"
            alt="appyBite phone"
            width={497}
            height={1050}
            className="absolute right-[16px] top-[750px] h-[339px] w-[159px] md:relative md:right-0 md:top-0 md:h-auto md:min-w-[350px] lg:min-w-[497px]"
          />
        </div>
        <div className="flex flex-row justify-between py-8 md:gap-[100px] lg:py-[75px] xl:gap-[217px]">
          <Image
            src="/appyBite-phone.png"
            alt="appyBite phone"
            width={497}
            height={1050}
            className="hidden md:block md:h-auto md:min-w-[350px] lg:min-w-[497px]"
          />
          <div className="w-full">
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} pb-2 text-[24px] leading-[125%] text-spaceCadet md:text-[38px] lg:text-[54px]`}
              >
                Problem Statement
              </p>
              <p
                className={`${dmSansRegular.className} text-[14px] leading-[150%] md:text-[20px] lg:text-[32px]`}
              >
                Many busy individuals face difficulties in:
              </p>
              <ul
                className={`${dmSansRegular.className} list-disc pl-8 text-[14px] leading-[150%] md:text-[20px] lg:text-[32px]`}
              >
                <li>Finding time to plan and prepare healthy meals</li>
                <li>Maintaining specific dietary requirements</li>
                <li>
                  Accessing personalized nutrition that aligns with their health
                  goals
                </li>
              </ul>
            </div>
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} pb-2 text-[24px] leading-[125%] text-spaceCadet md:text-[38px] lg:text-[54px]`}
              >
                Possible solution
              </p>
              <ul
                className={`${dmSansRegular.className} list-decimal pl-8 text-[14px] leading-[150%] md:text-[20px] lg:text-[32px]`}
              >
                <li>
                  Finding time to plan and prepare healthy meals:
                  <ul className="list-disc pl-8">
                    <li>Ready-to-eat meals prepared by professional chefs</li>
                    <li>Mobile app for quick and easy ordering</li>
                  </ul>
                </li>
                <li>
                  Maintaining specific dietary requirements:
                  <ul className="list-disc pl-8">
                    <li>
                      Customized meals designed for individual dietary
                      restrictions
                    </li>
                    <li>Collaboration with professional nutritionists</li>
                    <li>
                      Options for special diets (gluten-free, vegan, etc.)
                    </li>
                  </ul>
                </li>
                <li>
                  Accessing personalized nutrition that aligns with health
                  goals:
                  <ul className="list-disc pl-8">
                    <li>Progress tracking features within the app</li>
                    <li>Nutritionist-designed meal plans</li>
                    <li>
                      Options for different goals (weight loss, muscle gain,
                      etc.)
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start md:items-center md:justify-center md:py-[48px] lg:py-[94px]">
          <p
            className={`${openSansSemiBold.className} pb-6 text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:pb-[45px] lg:text-[54px]`}
          >
            Design Process
          </p>
          <p
            className={`${interRegular.className} pb-6 text-[14px] leading-[150%] md:pb-12 md:text-[24px] lg:pb-[80px] lg:text-[32px]`}
          >
            The design process section is a crucial part of your UI/UX case
            study. It showcases the problem-solving methodology and the steps
            taken to arrive at the final design solution
          </p>
          <Image
            src="/appyBite-design-process.png"
            alt="appyBite design process"
            width={1651}
            height={302}
            className="hidden md:block"
          />
          <Image
            src="/appyBite-design-process-mobile.png"
            alt="appyBite design process"
            width={217}
            height={1004}
            className="self-center md:hidden"
          />
        </div>
        <div className="flex flex-col items-start justify-start pt-12 md:items-center md:justify-center md:py-[48px] lg:py-[94px]">
          <p
            className={`${openSansSemiBold.className} pb-6 text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:pb-[45px] lg:text-[54px]`}
          >
            Competitive Analysis
          </p>
          <p
            className={`${interRegular.className} pb-6 text-[14px] leading-[150%] md:pb-12 md:text-[24px] lg:pb-[80px] lg:text-[32px]`}
          >
            AppyBite operates in a competitive market, with several other
            services that compete for the attention of health-conscious
            consumers. Established food delivery platforms like Wolt and Foodora
            offer convenience but lack the focus on personalized nutrition that
            sets AppyBite apart. Meanwhile, fitness-focused meal prep services
            such as Fuel Me and Growfit Oy provide pre-packaged healthy meals
            but don’t offer the same level of customization or freshly prepared
            options. Additionally, local restaurants that specialize in healthy
            meals, such as Pupu Redi and Green Factory, are competitors in the
            space, though they tend to focus on general health food delivery
            rather than personalized meal plans. Grocery delivery services,
            while not direct competitors, can also be seen as alternatives,
            offering fresh ingredients for customers to prepare their own meals
            at home.
          </p>
          <Image
            src="/appyBite-competitive-analysis.png"
            alt="appyBite competitive analysis table"
            width={1482}
            height={880}
          />
        </div>
        <div className="flex flex-col items-center justify-center pt-12 lg:py-[94px]">
          <p
            className={`${openSansSemiBold.className} pb-6 text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:pb-[45px] lg:text-[54px]`}
          >
            User Persona
          </p>
          <p
            className={`${interRegular.className} pb-6 text-[14px] leading-[150%] md:pb-12 md:text-[24px] lg:pb-[80px] lg:text-[32px]`}
          >
            The user persona section provides concise profiles of typical Vida
            EV users, offering insights into their demographics, lifestyle,
            preferences, and pain points related to EV services. These personas
            serve as valuable tools for informing product development and
            ensuring that Vida EV effectively meets the diverse needs of its
            target audience.
          </p>
          <div className="grid lg:grid-cols-[594px_auto] xl:grid-cols-[694px_auto] xl:grid-rows-[auto_auto_auto_auto]">
            <Image
              src="/appyBite-user-pesona-bio.png"
              alt="appyBite user pesona bio"
              width={695}
              height={1902}
              className="col-start-1 row-span-5 lg:h-[1702px] lg:w-[594px] xl:h-[1902px] xl:w-[694px]"
            />
            <Image
              src="/appyBite-user-pesona-goals.png"
              alt="appyBite user pesona goals"
              width={981}
              height={383}
              className="col-start-2 row-start-1"
            />
            <Image
              src="/appyBite-user-pesona-pain-points.png"
              alt="appyBite user pesona pain points"
              width={981}
              height={299}
              className="col-start-2 row-start-2"
            />
            <Image
              src="/appyBite-user-pesona-motivation.png"
              alt="appyBite user pesona motivation"
              width={981}
              height={215}
              className="col-start-2 row-start-3"
            />
            <Image
              src="/appyBite-user-pesona-daily-routine.png"
              alt="appyBite user pesona routine"
              width={981}
              height={1057}
              className="col-start-2 row-start-4"
            />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pt-12 lg:py-[94px]">
          <p
            className={`${openSansSemiBold.className} pb-6 text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:pb-[45px] lg:text-[54px]`}
          >
            User Empathy
          </p>
          <p
            className={`${interRegular.className} pb-6 text-[14px] leading-[150%] md:pb-12 md:text-[24px] lg:pb-[80px] lg:text-[32px]`}
          >
            I empathize with the users of Vida EV by understanding their
            emotions, needs, and frustrations. By putting ourselves in their
            shoes, we gain insight into their experiences and can tailor the app
            to better serve their needs.
          </p>
          <Image
            src="/appyBite-user-empathy.png"
            alt="appyBite user empathy"
            width={1652}
            height={1389}
          />
        </div>
        <div className="flex w-full flex-col items-center justify-center py-[94px]">
          <p
            className={`${openSansSemiBold.className} pb-[50px] text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:text-[54px]`}
          >
            Typography & Colors
          </p>
          <div className="flex w-full flex-col items-start justify-start">
            <p
              className={`${openSansSemiBold.className} pb-6 text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:pb-[50px] lg:text-[54px]`}
            >
              Font Used
            </p>
            <div className="grid grid-cols-1 gap-6 pb-[65px] md:grid-cols-[450px_auto] md:gap-x-[40px] md:gap-y-0 lg:grid-cols-[550px_auto] lg:gap-x-[80px] xl:grid-cols-[618px_auto] xl:gap-x-[113px]">
              <p
                className={`${robotoBold.className} flex h-24 w-[215px] items-center justify-center border-2 border-black text-[24px] leading-[125%] text-spaceCadet md:h-[100px] md:w-[400px] md:text-[48px] lg:h-[120px] lg:w-[520px] lg:text-[64px] xl:h-[165px] xl:w-[616px] xl:text-[78px]`}
              >
                Exposure [-40]
              </p>
              <p
                className={`${robotoRegular.className} row-start-3 pb-0 leading-tight md:col-start-2 md:row-start-1 md:pb-8 md:text-[24px] lg:pb-[57px] lg:text-[32px] xl:text-[37px]`}
              >
                <span className={`${robotoBold.className}`}>Exposure</span> is
                an extraordinary sans serif font. It have a better readability
                and variety of options. I choose this font to show creative
                approach of making hi-fi prototypes.
              </p>
              <div className="md:col-start-2">
                <p
                  className={`${exposure.className} md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p
                  className={`${exposure.className} md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p
                  className={`${exposure.className} md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  1234567890
                </p>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-[450px_auto] md:gap-x-[40px] md:gap-y-0 lg:grid-cols-[550px_auto] lg:gap-x-[80px] lg:gap-y-0 xl:grid-cols-[618px_auto] xl:gap-x-[113px]">
              <p
                className={`${robotoBold.className} flex h-24 w-[215px] items-center justify-center border-2 border-black text-[24px] leading-[125%] text-spaceCadet md:h-[100px] md:w-[400px] md:text-[48px] lg:h-[120px] lg:w-[520px] lg:text-[64px] xl:h-[165px] xl:w-[616px] xl:text-[78px]`}
              >
                Roboto
              </p>
              <p
                className={`${robotoRegular.className} leading-tight md:text-[24px] lg:text-[32px] xl:text-[37px]`}
              >
                <span className={`${robotoBold.className}`}>Roboto</span> is a
                elegant and modern sans serif font. It is very neat and clean.
                It have more readability and variety of options. That’s why I
                used this font.
              </p>
              <div className="col-start-1 mt-8">
                <p
                  className={`${robotoRegular.className} md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  ABCDEFGHIJKLMNOPQRSTUVWXYZ
                </p>
                <p
                  className={`${robotoRegular.className} md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  abcdefghijklmnopqrstuvwxyz
                </p>
                <p
                  className={`${robotoRegular.className} md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  1234567890
                </p>
              </div>
              <div className="grid h-[173px] w-full grid-cols-2 items-center rounded-[33px] border-2 px-[19px] py-[42px] shadow-[0px_3px_13px_0px_rgba(0,_0,_0,_0.1)] md:mt-24 md:px-[48px] lg:mt-32 lg:h-[244px] lg:gap-x-8 lg:px-[50px] lg:py-[26px] xl:gap-x-32 xl:px-[100px] xl:py-[46px]">
                <p
                  className={`${robotoBold.className} text-[20px] leading-[150%] md:text-[24px] lg:text-[32px] xl:text-[38px]`}
                >
                  Roboto Bold
                </p>
                <p
                  className={`${robotoMedium.className} text-[20px] leading-[150%] md:text-[24px] lg:text-[32px] xl:text-[38px]`}
                >
                  Roboto Medium
                </p>
                <p
                  className={`${robotoRegular.className} text-[20px] leading-[150%] md:text-[24px] lg:text-[32px] xl:text-[38px]`}
                >
                  Roboto Regular
                </p>
                <p
                  className={`${robotoLight.className} text-[20px] leading-[150%] md:text-[24px] lg:text-[32px] xl:text-[38px]`}
                >
                  Roboto Light
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center pt-12 md:items-start md:justify-start lg:mt-[100px] lg:pt-0 xl:mt-[200px]">
            <p
              className={`${openSansSemiBold.className} pb-6 text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:pb-[50px] lg:text-[54px]`}
            >
              Color Used
            </p>
            <div className="flex w-4/5 flex-row flex-wrap items-center justify-center gap-4 md:w-full md:justify-start md:gap-8 lg:gap-12 xl:gap-[142px]">
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] rounded-3xl bg-[#DBFBB2] shadow-[0px_3px_13px_0px_rgba(0,_0,_0,_0.1)] md:h-[150px] md:w-[150px] lg:h-[244px] lg:w-[229px]" />
                <p
                  className={`${openSansRegular.className} pt-7 text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  Primary Color
                </p>
                <p
                  className={`${openSansRegular.className} text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  #DBFBB2
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] rounded-3xl bg-[#B2FFDB] shadow-[0px_3px_13px_0px_rgba(0,_0,_0,_0.1)] md:h-[150px] md:w-[150px] lg:h-[244px] lg:w-[229px]" />
                <p
                  className={`${openSansRegular.className} pt-7 text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  Secondary Color
                </p>
                <p
                  className={`${openSansRegular.className} text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  #B2FFDB
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] rounded-3xl bg-[#000000] shadow-[0px_3px_13px_0px_rgba(0,_0,_0,_0.1)] md:h-[150px] md:w-[150px] lg:h-[244px] lg:w-[229px]" />
                <p
                  className={`${openSansRegular.className} pt-7 text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  Button Color
                </p>
                <p
                  className={`${openSansRegular.className} text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  #000000
                </p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] rounded-3xl bg-[#FFFFFFF] shadow-[0px_3px_13px_0px_rgba(0,_0,_0,_0.1)] md:h-[150px] md:w-[150px] lg:h-[244px] lg:w-[229px]" />
                <p
                  className={`${openSansRegular.className} pt-7 text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  Text Color
                </p>
                <p
                  className={`${openSansRegular.className} text-[12px] md:text-[24px] lg:text-[32px] xl:text-[37px]`}
                >
                  #FFFFFFF
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center pb-12 lg:py-[94px]">
          <p
            className={`${openSansSemiBold.className} pb-[50px] text-[24px] leading-[125%] text-spaceCadet md:text-[48px] lg:text-[54px]`}
          >
            Low Fidelity Wireframes
          </p>
          <Image
            src="/appyBite-wireframe.png"
            alt="appyBite low fidelity wireframe"
            width={1704}
            height={1066}
          />
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-xl flex-col items-center justify-center bg-purple px-4 pt-12 lg:px-[100px] lg:py-[117px] xl:px-[120px]">
        <p
          className={`${openSansSemiBold.className} pb-[50px] text-[24px] leading-[125%] text-white md:text-[48px] lg:text-[60px]`}
        >
          Visual Design
        </p>
        <div className="grid grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-[53px] lg:gap-y-[106px]">
          <Image
            src="/appyBite-visual-design-1.png"
            alt="appyBite visual design 1"
            width={536}
            height={1066}
          />
          <Image
            src="/appyBite-visual-design-2.png"
            alt="appyBite visual design 2"
            width={536}
            height={1066}
          />
          <Image
            src="/appyBite-visual-design-3.png"
            alt="appyBite visual design 3"
            width={536}
            height={1066}
          />
          <Image
            src="/appyBite-visual-design-4.png"
            alt="appyBite visual design 4"
            width={536}
            height={1066}
          />
          <Image
            src="/appyBite-visual-design-5.png"
            alt="appyBite visual design 5"
            width={536}
            height={1066}
          />
          <Image
            src="/appyBite-visual-design-6.png"
            alt="appyBite visual design 6"
            width={536}
            height={1066}
          />
          <Image
            src="/appyBite-visual-design-7.png"
            alt="appyBite visual design 7"
            width={536}
            height={3285}
          />
          <Image
            src="/appyBite-visual-design-8.png"
            alt="appyBite visual design 8"
            width={536}
            height={1066}
          />
        </div>
      </div>
      <Contact />
      <BackToTop className="bottom-[550px] lg:bottom-[800px]" />
      <BackToHomepage className="bottom-20" />
    </div>
  );
};

export default AppyBitePage;
