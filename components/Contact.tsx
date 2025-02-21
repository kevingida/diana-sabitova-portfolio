import localFont from "next/font/local";
import Link from "next/link";
import ArrowUpRight from "./svg/ArrowUpRight";
import { contact } from "@/static/Static";

const clashDisplayMedium = localFont({
  src: "../font/ClashDisplay-Medium.otf",
});

const Contact = () => {
  return (
    <div
      className=" bg-purple max-w-screen-xl mx-auto w-full flex flex-col justify-center items-center py-[200px] gap-9 lg:gap-16"
      id="contacts"
    >
      <h3
        className={`${clashDisplayMedium.className} text-[70px] leading-[55px] lg:text-[120px] xl:text-[170px] lg:w-[900px] text-center uppercase lg:leading-[140px]`}
      >
        let&apos;s connect!
      </h3>
      <Link
        href={"mailto:diana.sabitova.dr@gmail.com"}
        className=" w-[336px] h-[78px] lg:w-[400px] lg:h-[92px] bg-black text-white font-semibold flex justify-center items-center gap-2 text-[16px] lg:text-[20px] rounded-[46px]"
      >
        diana.sabitova.dr@gmail.com
        <ArrowUpRight height={24} stroke="white" fill="white" />
      </Link>
      <div className="flex flex-row gap-8 pt-8 lg:pt-0">
        {contact.map((contact, index) => (
          <Link
            key={index}
            href={contact.link}
            target="_blank"
            className=" text-[14px] leading-[24px]"
          >
            {contact.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Contact;
