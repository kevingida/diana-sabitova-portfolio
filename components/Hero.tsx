import localFont from "next/font/local";

const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

const Hero = () => {
  return (
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
  );
};

export default Hero;
