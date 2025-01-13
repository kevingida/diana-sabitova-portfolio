import React from "react";
import localFont from "next/font/local";
const bicubik = localFont({ src: "../font/Bicubik.otf" });

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between items-center sticky top-0 left-0 right-0 h-60 px-[120px] py-[115px]  max-w-screen-xl mx-auto">
      <div className={`${bicubik.className} text-[48px]`}>DIANA SABITOVA</div>
      <ul className=" flex flex-row gap-12 text-[20px] font-light">
        <li>FEATURED WORK</li>
        <li>ABOUT ME</li>
        <li>CONTACTS</li>
      </ul>
    </div>
  );
};

export default Navbar;
