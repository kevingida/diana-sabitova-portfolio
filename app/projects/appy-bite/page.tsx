import Navbar from "@/components/Navbar";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Contact from "@/components/Contact";

const dmSansSemiBold = localFont({ src: "../../../font/DMSans-SemiBold.ttf" });
const dmSansRegular = localFont({ src: "../../../font/DMSans-Regular.ttf" });
const openSansSemiBold = localFont({
  src: "../../../font/OpenSans-SemiBold.ttf",
});
const interRegular = localFont({ src: "../../../font/Inter-Regular.otf" });

const AppyBitePage = () => {
  return (
    <>
      <div className=" max-w-screen-xl mx-auto bg-white w-full flex flex-col items-center px-[120px] pb-[110px] pt-[190px]">
        <Navbar />
        <Image
          src="/appyBite-hero-desktop.png"
          alt="appyBite hero image"
          width={1680}
          height={994}
        />
        <div className="flex flex-row justify-between gap-[217px] py-[75px]">
          <div>
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} text-[54px] leading-[125%] text-spaceCadet`}
              >
                Product Overview
              </p>
              <p
                className={`${dmSansRegular.className} text-[32px] leading-[150%]`}
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
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} text-[54px] leading-[125%] text-spaceCadet`}
              >
                Duration
              </p>
              <p
                className={`${dmSansRegular.className} text-[32px] leading-[150%]`}
              >
                6 Weeks
              </p>
            </div>
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} text-[54px] leading-[125%] text-spaceCadet`}
              >
                My role
              </p>
              <p
                className={`${dmSansRegular.className} text-[32px] leading-[150%]`}
              >
                UX Designer, UI Designer
              </p>
            </div>
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} text-[54px] leading-[125%] text-spaceCadet`}
              >
                Tools used
              </p>
              <p
                className={`${dmSansRegular.className} text-[32px] leading-[150%]`}
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
          />
        </div>
        <div className="flex flex-row justify-between gap-[217px] py-[75px]">
          <Image
            src="/appyBite-phone.png"
            alt="appyBite phone"
            width={497}
            height={1050}
          />
          <div>
            <div className="pb-12">
              <p
                className={`${dmSansSemiBold.className} text-[54px] leading-[125%] text-spaceCadet`}
              >
                Problem Statement
              </p>
              <p
                className={`${dmSansRegular.className} text-[32px] leading-[150%]`}
              >
                Many busy individuals face difficulties in:
              </p>
              <ul
                className={`${dmSansRegular.className} text-[32px] leading-[150%] list-disc pl-8`}
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
                className={`${dmSansSemiBold.className} text-[54px] leading-[125%] text-spaceCadet`}
              >
                Possible solution
              </p>
              <ul
                className={`${dmSansRegular.className} text-[32px] leading-[150%] list-decimal pl-8`}
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
        <div className="flex flex-col justify-center items-center py-[94px]">
          <p
            className={`${openSansSemiBold.className} text-[54px] leading-[125%] pb-[45px] text-spaceCadet`}
          >
            Design Process
          </p>
          <p
            className={`${interRegular.className} text-[32px] leading-[150%] pb-[80px]`}
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
          />
        </div>
        <div className="flex flex-col justify-center items-center py-[94px]">
          <p
            className={`${dmSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
          >
            Competitive Analysis
          </p>
          <p
            className={`${dmSansRegular.className} text-[32px] leading-[150%] pb-[66px]`}
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
        <div className="flex flex-col justify-center items-center py-[94px]">
          <p
            className={`${dmSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
          >
            User Persona
          </p>
          <p
            className={`${dmSansRegular.className} text-[32px] leading-[150%] pb-[66px]`}
          >
            The user persona section provides concise profiles of typical Vida
            EV users, offering insights into their demographics, lifestyle,
            preferences, and pain points related to EV services. These personas
            serve as valuable tools for informing product development and
            ensuring that Vida EV effectively meets the diverse needs of its
            target audience.
          </p>
          <div className="grid grid-cols-[694px_auto] grid-rows-[auto_auto_auto_auto]">
            <Image
              src="/appyBite-user-pesona-bio.png"
              alt="appyBite user pesona bio"
              width={695}
              height={1902}
              className=" row-span-4 col-start-1"
            />
            <Image
              src="/appyBite-user-pesona-goals.png"
              alt="appyBite user pesona goals"
              width={981}
              height={383}
              className=" col-start-2 row-start-1"
            />
            <Image
              src="/appyBite-user-pesona-pain-points.png"
              alt="appyBite user pesona pain points"
              width={981}
              height={299}
              className=" col-start-2 row-start-2"
            />
            <Image
              src="/appyBite-user-pesona-motivation.png"
              alt="appyBite user pesona motivation"
              width={981}
              height={215}
              className=" col-start-2 row-start-3"
            />
            <Image
              src="/appyBite-user-pesona-daily-routine.png"
              alt="appyBite user pesona routine"
              width={981}
              height={1057}
              className=" col-start-2 row-start-4"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-[94px]">
          <p
            className={`${dmSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
          >
            User Empathy
          </p>
          <p
            className={`${dmSansRegular.className} text-[32px] leading-[150%] pb-[66px]`}
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
        <div className="flex flex-col justify-center items-center py-[94px]">
          <p
            className={`${openSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
          >
            Typography & Colors
          </p>
          <div>
            <p
              className={`${openSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
            >
              Font Used
            </p>
          </div>
          <div>
            <p
              className={`${openSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
            >
              Color Used
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center py-[94px]">
          <p
            className={`${openSansSemiBold.className} text-[54px] leading-[125%] pb-[50px] text-spaceCadet`}
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
      <div className="max-w-screen-xl mx-auto flex flex-col justify-center items-center py-[117px] bg-purple w-full">
        <p
          className={`${openSansSemiBold.className} text-[60px] leading-[125%] pb-[50px] text-white`}
        >
          Visual Design
        </p>
        <div className=" grid grid-cols-3 gap-x-[53px] gap-y-[106px]">
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
    </>
  );
};

export default AppyBitePage;
