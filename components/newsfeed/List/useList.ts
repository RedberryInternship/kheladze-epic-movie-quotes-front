import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "services/axios";
import { RootState, storeQuotes } from "store";

export const useList = () => {
  const { quotes, user } = useSelector((store: RootState) => store.user);
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { quotes: prevQuotes, searchTerm } = useSelector(
    (store: RootState) => store.user
  );

  const fetchQuotes = async (initial?: boolean) => {
    if (!searchTerm || searchTerm.length < 2) {
      const quote = await getQuotes(`/api/quote?page=${page}`);
      if (initial) {
        dispatch(storeQuotes(quote.data));
      } else {
        dispatch(storeQuotes([...prevQuotes, ...quote.data]));
      }
      setPage(page + 1);
    }
  };

  useEffect(() => {
    fetchQuotes(true);
  }, []);
  return {
    quotes,
    user,
    dispatch,
    prevQuotes,
    searchTerm,
    page,
    setPage,
    fetchQuotes,
  };
};
