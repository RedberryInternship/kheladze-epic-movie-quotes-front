import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { emailValidaion } from "schemas";
import { EditEmail } from "types";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const useEmailModal = () => {
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

  return {
    t,
    push,
    register,
    handleSubmit,
    formState: { errors },
    backErrors,
    setBackErrors,
  };
};
