import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Bubble1 from "@/components/svg/Bubble1";
import Bubble2 from "@/components/svg/Bubble2";
import Introduction from "@/components/Introduction";
import Banner from "@/components/Banner";
import Project from "@/components/Project";

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
