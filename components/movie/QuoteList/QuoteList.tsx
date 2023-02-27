import {
  CommentsIcon,
  LikesIcon,
  QuoteModal,
  QuoteOptions,
  RedBtn,
  ViewQuote,
} from "components";

import { QuoteListProps } from "types";
import { useQuoteList } from "./useQuoteList";

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  const { t, l, push, asPath, query } = useQuoteList();

  const list = quotes.map((quote) => (
    <div
      key={quote.id}
      className="bg-black lg:pl-8 lg:pr-8 pl-6 pr-6 pt-6 bg-opacity-40 flex flex-col lg:w-809 rounded-xl relative"
    >
      <div className="flex pb-6 lg:flex-row lg:gap-9 gap-6 flex-col items-center text-gray-300 text-2xl italic">
        <img className="rounded-md md:w-56 w-screen" src={quote.image} />
        <p>{`"${quote.quote[l]}"`}</p>
      </div>

      <div className="text-xl flex items-center lg:h-20 h-16 border-t border-gray-300 gap-6 lg:gap-8">
        <button className="flex lg:gap-4 gap-3">
          {quote.comments.length}
          <CommentsIcon className="lg:w-8 w-6" />
        </button>
        <button className="flex lg:gap-4 gap-3">
          {quote.likes.length}
          <LikesIcon className="lg:w-8 w-6" />
        </button>
      </div>
      <QuoteOptions quote={quote} />
    </div>
  ));

  return (
    <div className="mt-10">
      <div className="flex md:items-center flex-col-reverse md:flex-row">
        <p className="text-2xl font-semibold border-t md:border-0 md:border-r border-gray-300 md:pr-4 md:pt-0 pt-10">
          {t("quotes")} {quotes.length} {t("total")}
        </p>
        <RedBtn
          click={() => push(asPath + `&quote=add`)}
          className="md:ml-4 h-12 w-48 md:mb-0 mb-10 plus flex items-center justify-center gap-2 p-2"
          label={t("add_quote")}
        />
      </div>
      <div className="flex flex-col gap-9 lg:mt-14 mt-9">{list}</div>
      {query.quote && <QuoteModal />}
      {query.viewquote && <ViewQuote />}
    </div>
  );
};

export default QuoteList;
