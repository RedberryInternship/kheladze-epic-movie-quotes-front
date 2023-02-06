import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { passwordValidation } from "schemas";
import { EditPasswordForm, User } from "types";
import { useTranslation } from "next-i18next";
import { changePassword, fetchCSRFToken } from "services/axios";

export const useEditPassword = (user: User) => {
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
  const onFormSubmit = async (data: EditPasswordForm) => {
    try {
      await fetchCSRFToken();
      await changePassword({ ...data, userId: user.id });
      setShowSuccess(true);
    } catch (error) {}
  };
  const passwordValidator = () => {
    const fill = errors.password ? "#9C9A9A" : "#198754";
    const text = errors.password ? "text-neutral-400" : "text-white";
    return { fill, text };
  };

  return {
    onFormSubmit,
    passwordValidator,
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
