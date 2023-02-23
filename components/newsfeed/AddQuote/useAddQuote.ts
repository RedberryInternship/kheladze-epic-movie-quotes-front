import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { QuoteForm } from "types";
import { quoteSchema } from "schemas";
import { useState } from "react";
import { fetchCSRFToken, createQuote, getQuotes } from "services/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, storeQuotes } from "store";

export const useAddQuote = () => {
  const { back, query, locale } = useRouter();
  const [dropdown, setDropdown] = useState(false);
  const [choosenMovie, setChoosenMovie] = useState<string>();
  const dispatch = useDispatch();
  const { t } = useTranslation("newsfeed");
  const [currentImage, setCurrentImage] = useState<string | null | undefined>(
    null
  );
  const l = locale === "en" ? "en" : "ka";

  const { user, movies } = useSelector((store: RootState) => store.user);
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    setError,
  } = useForm<QuoteForm>({
    mode: "all",
    resolver: yupResolver(quoteSchema),
  });

  const onFormSubmit: SubmitHandler<QuoteForm> = async (formData) => {
    try {
      if (!currentImage) {
        setError("image", { type: "custom", message: "upload image" });
      } else {
        await fetchCSRFToken();
        await createQuote(formData);
        const quote = await getQuotes(1);
        dispatch(storeQuotes(quote.data));
        back();
      }
    } catch (error) {}
  };

  const { onChange, ...restRegister } = register("image");

  return {
    user,
    currentImage,
    setCurrentImage,
    t,
    l,
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
    choosenMovie,
    setChoosenMovie,
  };
};
