import { Google, Input, RedBtn } from "components";
import { registerValidationSchema } from "schemas";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { fetchCSRFToken, singup } from "services/axios";
import { Register, RegisterProps } from "types";
import { useTranslation } from "next-i18next";

const RegisterForm: React.FC<RegisterProps> = ({
  loginClick,
  succesSubmit,
}) => {
  const { locale } = useRouter();

  const [backErrors, setBackErrors] = useState({
    name: "",
    email: "",
  });
  const { t } = useTranslation("form");

  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<Register>({
    mode: "all",
    resolver: yupResolver(registerValidationSchema),
  });
  const onFormSubmit: SubmitHandler<Register> = async (formData) => {
    try {
      await fetchCSRFToken();
      await singup(formData);
      succesSubmit(formData.email.split("@")[1]);
    } catch (err: any) {
      setBackErrors(err.response.data.errors);
    }
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-2xl md:text-4xl font-medium mt-10 mb-3 md:mt-14">
        {t("create_acc")}
      </h1>
      <h3 className="text-gray-500 mb-4 md:mb-6">{t("start_journey")}</h3>
      <form
        className="w-360 flex flex-col gap-3 md:gap-4"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Input
          name="name"
          type="text"
          placeholder={t("name_placeholder")}
          register={register("name")}
          error={errors.name}
          label={t("name")}
          isDirty={dirtyFields.name}
          backErr={backErrors?.name}
        />
        <Input
          name="email"
          type="email"
          placeholder={t("email_placeholder")}
          register={register("email")}
          error={errors.email}
          label={t("email")}
          isDirty={dirtyFields.email}
          backErr={backErrors?.email}
        />
        <Input
          name="password"
          type="password"
          placeholder={t("password_placeholder")}
          register={register("password")}
          error={errors.password}
          label={t("password")}
          isDirty={dirtyFields.password}
        />
        <Input
          name="password_confirmation"
          type="password"
          placeholder={t("password_placeholder")}
          register={register("password_confirmation")}
          error={errors.password_confirmation}
          label={t("conf_pass")}
          isDirty={dirtyFields.password_confirmation}
        />
        <div className="flex justify-between">
          <div className="flex justify-between gap-1">
            <input type="checkbox" />
            <p>{t("remember")}</p>
          </div>
          <Link className="underline text-blue-600" href={"#"}>
            {t("forgot_password")}
          </Link>
        </div>
        <RedBtn className="w-360" label={t("get_started")} />
        <button className="w-full flex justify-center gap-2 items-center h-10 border border-white rounded-md">
          <Google /> {t("google")}
        </button>
      </form>
      <div className="mt-4">
        {t("already_have")}
        <span onClick={loginClick} className="underline text-blue-600 ml-4">
          {t("login")}
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
