import { LangArrow } from "components";

import Dropdown from "react-dropdown";
import { useLangDropdown } from "./useLangDropdown";

const LangDropdown: React.FC<{ className: string }> = ({ className }) => {
  const { router } = useLangDropdown();
  return (
    <div
      className={`flex flex-col text-orangeWhite ${className} cursor-pointer`}
    >
      <Dropdown
        className="text-orangeWhite"
        controlClassName=""
        onChange={(e) =>
          router.push(router.asPath, router.asPath, { locale: e.value })
        }
        arrowClosed={<LangArrow isOpen={false} />}
        arrowOpen={<LangArrow isOpen={true} />}
        value={router.locale}
        options={[
          {
            value: "en",
            label: "ENG",
            className: `${router.locale === "en" ? "hidden" : "block"}`,
          },
          {
            value: "ka",
            label: "GEO",
            className: `${router.locale === "ka" ? "hidden" : "block"}`,
          },
        ]}
      />
    </div>
  );
};

export default LangDropdown;
