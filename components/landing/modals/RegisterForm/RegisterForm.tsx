import { formEn, formKa } from "lang";
import { Google, Input, RedBtn } from "components";
import { registerValidationSchema } from "schemas";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { fetchCSRFToken, singup } from "services/axios";

interface FormData {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

const RegisterForm: React.FC<{
  loginClick: () => void;
  succesSubmit: (linkTo: string) => void;
}> = ({ loginClick, succesSubmit }) => {
  const { locale } = useRouter();

  const [backErrors, setBackErrors] = useState({
    name: "",
    email: "",
  });

  const {
    already_have,
    conf_pass,
    create_acc,
    email,
    email_placeholder,
    google,
    name,
    name_placeholder,
    password,
    password_placeholder,
    start_journey,
    get_started,
    forgot_password,
    remember,
    login,
  } = locale === "en" ? formEn : formKa;

  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(registerValidationSchema),
  });
  const onFormSubmit: SubmitHandler<FormData> = (formData) => {
    fetchCSRFToken().then(() => {
      singup(formData)
        .then((res) => succesSubmit(formData.email.split("@")[1]))
        .catch((err) => setBackErrors(err.response.data.errors));
    });
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-2xl md:text-4xl font-medium mt-10 mb-3 md:mt-14">
        {create_acc}
      </h1>
      <h3 className="text-gray-500 mb-4 md:mb-6">{start_journey}</h3>
      <form
        className="w-360 flex flex-col gap-3 md:gap-4"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Input
          name="name"
          type="text"
          placeholder={name_placeholder}
          register={register("name")}
          error={errors.name}
          label={name}
          isDirty={dirtyFields.name}
          backErr={backErrors?.name}
        />
        <Input
          name="email"
          type="email"
          placeholder={email_placeholder}
          register={register("email")}
          error={errors.email}
          label={email}
          isDirty={dirtyFields.email}
          backErr={backErrors?.email}
        />
        <Input
          name="password"
          type="password"
          placeholder={password_placeholder}
          register={register("password")}
          error={errors.password}
          label={password}
          isDirty={dirtyFields.password}
        />
        <Input
          name="password_confirmation"
          type="password"
          placeholder={password_placeholder}
          register={register("password_confirmation")}
          error={errors.password_confirmation}
          label={conf_pass}
          isDirty={dirtyFields.password_confirmation}
        />
        <div className="flex justify-between">
          <div className="flex justify-between gap-1">
            <input type="checkbox" />
            <p>{remember}</p>
          </div>
          <Link className="underline text-blue-600" href={"#"}>
            {forgot_password}
          </Link>
        </div>
        <RedBtn className="w-full" label={get_started} />
        <button className="w-full flex justify-center gap-2 items-center h-10 border border-white rounded-md">
          <Google /> {google}
        </button>
      </form>
      <div className="mt-4">
        {already_have}
        <span onClick={loginClick} className="underline text-blue-600 ml-4">
          {login}
        </span>
      </div>
    </div>
  );
};

export default RegisterForm;
