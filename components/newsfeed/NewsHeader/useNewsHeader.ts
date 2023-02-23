import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getQuotes } from "services/axios";
import { storeQuotes, storeSearchTerm } from "store";

export const useNewsHeader = () => {
  const { t } = useTranslation("newsfeed");
  const { locale, pathname } = useRouter();
  const l = locale === "en" ? "en" : "ka";
  const [inputVal, setInputVal] = useState("");
  const [searching, setSearching] = useState(false);
  const dispatch = useDispatch();

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searchedQuotes = await getQuotes(1, inputVal);
    dispatch(storeQuotes(searchedQuotes.data));
    dispatch(storeSearchTerm(inputVal));
  };
  useEffect(() => {
    if (!searching) {
      dispatch(storeSearchTerm(""));
    }
  }, [searching]);

  return {
    t,
    pathname,
    setInputVal,
    searching,
    setSearching,
    onSearchSubmit,
  };
};
