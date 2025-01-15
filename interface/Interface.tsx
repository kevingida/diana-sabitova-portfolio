export interface svgProps extends React.SVGProps<SVGSVGElement> {}

export interface bannerProps {
  text: string;
  textColour: string;
  bgColour: string;
  direction?: string;
}

export interface navbarProps {
  color: string;
  bgColor?: string;
}

export interface projectProps {
  handleCaseStudy: (boolean: boolean) => void;
}

export interface cursorProps {
  isCaseStudy: boolean;
}

export interface BackToProps {
  className: string;
}
