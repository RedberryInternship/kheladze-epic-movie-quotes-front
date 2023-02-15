import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const useMovieHeader = () => {
  const { t } = useTranslation("movie");
  const movies = useSelector((store: RootState) => store.user.movies);
  const { push, pathname, locale } = useRouter();

  return { t, push, pathname, movies, locale };
};
