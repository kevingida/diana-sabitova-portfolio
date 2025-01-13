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
      <Bubble3
        width={804}
        height={1213}
        className="absolute top-[5250px] -right-20 z-50"
      />
      <Bubble4
        width={804}
        height={1213}
        className="absolute bottom-0 -left-40 z-50"
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
