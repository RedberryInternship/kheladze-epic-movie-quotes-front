import { Backdrop, RedBtn } from "components";
import { SureProps } from "types";
import { useSure } from "./useSure";

const Sure: React.FC<SureProps> = ({ confirm }) => {
  const { t, back } = useSure();

  return (
    <>
      <div className="rounded-xl w-360 h-56 z-40 flex flex-col justify-between fixed bg-zinc-800 left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
        <p className="mt-16 text-center">{t("are_u_sure")}</p>
        <div className="pr-5 pl-5 h-20 flex justify-between items-center border-t border-gray-300 border-opacity-20">
          <button onClick={back}>{t("cancel")}</button>
          <RedBtn click={confirm} label={t("confirm")} />
        </div>
      </div>
      <Backdrop click={back} />
    </>
  );
};

export default Sure;
