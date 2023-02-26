import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getQuotes } from "services/axios";
import { RootState, storeQuotes } from "store";

export const useList = () => {
  const { quotes, user } = useSelector((store: RootState) => store.user);
  const { push } = useRouter();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const { quotes: prevQuotes, searchTerm } = useSelector(
    (store: RootState) => store.user
  );

  const fetchQuotes = async (initial?: boolean) => {
    try {
      if (!searchTerm || searchTerm.length < 2) {
        const quote = await getQuotes(`/api/quote?page=${page}`);
        if (initial) {
          dispatch(storeQuotes(quote.data));
        } else {
          dispatch(storeQuotes([...prevQuotes, ...quote.data]));
        }
        setPage(page + 1);
      }
    } catch (error) {
      push("/401");
    }
  };

  useEffect(() => {
    try {
      fetchQuotes(true);
    } catch (error) {
      push("/401");
    }
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
