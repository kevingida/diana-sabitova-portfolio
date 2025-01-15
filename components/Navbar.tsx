"use client";
import React from "react";
import localFont from "next/font/local";
import useScreenSize from "@/lib/useScreenSize";
import Hamburger from "./svg/Hamburger";
import { navbarProps } from "@/interface/Interface";
import { navbarMenu } from "@/static/Static";
import Link from "next/link";
import { useRouter } from "next/navigation";
const bicubik = localFont({ src: "../font/Bicubik.otf" });

const Navbar: React.FC<navbarProps> = ({ color }) => {
  const { isMobile } = useScreenSize();
  const router = useRouter();
  return (
    <div className="flex flex-row justify-between items-center relative z-50 top-0 left-0 right-0 lg:h-60 px-4 py-[60px]  max-w-screen-xl mx-auto">
      <Link
        className={`${bicubik.className} text-${color} text-[24px] lg:text-[48px]`}
        href={"/"}
      >
        DIANA SABITOVA
      </Link>
      {isMobile ? (
        <button>
          <Hamburger stroke={color} />
        </button>
      ) : (
        <ul className=" flex flex-row gap-12 text-[20px] font-light">
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <Link
                href={`/#${menu.value}`}
                className={` text-${color} uppercase`}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
