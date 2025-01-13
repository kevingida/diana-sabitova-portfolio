import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Bubble1 from "@/components/svg/Bubble1";
import Bubble2 from "@/components/svg/Bubble2";
import Introduction from "@/components/Introduction";
import localFont from "next/font/local";
import ArrowDownRight from "@/components/svg/ArrowDownRight";
import ArrowRight from "@/components/svg/ArrowRight";
import { introduction } from "@/static/Static";
import Banner from "@/components/Banner";
import Startburst from "@/components/svg/Starburst";
import Project from "@/components/Project";
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });
const robotoRegular = localFont({ src: "../font/Roboto-Regular.ttf" });
const dosisSemibold = localFont({ src: "../font/Dosis-SemiBold.otf" });
const dosisRegular = localFont({ src: "../font/Dosis-Regular.otf" });
const dosisMedium = localFont({ src: "../font/Dosis-Medium.otf" });
const bicubik = localFont({ src: "../font/Bicubik.otf" });
const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});

export default function Home() {
  return (
    <div className=" max-w-screen-xl mx-auto bg-purple relative overflow-hidden w-full">
      <Bubble1
        width={1404}
        height={1813}
        z={-1}
        className="absolute -top-60 -left-0"
      />
      <Bubble2
        width={1404}
        height={1813}
        z={-1}
        className="absolute top-[1500px] -right-80"
      />
      <Navbar />
      <Hero />
      <Introduction />
      <Banner
        bgColour="saladGreen"
        text="featured work"
        textColour="lightBlack"
        direction="left"
      />
      <Project />
      <Banner
        bgColour="black"
        text="about me"
        textColour="white"
        direction="right"
      />
    </div>
  );
}
