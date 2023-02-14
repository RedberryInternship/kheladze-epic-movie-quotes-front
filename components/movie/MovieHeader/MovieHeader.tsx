import { Search, RedBtn } from "components";
import { useMovieHeader } from "./useMovieHeader";

const MovieHeader = () => {
  const { push, pathname, t, movies, locale } = useMovieHeader();
  return (
    <div className="w-full flex items-center justify-between md:pl-80 pl-5 mt-24 md:pt-8 pt-5 pr-9 md:pr-16">
      <div className="text-2xl font-medium">
        <h1>{t("my_list")}</h1>
        <h3 className="md:text-2xl text-base">
          ({t("total")}
          {movies.length})
        </h3>
      </div>
      <div className="flex gap-8 items-center">
        <button className="hidden md:flex gap-4 items-center">
          <Search />
          {t("search")}
        </button>
        <RedBtn
          className={`${
            locale === "en" ? "md:w-40 w-32" : "md:w-52 w-44"
          }  plus flex items-center justify-center gap-2 md:text-xl`}
          click={() => push(`${pathname}?add=movie`)}
          label={t("add_movie")}
        />
      </div>
    </div>
  );
};

export default MovieHeader;
