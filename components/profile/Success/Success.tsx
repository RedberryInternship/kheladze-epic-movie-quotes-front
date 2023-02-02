import { Backdrop, Exit, SuccessIcon } from "components";
import { useTranslation } from "next-i18next";

const Success: React.FC<{
  className: string;
  close: () => void;
}> = ({ className, close }) => {
  const { t } = useTranslation("profile");

  return (
    <>
      <div
        className={`${className} bg-slate-300 text-green-900 p-5 flex items-center justify-between rounded w-360 z-40 fixed left-1/2 right-1/2 -translate-x-1/2`}
      >
        <SuccessIcon /> <p>{t("changes_updated")}</p>
        <button onClick={close}>
          <Exit />
        </button>
      </div>
      <Backdrop click={close} />
    </>
  );
};

export default Success;
