import { Search, RedBtn } from "components";
import { useMovieHeader } from "./useMovieHeader";

const MovieHeader = () => {
  const {
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
  } = useMovieHeader();

  return (
    <div className="w-full flex items-center justify-between md:pl-80 pl-5 mt-24 md:pt-8 pt-5 pr-9 md:pr-16">
      <div className="text-2xl font-medium">
        <h1>{t("my_list")}</h1>
        <h3 className="md:text-2xl text-base">
          ({t("total")}
          {movies.length})
        </h3>
      </div>
      {searching && (
        <form onSubmit={onSearchSubmit}>
          <input
            onChange={(e) => setInputVal(e.target.value)}
            value={inputVal}
            type="text"
            className="w-601 text-xl bg-inherit focus:outline-none border-b border-zinc-100 border-opacity-30
         h-9 pl-5 placeholder:text-gray-500"
          />
        </form>
      )}

      <div className="flex gap-8 items-center">
        {searching ? (
          <button onClick={() => setSearching(false)}>{t("cancel")}</button>
        ) : (
          <button
            onClick={() => setSearching(true)}
            className="hidden md:flex gap-4 items-center"
          >
            <Search />
            {t("search")}
          </button>
        )}

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
