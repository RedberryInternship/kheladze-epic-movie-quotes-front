import { Backdrop, Exit, SuccessIcon } from "components";
import { profileEn, profileKa } from "lang";
import { useRouter } from "next/router";

const Success: React.FC<{
  text?: string;
  className: string;
  close: () => void;
}> = ({ className, close }) => {
  const { locale } = useRouter();
  const { changes_updated } = locale === "en" ? profileEn : profileKa;
  return (
    <>
      <div
        className={`${className} bg-slate-300 text-green-900 p-5 flex items-center justify-between rounded w-360 z-40 fixed left-1/2 right-1/2 -translate-x-1/2`}
      >
        <SuccessIcon /> <p>{changes_updated}</p>
        <button onClick={close}>
          <Exit />
        </button>
      </div>
      <Backdrop click={close} />
    </>
  );
};

export default Success;
