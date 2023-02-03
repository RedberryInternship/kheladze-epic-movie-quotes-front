import { DotProps } from "types";

const Dot: React.FC<DotProps> = ({ fill = "#9C9A9A" }) => {
  return (
    <svg
      width="4"
      height="5"
      viewBox="0 0 4 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="2" cy="2.5" r="2" fill={fill} />
    </svg>
  );
};

export default Dot;
