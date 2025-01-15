import { BackToProps } from "@/interface/Interface";
import React from "react";
import ArrowUpRight from "./svg/ArrowUpRight";
import Link from "next/link";

const BackToHomepage = (props: BackToProps) => {
  return (
    <div
      className={`absolute w-full text-[20px] leading-[36px] flex flex-row justify-center items-center lg:justify-start gap-2 z-[9999] px-12 ${props.className}`}
    >
      <Link
        href={"/"}
        className="flex flex-row justify-center items-center gap-2"
      >
        BACK TO HOMEPAGE <ArrowUpRight stroke="black" fill="black" />
      </Link>
    </div>
  );
};

export default BackToHomepage;
