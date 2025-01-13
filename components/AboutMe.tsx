import { aboutMe } from "@/static/Static";
import localFont from "next/font/local";
import Link from "next/link";

const dmSansLight = localFont({ src: "../font/DMSans-Light.ttf" });
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

const AboutMe = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-saladGreen relative overflow-hidden w-full flex flex-col px-[120px] py-[120px]">
      <div className="grid grid-cols-[566px_auto] grid-rows-[88px_auto_auto_auto]">
        <span className=" text-[20px] font-light">/02</span>
        <p
          className={`${dmSansLight.className} text-[20px] leading-[36px] uppercase`}
        >
          more about me
        </p>
        <p className="col-start-2 text-[45px] leading-[54px] uppercase pb-8">
          I’m a multi-disciplinary designer with 2+ years of experience located
          in Helsinki, Finland. A moderate perfectionist on a journey of
          constant learning. My mission is to focus on making a human-centric
          projects, harmonizing minimalism and brutalism.
        </p>
        <p
          className={`col-start-2 ${dmSansRegular.className} text-[45px] uppercase h-[267px]`}
        >
          My mission is to focus on making a human-centric projects, harmonizing
          minimalism and brutalism.
        </p>
        <span className=" text-[20px] font-light pb-[158px]">/03</span>
      </div>
      {aboutMe.map((content, index) => (
        <div key={index} className="grid grid-cols-[566px_auto] pb-[155px]">
          <h3 className={`${dmSansRegular.className} text-[35px] uppercase`}>
            {content.title}
          </h3>
          <ul>
            {content.list.map((list, index) => (
              <li
                className="text-[30px] leading-[54px] flex flex-col gap-[40px] pb-[40px] uppercase"
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
        className="flex self-center justify-center items-center uppercase w-[301px] h-[94px] bg-black text-white text-[30px] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)]"
      >
        my resume
      </Link>
      {/* <button className=" self-center uppercase w-[301px] h-[94px] bg-black text-white text-[30px] shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)]">
        my resume
      </button> */}
    </div>
  );
};

export default AboutMe;
