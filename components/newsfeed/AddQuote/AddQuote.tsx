import {
  Backdrop,
  Camera,
  ChangePhoto,
  Close,
  Input,
  LangArrow,
  Photo,
  RedBtn,
} from "components";
import { useAddQuote } from "./useAddQuote";

const AddQuote = () => {
  const {
    user,
    currentImage,
    setCurrentImage,
    t,
    back,
    query,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    onFormSubmit,
    restRegister,
    dropdown,
    setDropdown,
    movies,
    l,
    choosenMovie,
    setChoosenMovie,
  } = useAddQuote();

  return (
    <>
      <div className="pl-8 pr-8 rounded-xl text-white lg:w-961 w-screen md:top-36 top-0 z-40 flex flex-col absolute bg-zinc-800 left-1/2 right-1/2 -translate-x-1/2">
        <h1 className="relative h-24 border-b border-gray-300 border-opacity-30 flex items-center justify-center text-xl lg:text-2xl font-medium">
          {t("write_new")}
          <Close click={back} className="absolute right-3 md:right-2" />
        </h1>
        <div className="flex items-center gap-4 mb-4 mt-8">
          <img
            className="md:w-14 w-10 h-10 md:h-14 rounded-full"
            src={
              user.image.includes("users") || user.google_id
                ? user.image
                : "/person.png"
            }
          />
          <p>{user.name}</p>
        </div>
        <form className="pb-12 md:pb-20" onSubmit={handleSubmit(onFormSubmit)}>
          <Input
            type="text"
            placeholder="Create New Quote"
            name="quote_en"
            className="w-full h-20 bg-inherit text-white placeholder:text-gray-500 placeholder:italic md:mb-5 mb-4"
            register={register("quote_en")}
            languageLabel="Eng"
            error={errors.quote_en}
          />
          <Input
            type="text"
            placeholder="ახალი ციტატა"
            name="quote_ka"
            className="w-full h-20 bg-inherit placeholder:text-gray-500 placeholder:italic md:mb-5 mb-4"
            register={register("quote_ka")}
            languageLabel="Eng"
            error={errors.quote_ka}
          />
          <div
            className={`h-20 flex items-center pl-5 w-full rounded-md border ${
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
          <div
            onClick={() => setDropdown(true)}
            className={`${
              errors.movieId ? "border-red-600" : "border-0"
            } cursor-pointer flex justify-between items-center h-20 mt-7 relative bg-black md:mb-5 mb-4 w-full pt-3 pb-3 pl-5 pr-5 border rounded-md`}
          >
            <div className="flex items-center gap-3">
              <Camera color="white" />
              {choosenMovie ? choosenMovie : <p>{t("choose_movie")}</p>}
            </div>
            <button type="button">
              <LangArrow absolute={true} isOpen={dropdown} />
            </button>
            <input className="hidden" {...register("movieId")} />
          </div>
          {dropdown && (
            <>
              <div
                className={`flex flex-col gap-2 left-8 right-8 p-2 pl-5 pr-5 bg-black border rounded z-40 absolute`}
              >
                {movies.map((movie) => {
                  return (
                    <li
                      className={`${
                        movie.name[l] === choosenMovie
                          ? "bg-gray-400"
                          : "bg-inherit"
                      }  h-12 flex items-center list-none hover:bg-gray-600 text-white text-xl cursor-pointer border border-gray-300 border-opacity-30`}
                      key={movie.id}
                      onClick={() => {
                        setValue("movieId", movie.id);
                        setChoosenMovie(movie.name[l]);
                        setDropdown(false);
                      }}
                    >
                      {movie.name[l]}
                    </li>
                  );
                })}
              </div>
              <div
                onClick={() => setDropdown(false)}
                className="h-screen top-0 left-0 right-0 bottom-0 z-30 fixed"
              ></div>
            </>
          )}

          <RedBtn className="w-full mt-10 md:mt-14" label={t("write_new")} />
        </form>
      </div>
      <Backdrop click={back} />
    </>
  );
};

export default AddQuote;
