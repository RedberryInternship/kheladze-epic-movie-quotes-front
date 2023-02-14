import { Backdrop, Close, Input, Photo, RedBtn } from "components";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Movie, QuoteForm } from "types";
import { quoteValidatonSchema } from "schemas";
import { useEffect, useState } from "react";
import {
  fetchCSRFToken,
  createQuote,
  editQuote,
  deleteQuote,
} from "services/axios";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const useQuoteModal = () => {
  const { back, query, locale, push, pathname } = useRouter();
  const [sure, setSure] = useState(false);
  const { t } = useTranslation("movie");
  const [currentImage, setCurrentImage] = useState<string | null | undefined>(
    null
  );
  const l = locale === "en" ? "en" : "ka";

  const { user, movies, genres } = useSelector(
    (store: RootState) => store.user
  );

  let defaultValues;
  const shownMovie = movies.find(
    (movie: Movie) => movie.id === Number(query.movie)
  );
  const currentQuote = shownMovie?.quotes.find(
    (quote) => quote.id === Number(query.id)
  );

  if (query.quote === "add") {
    defaultValues = {
      quote_en: "",
      quote_ka: "",
      image: "",
    };
  } else if (query.quote === "edit") {
    useEffect(() => {
      setCurrentImage(currentQuote?.image);
    }, []);
    defaultValues = {
      quote_en: currentQuote?.quote.en,
      quote_ka: currentQuote?.quote.ka,
      image: currentQuote?.image,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
  } = useForm<QuoteForm>({
    mode: "all",
    defaultValues,
    resolver: yupResolver(quoteValidatonSchema),
  });

  const onFormSubmit: SubmitHandler<QuoteForm> = async (formData) => {
    try {
      await fetchCSRFToken();
      if (query.quote === "add") {
        if (!currentImage) {
          setError("image", { type: "custom", message: "upload image" });
        } else {
          await createQuote({ ...formData, movieId: shownMovie?.id });
          back();
        }
      } else {
        await editQuote({ ...formData, quoteId: currentQuote?.id });
        back();
      }
    } catch (error) {}
  };
  const action = query.quote === "add" ? t("add_quote") : t("edit_quote");
  const { onChange, ...restRegister } = register("image");
  const quoteDelete = async () => {
    try {
      await fetchCSRFToken();
      await deleteQuote({ quoteId: currentQuote?.id });
      setSure(false);
      push(`${pathname}?movie=${query.movie}`);
    } catch (error) {}
  };

  return {
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
  };
};
