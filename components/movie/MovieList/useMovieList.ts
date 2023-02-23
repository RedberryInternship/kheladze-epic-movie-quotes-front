import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "store";
export const useMovieList = () => {
  const { locale, push, pathname } = useRouter();
  const l = locale === "en" ? "en" : "ka";
  const movies = useSelector((store: RootState) => store.user.searchedMovies);
  return { push, pathname, l, movies };
};
