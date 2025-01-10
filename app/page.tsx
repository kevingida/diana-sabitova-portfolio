import ArrowDownRight from "@/component/svg/ArrowDownRight";
import Bubble1 from "@/component/svg/Bubble1";
import Bubble2 from "@/component/svg/Bubble2";
import localFont from "next/font/local";
const bicubik = localFont({ src: "../font/Bicubik.otf" });
const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

export default function Home() {
  return (
    <div className=" max-w-screen-xl mx-auto bg-purple relative overflow-hidden w-full">
      <div className=" flex flex-row justify-between items-center fixed top-0 left-0 right-0 z-50 h-60 px-[120px] py-[115px]  max-w-screen-xl mx-auto">
        <div className={`${bicubik.className} text-[48px]`}>DIANA SABITOVA</div>
        <ul className=" flex flex-row gap-12 text-[20px] font-light">
          <li>FEATURED WORK</li>
          <li>ABOUT ME</li>
          <li>CONTACTS</li>
        </ul>
      </div>
      <Bubble1
        width={1404}
        height={1813}
        className="absolute -top-60 -left-0"
      />
      <Bubble2
        width={1404}
        height={1813}
        className="absolute top-[1500px] -right-80"
      />
      <section className=" w-full px-[120px] pt-[269px] z-50 grid grid-cols-[490px_auto] grid-rows-[170px_170px_170px] gap-x-6 leading-none uppercase">
        <h1
          className={`${clashDisplayMedium.className} text-[170px] z-10 col-span-2`}
        >
          creating
        </h1>
        <h1
          className={`${clashDisplayMedium.className} text-[170px] z-10 col-span-2`}
        >
          digital
        </h1>
        <h1
          className={`${clashDisplayMedium.className} text-[170px] z-10 col-start-2 row-start-3`}
        >
          experiences
        </h1>
        <p
          className={`${dmSansRegular.className} text-[24px]  z-10 col-start-1 row-start-3 leading-8 break-keep`}
        >
          that satisfies your business needs, incorporates a user-centered
          approach, engaging visuals & world-class quality.
        </p>
      </section>
      <section className=" w-full px-[120px] pt-[128px]">
        <div className=" flex flex-row justify-start items-center gap-8">
          <p className={`${dmSansRegular.className} text-[24px] uppercase`}>
            scroll to explore
          </p>
          <ArrowDownRight height={36} />
        </div>
        <div className="pt-[80px] pb-[164px] flex flex-nowrap flex-row gap-12 overflow-x-auto snap-x snap-mandatory">
          <div
            style={{ backgroundImage: "url('/Union.svg')" }}
            className=" w-[400px] h-[500px] flex-none snap-always snap-center z-50 px-[40px] py-[80px]"
          >
            <img
              src="/dianaPhoto.png"
              alt="Diana Photo"
              width={125}
              height={125}
            />
            <p>Hello, I’m Diana Sabitova</p>
            <div className="flex-grow border-t border-gray-400"></div>
            <p>[ UX/UI Designer ]</p>
          </div>
          <div
            style={{ backgroundImage: "url('/Union.svg')" }}
            className=" min-w-[400px] h-[500px] flex-none snap-always snap-center z-50"
          ></div>
          <div
            style={{ backgroundImage: "url('/Union.svg')" }}
            className=" min-w-[400px] h-[500px] flex-none snap-always snap-center z-50"
          ></div>
          <div
            style={{ backgroundImage: "url('/Union.svg')" }}
            className=" min-w-[400px] h-[500px] flex-none snap-always snap-center z-50"
          ></div>
          <div
            style={{ backgroundImage: "url('/Union.svg')" }}
            className=" min-w-[400px] h-[500px] flex-none snap-always snap-center z-50"
          ></div>
        </div>
      </section>
    </div>
  );
}
