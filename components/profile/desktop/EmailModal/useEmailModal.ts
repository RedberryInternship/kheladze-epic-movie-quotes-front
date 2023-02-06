import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidaion } from "schemas";
import { EditEmail, User } from "types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { addEmail, fetchCSRFToken } from "services/axios";

export const useEmailModal = (user: User) => {
  const { push } = useRouter();
  const { t } = useTranslation("profile");
  const [backErrors, setBackErrors] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditEmail>({
    mode: "all",
    resolver: yupResolver(emailValidaion),
  });
  const onFormSubmit: SubmitHandler<EditEmail> = async (data) => {
    try {
      await fetchCSRFToken();
      await addEmail({ ...data, userId: user.id });
      push("profile?success=1");
    } catch (error) {
      setBackErrors("email already exists");
    }
  };

  return {
    push,
    t,
    register,
    handleSubmit,
    formState: { errors },
    backErrors,
    onFormSubmit,
  };
};
