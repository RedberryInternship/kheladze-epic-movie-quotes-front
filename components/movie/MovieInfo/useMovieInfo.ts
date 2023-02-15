import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useState } from "react";
import { deleteMovie, fetchCSRFToken } from "services/axios";

export const useMovieInfo = () => {
  const { query, locale, push, asPath } = useRouter();
  const { t } = useTranslation("movie");
  const [sure, setSure] = useState(false);
  const l = locale === "en" ? "en" : "ka";
  const { movies, genres } = useSelector((store: RootState) => store.user);
  const shownMovie = movies.find((movie) => movie.id === Number(query.movie));
  const movieDelete = async () => {
    try {
      await fetchCSRFToken();
      await deleteMovie({ movieId: shownMovie?.id });
      setSure(false);
      push("/movies");
    } catch (error) {}
  };
  return {
    query,
    locale,
    push,
    asPath,
    t,
    l,
    sure,
    setSure,
    movies,
    genres,
    shownMovie,
    movieDelete,
  };
};
