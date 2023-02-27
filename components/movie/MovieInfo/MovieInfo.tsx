import { AddMovieModal, Pensil, QuoteList, Trash, YouSure } from "components";
import { useMovieInfo } from "./useMovieInfo";

const MovieInfo = () => {
  const {
    query,
    push,
    asPath,
    t,
    l,
    sure,
    setSure,
    genres,
    shownMovie,
    movieDelete,
  } = useMovieInfo();

  const movieGenres = genres
    .filter((genre) => shownMovie?.genres.includes(genre.id))
    .map((gnr) => (
      <p
        className="flex items-center pl-3 pr-3 rounded-md h-8 font-bold text-lg bg-gray-500"
        key={gnr.id}
      >
        {gnr.genre}
      </p>
    ));

  return (
    <div className=" md:pl-80 pl-8 pr-8 mt-24 pt-8">
      {shownMovie?.description && (
        <>
          <div className="flex lg:flex-row items-start flex-col">
            <div className="flex items-center lg:w-809 w-full h-96 lg:h-441 lg:mr-6 mb-6">
              <img
                className="rounded-xl max-w-full max-h-full w-full"
                src={shownMovie.image}
              />
            </div>
            <div className="flex flex-col gap-6">
              <h1 className="flex justify-between text-orangeWhite lg:text-3xl text-2xl font-medium">
                <span>
                  {shownMovie.name[l]} {`(${shownMovie.year})`}
                </span>
                <span className="hidden lg:flex rounded-lg w-36 h-10 justify-around items-center bg-zinc-800">
                  <button
                    onClick={() => push(asPath + "&edit=movie")}
                    className="flex justify-center border-r border-gray-500 w-1/2"
                  >
                    <Pensil />
                  </button>
                  <button
                    onClick={() => setSure(true)}
                    className="w-1/2 flex justify-center"
                  >
                    <Trash />
                  </button>
                </span>
              </h1>
              <div className="w-full flex gap-2 flex-wrap">{movieGenres}</div>
              <div className="text-lg flex gap-2">
                <h1 className="font-bold">
                  {t("director")}
                  {":"}
                </h1>
                <h2>{shownMovie.director[l]}</h2>
              </div>
              <div className="text-lg flex gap-2">
                <h1 className="font-bold">
                  {t("budget")}
                  {":"}
                </h1>
                <h2>{`${shownMovie.budget}$`}</h2>
              </div>
              <p className="lg:w-528 w-full text-gray-300 text-lg">
                {shownMovie.description[l]}
              </p>
            </div>
          </div>
          {shownMovie?.quotes && <QuoteList quotes={shownMovie?.quotes} />}
        </>
      )}
      {sure && <YouSure confirm={movieDelete} close={() => setSure(false)} />}
      {query.edit === "movie" && <AddMovieModal />}
    </div>
  );
};

export default MovieInfo;
