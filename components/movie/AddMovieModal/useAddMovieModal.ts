import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useEffect, useState } from "react";
import { RootState } from "store";
import { useSelector } from "react-redux";
import { SubmitHandler, useForm, useWatch } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { movieValidationSchema } from "schemas";
import { MovieForm } from "types";
import { createMovie, editMovie, fetchCSRFToken } from "services/axios";

export const useAddMovieModal = () => {
  const { pathname, push, query, back } = useRouter();
  const { t } = useTranslation("movie");
  const [dropdown, setDropdown] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null | undefined>(
    null
  );
  const { user, genres, movies } = useSelector(
    (store: RootState) => store.user
  );

  let defaultValues = {};
  const shownMovie = movies.find((movie) => movie.id === Number(query.movie));
  useEffect(() => {
    if (query.movie) {
      setCurrentImage(shownMovie?.image);
    }
  }, []);
  if (query.movie) {
    defaultValues = {
      name_en: shownMovie?.name.en,
      name_ka: shownMovie?.name.ka,
      genres: shownMovie?.genres,
      director_en: shownMovie?.director.en,
      director_ka: shownMovie?.director.ka,
      description_en: shownMovie?.description.en,
      description_ka: shownMovie?.description.ka,
      budget: shownMovie?.budget,
      year: shownMovie?.year,
      image: shownMovie?.image,
    };
  } else {
    defaultValues = {
      name_en: "",
      name_ka: "",
      genres: "",
      director_en: "",
      director_ka: "",
      description_en: "",
      description_ka: "",
      budget: undefined,
      year: undefined,
      image: "",
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    getValues,
    setError,
    control,
  } = useForm<MovieForm>({
    mode: "all",
    defaultValues,
    resolver: yupResolver(movieValidationSchema),
  });

  const genreId = useWatch({
    control,
    name: "genres",
  });
  const addGenre = (genre: any) => {
    const genreFieldValue = getValues("genres");
    if (!genreFieldValue.includes(genre.id)) {
      setValue("genres", `${genreFieldValue}${genre.id}`);
    }
  };

  const removeGenre = (genre: any) => {
    const genreFieldValue = getValues("genres");
    const removed = genreFieldValue.replace(genre.id, "");
    setValue("genres", removed);
  };

  const { onChange, ...restRegister } = register("image");

  const onFormSubmit: SubmitHandler<MovieForm> = async (formData) => {
    try {
      await fetchCSRFToken();
      if (query.movie) {
        await editMovie({ ...formData, movieId: query.movie });
        back();
      } else {
        if (!currentImage) {
          setError("image", { type: "custom", message: "upload image" });
        } else {
          await createMovie({ userId: user.id, ...formData });
          back();
        }
      }
    } catch (error) {}
  };
  const headerText = query.movie ? t("edit_movie") : t("add_movie");

  return {
    back,
    pathname,
    push,
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
  };
};
