import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { emailValidaion, nameValidation } from "schemas";
import { EditEmail } from "types";
import { useTranslation } from "next-i18next";
import { useState } from "react";

export const useEditNameMail = () => {
  const { query, locale, push } = useRouter();
  const schema = query.add === "mail" ? emailValidaion : nameValidation;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditEmail>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const { t } = useTranslation("profile");

  const [backErrors, setBackErrors] = useState({ email: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  return {
    register,
    handleSubmit,
    formState: { errors },
    query,
    locale,
    push,
    t,
    backErrors,
    setBackErrors,
    showSuccess,
    setShowSuccess,
  };
};
