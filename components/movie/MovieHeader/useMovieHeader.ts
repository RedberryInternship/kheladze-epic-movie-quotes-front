import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { storeSearchedMovies } from "store";

export const useMovieHeader = () => {
  const { t } = useTranslation("movie");
  const movies = useSelector((store: RootState) => store.user.movies);
  const { push, pathname, locale } = useRouter();
  const dispatch = useDispatch();
  const [inputVal, setInputVal] = useState("");
  const [searching, setSearching] = useState(false);

  const l = locale === "en" ? "en" : "ka";

  useEffect(() => {
    dispatch(storeSearchedMovies(movies));
  }, [movies]);

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const searched = movies.filter((movie) => {
      if (movie.name) {
        return movie.name[l].includes(inputVal);
      }
    });
    dispatch(storeSearchedMovies(searched));
  };

  return {
    t,
    push,
    pathname,
    movies,
    locale,
    onSearchSubmit,
    inputVal,
    setInputVal,
    searching,
    setSearching,
  };
};
