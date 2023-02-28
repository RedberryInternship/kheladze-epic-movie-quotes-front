import { Search, WriteNewQuoteIcon } from "components";
import Link from "next/link";
import { useNewsHeader } from "./useNewsHeader";

const NewsHeader = () => {
  const { t, pathname, setInputVal, searching, setSearching, onSearchSubmit } =
    useNewsHeader();
  const placeholder = t("search");

  return (
    <div className="mt-8 mb-6 md:text-xl pr-4 flex items-center gap-7 justify-between w-full xl:w-1000 lg:w-601">
      <Link
        href={`${pathname}?add=quote`}
        className={`${
          searching ? "w-56" : "w-778"
        } lg:bg-zinc-800 bg-inherit flex items-center gap-4 h-14 rounded-md pl-4`}
      >
        <WriteNewQuoteIcon /> {t("write_new")}
      </Link>
      {searching ? (
        <div className="w-688 hidden md:flex items-center gap-4">
          <Search />
          <form className="w-full" onSubmit={onSearchSubmit}>
            <input
              onChange={(e) => setInputVal(e.target.value)}
              placeholder={placeholder}
              className="w-full h-10 bg-inherit border-b border-gray-300 border-opacity-30 focus:outline-none"
              type="text"
            />
          </form>
          <button onClick={() => setSearching(false)}>{t("cancel")}</button>
        </div>
      ) : (
        <button
          onClick={() => setSearching(true)}
          className={` text-gray-300 hidden md:flex items-center gap-4`}
        >
          <Search />
          {t("search_by")}
        </button>
      )}
    </div>
  );
};

export default NewsHeader;
