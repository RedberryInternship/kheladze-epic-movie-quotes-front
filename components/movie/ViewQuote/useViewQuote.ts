import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { deleteQuote, fetchCSRFToken } from "services/axios";

export const useViewQuote = () => {
  const { back, query, pathname, push } = useRouter();
  const { t } = useTranslation("movie");
  const [sure, setSure] = useState(false);
  const { user, movies } = useSelector((store: RootState) => store.user);

  const quote =
    movies &&
    movies
      .find((movie) => movie.id === Number(query.movie))
      ?.quotes.find((quote) => quote.id === Number(query.viewquote));

  const quoteDelete = async () => {
    try {
      await fetchCSRFToken();
      await deleteQuote({ quoteId: quote?.id });
      setSure(false);
      push(`${pathname}?movie=${query.movie}`);
    } catch (error) {}
  };

  return {
    t,
    back,
    query,
    pathname,
    sure,
    setSure,
    user,
    movies,
    quote,
    quoteDelete,
  };
};
