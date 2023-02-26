import { Plus } from "components";
import { RedBtnProps } from "types";

const RedBtn: React.FC<RedBtnProps> = ({
  className = "w-28",
  label,
  click,
  link,
}) => {
  return (
    <button
      onClick={click}
      className={`bg-red-600 h-10 rounded text-white text-base relative ${className}`}
    >
      {className.includes("plus") && <Plus />}
      {label}
      {link && (
        <a
          href={`https://${link}`}
          target="_blank"
          rel="noreferrer"
          className="absolute w-full h-full opacity-0 left-0 top-0 bg-green-500"
        >
          linki
        </a>
      )}
    </button>
  );
};

export default RedBtn;
