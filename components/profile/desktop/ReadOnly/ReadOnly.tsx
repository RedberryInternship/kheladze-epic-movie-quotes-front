import { NotVerified, Verified } from "components";
import { ReadOnlyProps } from "types";

const ReadOnly: React.FC<ReadOnlyProps> = ({
  placeholder,
  label,
  className,
}) => {
  return (
    <div className="mb-2">
      <p className="h-8">{label}</p>
      <div
        className={`${className} w-528 flex justify-between items-center rounded-md h-12 pl-5 p-3`}
      >
        {placeholder} {className.includes("bg-green-700") && <Verified />}
        {className.includes("bg-amber-500") && <NotVerified />}
      </div>
    </div>
  );
};

export default ReadOnly;
