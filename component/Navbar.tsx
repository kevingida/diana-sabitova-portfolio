import React from "react";
import localFont from "next/font/local";
const bicubik = localFont({ src: "../font/Bicubik.otf" });

const Navbar = () => {
  return (
    <div className=" flex flex-row justify-between fixed top-0 left-0 right-0 z-50 w-full bg-red-500 h-60">
      <div className={`${bicubik.className} text-[48px] z-50`}>
        DIANA SABITOVA
      </div>
      {/* `      <ul className=" flex flex-col">
        <li>FEATURED WORK</li>
        <li>ABOUT ME</li>
        <li>CONTACTS</li>
      </ul>` */}
    </div>
  );
};

export default Navbar;
