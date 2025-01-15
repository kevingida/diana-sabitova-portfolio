import React from "react";
import ArrowUpRight from "./svg/ArrowUpRight";
import { BackToProps } from "@/interface/Interface";

const BackToTop = (props: BackToProps) => {
  const isBrowser = () => typeof window !== "undefined";

  function scrollToTop() {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div
      className={`absolute w-full text-[20px] leading-[36px] flex flex-row justify-center items-center lg:justify-start gap-2 z-[9999] px-12 ${props.className}`}
    >
      <button
        onClick={scrollToTop}
        className="flex flex-row justify-center items-center gap-2"
      >
        BACK TO TOP <ArrowUpRight stroke="black" fill="black" />
      </button>
    </div>
  );
};

export default BackToTop;
