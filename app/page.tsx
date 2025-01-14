import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Bubble1 from "@/components/svg/bubble/Bubble1";
import Bubble2 from "@/components/svg/bubble/Bubble2";
import Bubble3 from "@/components/svg/bubble/Bubble3";
import Introduction from "@/components/Introduction";
import Banner from "@/components/Banner";
import Project from "@/components/Project";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Bubble4 from "@/components/svg/bubble/Bubble4";

export default function Home() {
  return (
    <div className=" max-w-screen-xl mx-auto bg-purple relative overflow-hidden w-full">
      <Bubble1
        z={-1}
        className="absolute -top-60 -left-0 lg:w-[1004px] lg:h-[1413px] xl:w-[1404px] xl:h-[1813px]"
      />
      <Bubble2
        z={-1}
        className="absolute top-[1500px] -right-80  lg:w-[1004px] lg:h-[1413px] xl:w-[1404px] xl:h-[1813px]"
      />
      <Bubble3 className="absolute lg:top-[4500px] lg:-right-40 xl:top-[5250px] xl:-right-20 z-50 xl:w-[804px] xl:h-[1213px]" />
      <Bubble4
        width={804}
        height={1213}
        className="absolute lg:bottom-[100px] xl:bottom-0 lg:-left-[100px] xl:-left-40 z-50 lg:w-[604px] lg:h-[1013px] xl:w-[804px] xl:h-[1213px]"
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
      <AboutMe />
      <Contact />
    </div>
  );
}
