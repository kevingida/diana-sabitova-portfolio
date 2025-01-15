import Contact from "@/components/Contact";
import Cursor from "@/components/Cursor";
import Image from "next/image";

const GreenCarLanePage = () => {
  return (
    <>
      <div className=" max-w-screen-xl mx-auto bg-raisinBlack w-full flex flex-col items-center lg:px-[100px] xl:px-[120px]">
        <Cursor />
        <Image
          src="/greenCarLane-hero-desktop.png"
          alt="greenCarLane hero image"
          width={1680}
          height={994}
        />
        <div className="flex flex-row justify-between items-center w-full mt-12 mb-[120px] h-[720px] ">
          <div className=" lg:w-[770px] xl:w-[1041px] h-full bg-saladGreen rounded-[50px] lg:px-12 xl:px-[65px] lg:py-[60px] xl:py-[90px] text-darkPurple">
            <p className=" text-[24px] font-medium leading-[52px] pb-[58px]">
              A UX/UI Case Study
            </p>
            <p className=" lg:text-[48px] xl:text-[60px] leading-[60px] pb-[230px]">
              GreenCarLane Knowledge Hub Redesign
            </p>
            <div className="grid grid-cols-[170px_auto] gap-y-4 text-[24px]">
              <p>PERIOD</p>
              <p>2024</p>
              <p>ROLE</p>
              <p>Junior UX/UI Designer</p>
            </div>
          </div>
          <div className=" lg:w-[450px] xl:w-[615px] h-full bg-purple rounded-[50px] lg:px-12 xl:px-[60px] lg:py-[60px] xl:py-[90px] text-darkPurple flex flex-col gap-8">
            <p className=" text-[24px] leading-[36px]">Project Overview</p>
            <p className=" text-[#331386] lg:text-[20px] xl:text-[24px] leading-[36px]">
              As a junior UX/UI designer at GreenCarLane, I was tasked with
              redesigning the Press Release (Knowledge Hub) page to improve user
              experience and align with brand standards. The project focused on
              addressing inconsistencies in the footer, redesigning the content
              library layout, creating a standardized article template, and
              enhancing overall visual appeal.
            </p>
          </div>
        </div>
        <div className=" w-full flex flex-row justify-start items-start">
          <p className="text-white text-[30px] leading-[60px] w-[625px]">
            Problem Statement
          </p>
          <ul className="list-disc text-[#BCBCBC] text-[30px] leading-[47px]">
            <li>Inconsistent visual design with the main website</li>
            <li>Poor content organization and hierarchy</li>
            <li>Lack of a standardized article template</li>
            <li>Limited search and filtering capabilities</li>
            <li>Non-cohesive implementation of corporate color scheme</li>
            <li>
              Outdated footer design without newsletter subscription
              functionality
            </li>
          </ul>
        </div>
        <Image
          src="/greenCarLane-previous-design.png"
          alt="greenCarLane previous design"
          width={1680}
          height={994}
          className=" my-[90px]"
        />
        <div>
          <div className="flex-grow border-t border-[#D9D9D9]" />
          <div className=" w-full py-[80px] flex flex-row justify-start items-start">
            <p className=" min-w-[547px] text-[30px] leading-[60px] text-white">
              Goals
            </p>
            <ul className=" pl-8 list-decimal text-[#BCBCBC] text-[30px] leading-[47px]">
              <li>
                Create a unified design language aligned with
                GreenCarLane&apos;s brand identity
              </li>
              <li>Improve content discoverability and navigation</li>
              <li>Develop a scalable article template system</li>
              <li>
                Enhance user engagement through better content presentation
              </li>
              <li>
                Implement a modern footer design with newsletter integration
              </li>
            </ul>
          </div>
          <div className="flex-grow border-t border-[#D9D9D9]" />
          <div className=" w-full py-[80px] flex flex-row justify-start items-start">
            <p className=" min-w-[547px] text-[30px] leading-[60px] text-white">
              Process
            </p>
            <div className=" flex flex-col gap-[58px]">
              <p className="text-white text-[48px] leading-[60px]">
                Research and Analysis
              </p>
              <p className="text-[#BCBCBC] text-[30px] leading-[47px]">
                The design process began with a comprehensive analysis of the
                existing Press Release page and the company&apos;s digital
                ecosystem. Designers carefully examined the current
                implementation, identifying key areas that required improvement
                in visual consistency and user experience. The research phase
                involved a deep dive into GreenCarLane&apos;s brand identity,
                understanding the core messaging around electric vehicle
                insights and technology.
              </p>
            </div>
          </div>
          <div className="flex-grow border-t border-[#D9D9D9]" />
          <div className=" w-full py-[80px] flex flex-row justify-start items-start">
            <p className=" min-w-[547px] text-[30px] leading-[60px] text-white">
              Process
            </p>
            <div className=" flex flex-col gap-[58px]">
              <p className="text-white text-[48px] leading-[60px]">
                Lo-Fi Prototype and Visual Design Development
              </p>
              <p className="text-[#BCBCBC] text-[30px] leading-[47px]">
                This design phase is focused on creating a cohesive visual
                language that aligns with GreenCarLane&apos;s brand identity.
                They implemented a consistent color palette, typography, and
                design elements that reflect the company&apos;s modern and
                innovative approach to electric vehicle information. The
                redesign emphasized clean, accessible layouts that make complex
                EV information easy to digest.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/greenCarLane-process-design.png"
          alt="greenCarLane process design"
          width={1680}
          height={2603}
          className=" my-[90px]"
        />
        <div>
          <div className="flex-grow border-t border-[#D9D9D9]" />
          <div className=" w-full py-[80px] flex flex-row justify-start items-start">
            <p className=" min-w-[547px] text-[30px] leading-[60px] text-white">
              Process
            </p>
            <div className=" flex flex-col gap-[58px]">
              <p className="text-white text-[48px] leading-[60px]">
                Interaction and Prototype Creation
              </p>
              <p className="text-[#BCBCBC] text-[30px] leading-[47px]">
                A detailed prototype was developed to test the new Knowledge Hub
                design. This involved creating interactive mockups that
                demonstrated the flow between different sections, article
                layouts, and navigation elements. The team paid special
                attention to ensuring a smooth user experience across different
                devices and screen sizes.
              </p>
            </div>
          </div>
          <div className="flex-grow border-t border-[#D9D9D9]" />
          <div className=" w-full py-[80px] flex flex-row justify-start items-start">
            <p className=" min-w-[547px] text-[30px] leading-[60px] text-white">
              Progress
            </p>
            <div className=" flex flex-col gap-[58px]">
              <p className="text-white text-[48px] leading-[60px]">
                Final Implementation
              </p>
              <p className="text-[#BCBCBC] text-[30px] leading-[47px]">
                The final design was carefully prepared for development, with
                detailed specifications for layout, interactions, and responsive
                behavior. The team created comprehensive design guidelines to
                ensure consistent implementation across the GreenCarLane digital
                platform.
              </p>
            </div>
          </div>
        </div>
        <Image
          src="/greenCarLane-result-design.png"
          alt="greenCarLane result design"
          width={1680}
          height={4371}
          className=" my-[90px]"
        />
        <div className=" w-full py-[80px] flex flex-row justify-start items-start">
          <p className=" min-w-[547px] text-[30px] leading-[60px] text-white">
            Progress
          </p>
          <div className=" flex flex-col gap-2">
            <p className="text-[#BCBCBC] text-[30px] leading-[47px]">
              The redesigned Knowledge Hub showcases significant improvements:
            </p>
            <ul className=" pl-8 list-disc text-[#BCBCBC] text-[30px] leading-[47px]">
              <li>
                <span className=" font-bold">Consistent Footer:</span> The
                updated footer now includes a subscription field, aligning with
                the latest design version and improving user engagement
              </li>
              <li>
                <span className=" font-bold">Cohesive Content Library:</span>{" "}
                The new layout maintains visual consistency with the homepage
                while offering better content organization
              </li>
              <li>
                <span className=" font-bold">Standardized Article Pages:</span>
                The creation of an article template ensures a consistent user
                experience across all content
              </li>
              <li>
                <span className=" font-bold">Enhanced Visual Appeal:</span>{" "}
                Proper implementation of the corporate color palette and
                improved design elements create a more professional and visually
                appealing interface
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default GreenCarLanePage;
