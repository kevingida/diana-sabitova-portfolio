"use client";
import React, { useEffect, useState } from "react";
import "../app/globals.css";
import localFont from "next/font/local";

const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  const handleMouseMove = (e: { clientX: any; clientY: any; target: any }) => {
    setPosition({ x: e.clientX, y: e.clientY });

    const target = e.target;

    setIsPointer(
      window.getComputedStyle(target, ":before").getPropertyValue("content") ===
        `"caseStudy"`
    );
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 120 : 60;

  const cursorStyle = isPointer ? { left: "-100px", top: "-100px" } : {};

  return (
    <div
      className={`cursor ${isPointer ? "pointer" : ""} ${
        dmSansRegular.className
      } text-[20px] flex items-center justify-center text-center`}
      style={{
        ...cursorStyle,
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    >
      <p
        className={` transition-all ease-in-out duration-200 min-w-32 ${
          isPointer ? "opacity-100" : `opacity-0`
        }`}
      >
        View the Case Study
      </p>
    </div>
  );
};

export default Cursor;
