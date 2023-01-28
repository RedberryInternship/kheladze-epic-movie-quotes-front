import { LangArrow } from "components";

import { useRouter } from "next/router";

import Dropdown from "react-dropdown";

const LangDropdown: React.FC<{ className: string }> = ({ className }) => {
  const router = useRouter();
  return (
    <div
      className={`flex flex-col text-orangeWhite ${className} cursor-pointer`}
    >
      <Dropdown
        className="text-orangeWhite"
        controlClassName=""
        onChange={(e) =>
          router.push(router.pathname, router.pathname, { locale: e.value })
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
