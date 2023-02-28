import { useTranslation } from "next-i18next";
import { useState } from "react";
import { Register } from "types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidationSchema } from "schemas";

export const useRegisterForm = () => {
  const { t } = useTranslation("form");

  const [backErrors, setBackErrors] = useState({
    name: "",
    email: "",
  });
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<Register>({
    mode: "all",
    resolver: yupResolver(registerValidationSchema),
  });

  return {
    t,
    backErrors,
    setBackErrors,
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  };
};
