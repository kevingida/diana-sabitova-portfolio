"use client";
import React from "react";
import localFont from "next/font/local";
import useScreenSize from "@/lib/useScreenSize";
import Hamburger from "./svg/Hamburger";
import { navbarProps } from "@/interface/Interface";
import { navbarMenu } from "@/static/Static";
const bicubik = localFont({ src: "../font/Bicubik.otf" });

const Navbar: React.FC<navbarProps> = ({ handleScroll }) => {
  const { isMobile } = useScreenSize();
  return (
    <div className=" flex flex-row justify-between items-center sticky top-0 left-0 right-0 lg:h-60 px-4 py-[60px] lg:px-[60px] xl:px-[120px] xl:py-[115px]  max-w-screen-xl mx-auto">
      <div className={`${bicubik.className} text-[24px] lg:text-[48px]`}>
        DIANA SABITOVA
      </div>
      {isMobile ? (
        <button>
          <Hamburger />
        </button>
      ) : (
        <ul className=" flex flex-row gap-12 text-[20px] font-light">
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <button
                onClick={async () => handleScroll && handleScroll(menu.value)}
                className="uppercase"
              >
                {menu.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
