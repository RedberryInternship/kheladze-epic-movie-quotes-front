import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Login } from "types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidationSchema } from "schemas";
export const useLoginForm = () => {
  const { t } = useTranslation("form");
  const { push } = useRouter();
  const [backErrors, setBackErrors] = useState({
    email: "",
    password: "",
  });
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<Login>({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
  });

  return {
    t,
    push,
    backErrors,
    setBackErrors,
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  };
};
