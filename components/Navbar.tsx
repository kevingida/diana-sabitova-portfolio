"use client";
import React, { useState } from "react";
import localFont from "next/font/local";
import useScreenSize from "@/lib/useScreenSize";
import Hamburger from "./svg/Hamburger";
import { navbarProps } from "@/interface/Interface";
import { navbarMenu } from "@/static/Static";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Close from "./svg/Close";
const bicubik = localFont({ src: "../font/Bicubik.otf" });

const Navbar: React.FC<navbarProps> = ({ color, bgColor }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

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
          <Hamburger stroke={color} onClick={toggleMenu} />
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
      <div
        className={`fixed top-0 left-0 h-full bg-${bgColor} z-[8888] px-4 pt-12 flex flex-col gap-4 items-start justify-start transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform w-full lg:hidden`}
      >
        <div className="flex flex-row justify-between items-center w-full">
          <Link
            className={`${bicubik.className} text-${color} text-[24px] lg:text-[48px]`}
            href={"/"}
          >
            DIANA SABITOVA
          </Link>
          <button onClick={closeMenu} className=" top-4 right-4">
            <Close stroke={color} />
          </button>
        </div>
        <ul className=" flex flex-col justify-center items-center w-full pt-24 gap-12 text-[20px] font-light">
          {navbarMenu.map((menu, index) => (
            <li key={index}>
              <Link
                href={`/#${menu.value}`}
                className={` text-${color} uppercase`}
                onClick={closeMenu}
              >
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
