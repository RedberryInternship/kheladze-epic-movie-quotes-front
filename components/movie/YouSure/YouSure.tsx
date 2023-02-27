import { RedBtn } from "components";
import { useTranslation } from "next-i18next";
import { YouSureProps } from "types";

const YouSure: React.FC<YouSureProps> = ({ close, confirm }) => {
  const { t } = useTranslation("common");
  return (
    <>
      <div className="rounded-xl w-360 h-56 z-60 flex flex-col items-center justify-between fixed bg-zinc-800 left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="mt-20 text-2xl">{t("you_sure")}</h1>
        <div className="w-full flex justify-between p-5">
          <button onClick={close}>{t("cancel")}</button>
          <RedBtn click={confirm} label={t("confirm")} />
        </div>
      </div>
      <div
        onClick={close}
        className="w-screen h-screen top-0 left-0 bg-black z-50 fixed bg-opacity-50"
      ></div>
    </>
  );
};

export default YouSure;
