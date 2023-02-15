import { QuoteIcon } from "components";
import { useMovieList } from "./useMovieList";

const MovieList = () => {
  const { push, pathname, l, movies } = useMovieList();

  const list =
    movies &&
    movies.map((movie) => {
      if (movie.name)
        return (
          <div
            className="flex flex-col justify-between md:w-428 w-360 h-400 md:h-471"
            key={movie.id}
          >
            <div className="h-3/4 flex">
              <img
                className="rounded-xl h-full max-w-full max-h-full"
                src={movie.image}
                onClick={() => push(`${pathname}?movie=${movie.id}`)}
              />
            </div>
            <h2 className="text-2xl font-medium">{movie.name[l]}</h2>
            <h3 className="flex gap-3 items-center">
              {movie.quotes.length} <QuoteIcon />
            </h3>
          </div>
        );
    });

  return (
    <div
      className="w-screen lg:mt-14 mt-8 lg:pl-80 md:grid 2xl:grid-cols-3
                md:grid-cols-2 flex flex-col gap-14 justify-center items-center"
    >
      {list}
    </div>
  );
};

export default MovieList;
