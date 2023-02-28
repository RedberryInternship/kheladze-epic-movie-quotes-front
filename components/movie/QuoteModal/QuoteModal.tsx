import {
  Backdrop,
  ChangePhoto,
  Close,
  Input,
  Photo,
  RedBtn,
  Trash,
  YouSure,
} from "components";
import { useQuoteModal } from "./useQuoteModal";

const QuoteModal = () => {
  const {
    user,
    genres,
    currentImage,
    setCurrentImage,
    l,
    t,
    back,
    query,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    onFormSubmit,
    restRegister,
    shownMovie,
    action,
    quoteDelete,
    sure,
    setSure,
  } = useQuoteModal();

  const movieGenres = genres
    .filter((genre) => shownMovie?.genres.includes(genre.id))
    .map((gnr) => (
      <p
        className="flex items-center pl-3 pr-3 rounded-sm md:h-8 md:text-lg text-sm h-5 bg-gray-500"
        key={gnr.id}
      >
        {gnr.genre}
      </p>
    ));

  return (
    <>
      {sure && <YouSure close={() => setSure(false)} confirm={quoteDelete} />}
      <div className="pl-8 pr-8 rounded-xl text-white lg:w-961 w-screen md:top-36 top-0 z-40 flex flex-col absolute bg-zinc-800 left-1/2 right-1/2 -translate-x-1/2">
        <header className="relative h-24 flex flex-col items-center justify-center border-b border-gray-300 border-opacity-20">
          {query.quote === "edit" && (
            <button
              onClick={() => setSure(true)}
              className="absolute left-5 flex items-center gap-2"
            >
              <Trash />
              <span className="hidden md:block">{t("delete")}</span>
            </button>
          )}
          {action}
          <Close className="absolute h-full right-0" click={back} />
        </header>

        {query.quote === "add" && movieGenres && shownMovie && (
          <div className="flex flex-col mt-8 mb-8 gap-6">
            <div className="flex gap-4 items-center">
              <img
                className="rounded-full md:w-14 md:h-14 w-10 h-10"
                src={
                  user.image.includes("users") || user.google_id
                    ? user.image
                    : "/person.png"
                }
              />
              <h1 className="text-xl">{user.name}</h1>
            </div>
            <div className="flex gap-3 md:gap-6 md:bg-inherit md:p-0 p-4 bg-black rounded-md">
              <img
                className="md:w-72 w-28 rounded-md"
                src={shownMovie?.image}
              />
              <div className="flex flex-col md:gap-5 gap-1">
                <h1 className="text-orangeWhite md:text-2xl text-lg font-medium md:mt-3">
                  {shownMovie.name[l]} {`(${shownMovie.year})`}
                </h1>
                <div className="flex md:text-lg gap-1 md:gap-2">
                  <p className="font-bold">{`${t("director")}:`}</p>
                  <p className="font-medium">{shownMovie.director[l]}</p>
                </div>
                <div className="flex w-full gap-2 flex-wrap">{movieGenres}</div>
              </div>
            </div>
          </div>
        )}
        <form className="pb-12 md:pb-20" onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            type="text"
            placeholder="Quote"
            name="quote_en"
            className="w-full h-20 bg-inherit text-white placeholder:text-white md:mb-5 mb-4"
            register={register("quote_en")}
            languageLabel="Eng"
            error={errors.quote_en}
          />
          <Input
            type="text"
            placeholder="ციტატა"
            name="quote_ka"
            className="w-full h-20 bg-inherit text-white placeholder:text-white md:mb-5 mb-4"
            register={register("quote_ka")}
            languageLabel="GEO"
            error={errors.quote_ka}
          />
          {query.quote === "add" && (
            <div
              className={`h-20 mt-8 flex items-center pl-5 w-full rounded-md border ${
                errors.image ? "border-red-600" : "border-gray-300"
              }`}
            >
              <div className="flex items-center gap-3 pr-4">
                <Photo />
                <label className="md:block hidden" htmlFor="quote_image">
                  {t("drag_drop")}
                </label>
                <label className="md:hidden block" htmlFor="quote_image">
                  {t("upload_image")}
                </label>
                <label
                  className="pl-4 pr-4 rounded-sm flex items-center justify-center h-10 bg-purple-500 bg-opacity-40"
                  htmlFor="quote_image"
                >
                  {t("choose_file")}
                </label>
              </div>
            </div>
          )}
          <input
            className="hidden"
            id="quote_image"
            type="file"
            onChange={(e: any) => {
              const createObjectURL = (file: File): any => {
                return URL.createObjectURL(file);
              };
              setCurrentImage(createObjectURL(e.currentTarget.files[0]));
              setValue("image", e.target.files[0]);
            }}
            {...restRegister}
          />
          {currentImage && (
            <div className="w-full relative">
              <img className="w-full rounded-lg" src={currentImage} />
              {query.quote === "edit" && (
                <label
                  htmlFor="quote_image"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <ChangePhoto />
                </label>
              )}
            </div>
          )}
          <RedBtn className="w-full mt-10 md:mt-14" label={action} />
        </form>
      </div>
      <Backdrop click={back} />
    </>
  );
};

export default QuoteModal;
