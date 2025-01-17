import localFont from "next/font/local";

const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

const Hero = () => {
  return (
    <section className="md:grid-rows-[80px_80px_15 0px] z-50 grid w-full grid-cols-1 px-4 pt-[200px] uppercase leading-none md:grid-cols-[300px_auto] md:gap-x-6 md:px-8 md:pt-[30px] lg:grid-cols-[390px_auto] lg:grid-rows-[120px_120px_120px] lg:gap-x-6 lg:px-[60px] xl:grid-cols-[490px_auto] xl:grid-rows-[170px_170px_170px] xl:px-[120px] xl:pt-[270px]">
      <h1
        className={`${clashDisplayMedium.className} z-10 col-span-2 text-[56px] tracking-tighter md:text-[80px] lg:text-[120px] lg:tracking-normal xl:text-[170px]`}
      >
        creating
      </h1>
      <h1
        className={`${clashDisplayMedium.className} z-10 col-span-2 text-[56px] tracking-tighter md:text-[80px] lg:text-[120px] lg:tracking-normal xl:text-[170px]`}
      >
        digital
      </h1>
      <h1
        className={`${clashDisplayMedium.className} z-10 col-start-1 row-start-3 text-[56px] tracking-tighter md:col-start-2 md:text-[80px] lg:text-[120px] lg:tracking-normal xl:text-[170px]`}
      >
        experiences
      </h1>
      <p
        className={`${dmSansRegular.className} z-10 row-start-4 ml-auto w-[266px] break-keep pt-12 text-[16px] leading-8 md:col-start-1 md:row-start-3 md:ml-0 md:w-full md:pt-0 md:text-[14px] lg:ml-0 lg:pt-0 lg:text-[20px] xl:text-[24px]`}
      >
        that satisfies your business needs, incorporates a user-centered
        approach, engaging visuals & world-class quality.
      </p>
    </section>
  );
};

export default Hero;
