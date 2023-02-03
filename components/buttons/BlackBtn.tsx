import { BlackBtnProps } from "types";

const BlackBtn: React.FC<BlackBtnProps> = ({ label, click, className }) => {
  return (
    <button
      onClick={click}
      className={`${className} w-24 h-10 border border-white text-white rounded bg-inherit`}
    >
      {label}
    </button>
  );
};

export default BlackBtn;
