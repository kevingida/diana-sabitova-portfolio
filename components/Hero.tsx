import localFont from "next/font/local";

const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});
const dmSansRegular = localFont({ src: "../font/DMSans-Regular.ttf" });

const Hero = () => {
  return (
    <section className=" w-full px-4 pt-[200px] lg:px-[60px] xl:px-[120px] xl:pt-[270px] z-50 grid grid-cols-1 lg:grid-cols-[390px_auto] xl:grid-cols-[490px_auto] lg:grid-rows-[120px_120px_120px] xl:grid-rows-[170px_170px_170px] lg:gap-x-6 leading-none uppercase">
      <h1
        className={`${clashDisplayMedium.className} text-[56px] tracking-tighter lg:tracking-normal lg:text-[120px] xl:text-[170px] z-10 col-span-2`}
      >
        creating
      </h1>
      <h1
        className={`${clashDisplayMedium.className}  text-[56px] tracking-tighter lg:tracking-normal lg:text-[120px] xl:text-[170px] z-10 col-span-2`}
      >
        digital
      </h1>
      <h1
        className={`${clashDisplayMedium.className}  text-[56px] tracking-tighter lg:tracking-normal lg:text-[120px] xl:text-[170px] z-10 col-start-1 lg:col-start-2 row-start-3`}
      >
        experiences
      </h1>
      <p
        className={`${dmSansRegular.className} text-[16px] w-[266px] pt-12 lg:pt-0 ml-auto lg:ml-0 lg:w-full lg:text-[20px] xl:text-[24px]  z-10 row-start-4 lg:col-start-1 lg:row-start-3 leading-8 break-keep`}
      >
        that satisfies your business needs, incorporates a user-centered
        approach, engaging visuals & world-class quality.
      </p>
    </section>
  );
};

export default Hero;
