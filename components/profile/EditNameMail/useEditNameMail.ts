import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidaion, nameValidation } from "schemas";
import { EditEmail, User } from "types";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { addEmail, changeUsername, fetchCSRFToken } from "services/axios";

export const useEditNameMail = (user?: User) => {
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

  const onFormSubmit: SubmitHandler<EditEmail> = async (data) => {
    if (query.add === "mail") {
      try {
        await fetchCSRFToken();
        await addEmail({ ...data, userId: user?.id });
        setShowSuccess(true);
      } catch (error) {
        setBackErrors({ email: "email already exists" });
      }
    } else if (query.edit === "name") {
      try {
        await fetchCSRFToken();
        await changeUsername({ name: data.email, userId: user?.id });
        setShowSuccess(true);
      } catch (error) {
        setBackErrors({ email: "name already exists" });
      }
    }
  };

  return {
    register,
    handleSubmit,
    formState: { errors },
    locale,
    push,
    t,
    backErrors,
    showSuccess,
    setShowSuccess,
    onFormSubmit,
  };
};
