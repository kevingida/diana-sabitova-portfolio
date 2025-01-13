import { bannerProps } from "@/interface/Interface";
import React from "react";
import { text } from "stream/consumers";
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
        className={`flex items-center w-full h-[73px] gap-[98px] 
          bg-${props.bgColour}  
          ${
            props.direction === "left"
              ? "animate-infinite-scroll-left"
              : "animate-infinite-scroll-right"
          }`}
      >
        {[...Array(repeat), ...Array(repeat)].map((e, i) => (
          <li key={i} className="flex items-center gap-[98px]">
            <div className="w-[17px] h-[17px]">
              <Startburst fill={props.textColour} />
            </div>
            <p
              className={`${clashDisplayMedium.className}, text-${props.textColour} text-[19px] text-nowrap uppercase`}
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
