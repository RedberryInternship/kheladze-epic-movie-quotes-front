import {
  Close,
  Input,
  Backdrop,
  RemoveGenreIcon,
  RedBtn,
  Photo,
} from "components";
import { useAddMovieModal } from "./useAddMovieModal";

const AddMovieModal = () => {
  const {
    back,
    t,
    dropdown,
    setDropdown,
    currentImage,
    setCurrentImage,
    user,
    genres,
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    genreId,
    addGenre,
    removeGenre,
    restRegister,
    onFormSubmit,
    headerText,
  } = useAddMovieModal();

  const dropdownGenres =
    genres && genres.filter((g) => !genreId?.includes(g.id) && g);

  const dropdownList =
    dropdownGenres.length !== 0 ? (
      dropdownGenres.map((g) => (
        <button
          type="button"
          className="flex items-center pl-2 border border-black cursor-pointer rounded-md"
          key={g.id}
          onClick={() => addGenre(g)}
        >
          {g.genre}
        </button>
      ))
    ) : (
      <p>{t("no_more_genres")}</p>
    );

  const choosenGenres =
    genres && genres.filter((g) => genreId?.includes(g.id) && g);

  const choosenList =
    choosenGenres.length !== 0 ? (
      choosenGenres.map((g) => (
        <button
          type="button"
          className={`relative rounded-sm pl-1 pr-2 flex gap-1 justify-between items-center h-7 bg-gray-500`}
          key={g.genre}
        >
          {g.genre} <RemoveGenreIcon click={() => removeGenre(g)} />
        </button>
      ))
    ) : (
      <p className="text-gray-400">{t("genres")}</p>
    );

  return (
    <>
      <div className="rounded-xl text-white md:w-961 w-screen md:top-36 top-0 z-40 flex flex-col absolute h-1000 bg-zinc-800 left-1/2 right-1/2 -translate-x-1/2 ">
        <header className="relative h-24 flex flex-col items-center justify-center border-b border-gray-300 border-opacity-20">
          {headerText}
          <Close className="absolute h-full right-10" click={back} />
        </header>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="pr-8 pl-8 mt-8 md:pb-8 pb-6 overflow-y-scroll h-full relative"
        >
          <div className="flex items-center gap-4 mb-2">
            <img
              className="md:w-14 w-10 h-10 md:h-14 rounded-full"
              src={
                user.image
                  ? user.image
                  : "https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
              }
            />
            <p>{user.name}</p>
          </div>
          <Input
            type="text"
            placeholder="Movie Name"
            name="name_en"
            className="w-full h-12 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("name_en")}
            languageLabel="Eng"
            error={errors.name_en}
          />
          <Input
            type="text"
            placeholder="ფილმის სახელი"
            name="name_ka"
            className="w-full h-12 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("name_ka")}
            languageLabel="ქარ"
            error={errors.name_ka}
          />
          <Input
            type="text"
            placeholder="Director"
            name="director_en"
            className="w-full h-12 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("director_en")}
            languageLabel="Eng"
            error={errors.director_en}
          />
          <Input
            type="text"
            placeholder="რეჟისორი"
            name="director_ka"
            className="w-full h-12 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("director_ka")}
            languageLabel="ქარ"
            error={errors.director_ka}
          />
          <div
            onClick={() => setDropdown(true)}
            className={`${
              errors.genres ? "border-red-600" : "border-gray-300"
            } md:mb-5 mb-4 w-full pt-3 pb-3 pl-5 pr-5 border grid grid-cols-2 md:grid-cols-5 gap-1 items-center text-left rounded-md`}
          >
            {choosenList}
            <input className="hidden" {...register("genres")} />
          </div>
          {dropdown && (
            <>
              <div
                className={`left-8 right-8 p-2 pl-5 pr-5 bg-slate-300 border grid gap-2 md:grid-cols-5 grid-cols-2 text-black items-center justify-between rounded z-40 absolute`}
              >
                {dropdownList}
              </div>
              <div
                onClick={() => setDropdown(false)}
                className="w-screen h-screen top-0 left-0 z-30 absolute"
              ></div>
            </>
          )}
          <Input
            type="number"
            placeholder={t("budget")}
            name="budget"
            className="w-full h-12 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("budget")}
            languageLabel="ქარ"
            error={errors.budget}
          />
          <Input
            type="number"
            placeholder={t("year")}
            name="year"
            className="w-full h-12 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("year")}
            languageLabel="ქარ"
            error={errors.year}
          />
          <Input
            type="text"
            placeholder="Movie Description"
            name="description_en"
            className="w-full h-20 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("description_en")}
            languageLabel="Eng"
            error={errors.description_en}
          />
          <Input
            type="text"
            placeholder="ფილმის აღწერა"
            name="description_ka"
            className="w-full h-20 bg-inherit text-white placeholder:text-gray-400 md:mb-5 mb-4"
            register={register("description_ka")}
            languageLabel="ქარ"
            error={errors.description_ka}
          />

          <div
            className={`h-20 flex items-center pl-5 w-full rounded-md border ${
              errors.image ? "border-red-600" : "border-gray-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <Photo />
              <label className="md:block hidden" htmlFor="movie_image">
                {t("drag_drop")}
              </label>
              <label
                className="md:hidden block text-gray-400"
                htmlFor="movie_image"
              >
                {t("upload_image")}
              </label>
              <label
                className="w-36 rounded-sm flex items-center justify-center h-10 bg-purple-500 bg-opacity-40"
                htmlFor="movie_image"
              >
                {t("choose_file")}
              </label>
            </div>
            <input
              className="hidden"
              id="movie_image"
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
          </div>
          {currentImage && <img src={currentImage} />}
          <RedBtn className="w-full md:mt-8 mt-6" label={t("add_movie")} />
        </form>
      </div>
      <Backdrop click={back} />
    </>
  );
};

export default AddMovieModal;
