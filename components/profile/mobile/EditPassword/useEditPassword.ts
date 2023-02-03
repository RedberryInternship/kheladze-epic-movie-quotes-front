import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordValidation } from "schemas";
import { EditPasswordForm } from "types";
import { useTranslation } from "next-i18next";

export const useEditPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditPasswordForm>({
    mode: "all",
    resolver: yupResolver(passwordValidation),
  });

  const { t } = useTranslation("profile");

  const { locale, back } = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);

  return {
    register,
    handleSubmit,
    formState: { errors },
    showSuccess,
    setShowSuccess,
    locale,
    back,
    t,
  };
};
