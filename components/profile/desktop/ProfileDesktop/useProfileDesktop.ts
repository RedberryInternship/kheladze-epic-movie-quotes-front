import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameValidation, passwordValidation } from "schemas";
import { EditEmail, EditPasswordForm } from "types";
import { useState } from "react";

export const useProfileDesktop = () => {
  const { route, query, asPath, push } = useRouter();
  const { t } = useTranslation("profile");
  const { user } = useSelector((store: RootState) => store?.user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [nameBackErr, setNameBackErr] = useState({ email: "" });
  const [image, setImage] = useState("");
  const [currentImage, setCurrentImage] = useState(null);

  const nameForm = useForm<EditEmail>({
    mode: "all",
    defaultValues: { email: user.name },
    resolver: yupResolver(nameValidation),
  });

  const passwordForm = useForm<EditPasswordForm>({
    mode: "all",
    resolver: yupResolver(passwordValidation),
  });

  return {
    t,
    user,
    route,
    query,
    push,
    nameForm,
    passwordForm,
    nameBackErr,
    setNameBackErr,
    showSuccess,
    setShowSuccess,
    asPath,
    image,
    setImage,
    currentImage,
    setCurrentImage,
  };
};
