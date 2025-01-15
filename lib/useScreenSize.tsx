"use client";
import { useEffect, useState } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 1920,
    height: 0,
  });
  const isMobile = screenSize.width < 768;
  const isTablet = screenSize.width < 1440;
  const isLarge = screenSize.width < 1920;
  const isXLarge = screenSize.width >= 1920;

  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return { screenSize, isMobile, isTablet, isLarge, isXLarge };
};

export default useScreenSize;
