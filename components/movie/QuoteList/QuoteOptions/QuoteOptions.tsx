import { Pensil, ThreeDots, Trash, ViewQuoteIcon, YouSure } from "components";
import Link from "next/link";
import { QuoteOptionsProps } from "types";
import { useQuoteOptions } from "./useQuoteOptions";

const QuoteOptions: React.FC<QuoteOptionsProps> = ({ quote }) => {
  const { t, open, setOpen, router, quoteDelete } = useQuoteOptions(quote);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="self-start flex justify-end items-end lg:items-start absolute w-10 h-10 lg:top-8 lg:right-8 right-7 bottom-7 lg:bottom-auto"
      >
        <ThreeDots />
      </button>
      {router.query.delete === "quote" && (
        <YouSure confirm={quoteDelete} close={() => router.back()} />
      )}
      {open && (
        <>
          <div
            className={`flex flex-col pl-10 gap-8 justify-center w-60 h-48 bottom-4 right-9 xl:bottom-auto xl:top-12 xl:-right-32 bg-zinc-800 rounded-xl z-40 absolute`}
          >
            <Link
              href={`${router.asPath}&viewquote=${quote.id}`}
              className="flex items-center gap-4"
              onClick={() => setOpen(false)}
            >
              <ViewQuoteIcon />
              {t("view_quote")}
            </Link>

            <Link
              href={router.asPath + `&quote=edit&id=${quote.id}`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-4"
            >
              <Pensil />
              {t("edit")}
            </Link>
            <Link
              href={`${router.asPath}&delete=quote&id=${quote.id}`}
              onClick={() => {
                setOpen(false);
              }}
              className="flex items-center gap-4"
            >
              <Trash />
              {t("delete")}
            </Link>
          </div>
          <div
            onClick={() => setOpen(false)}
            className="w-full h-screen top-0 left-0 z-30 fixed"
          ></div>
        </>
      )}
    </>
  );
};

export default QuoteOptions;
