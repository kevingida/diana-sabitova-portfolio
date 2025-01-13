import { svgProps } from "@/interface/Interface";

const ArrowRight = (props: svgProps) => {
  return (
    <svg
      width="50"
      height="47"
      viewBox="0 0 50 47"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M48.4043 23.2017L2.00042 23.2017"
        stroke="black"
        strokeWidth="2.1875"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.6163 41.9897L48.4043 23.2017L29.6162 4.41361"
        stroke="black"
        strokeWidth="2.1875"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
