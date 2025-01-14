import { bannerProps } from "@/interface/Interface";
import React from "react";
import Startburst from "./svg/Starburst";
import localFont from "next/font/local";

const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});

const Banner = (props: bannerProps) => {
  const repeat = 10;
  return (
    <div className={`bg-${props.bgColour} overflow-hidden z-50 flex`}>
      <ul
        className={`flex items-center w-full h-[46px] gap-[41px] lg:h-[73px] lg:gap-[98px] 
          bg-${props.bgColour}  
          ${
            props.direction === "left"
              ? "animate-infinite-scroll-left"
              : "animate-infinite-scroll-right"
          }`}
      >
        {[...Array(repeat), ...Array(repeat)].map((e, i) => (
          <li key={i} className="flex items-center gap-[41px] lg;gap-[98px]">
            <div className=" w-3 h-3 lg:w-[17px] lg:h-[17px]">
              <Startburst fill={props.textColour} />
            </div>
            <p
              className={`${clashDisplayMedium.className}, text-${props.textColour} text-[12px] lg:text-[19px] text-nowrap uppercase`}
            >
              {props.text}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Banner;
