import { formEn, formKa } from "lang";
import { Google, Input, RedBtn } from "components";
import { loginValidationSchema } from "schemas";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/router";

import { useState } from "react";
import { useDispatch } from "react-redux";
import { storeUser } from "store";
import { fetchCSRFToken, login } from "services/axios";

interface FormData {
  email: string;
  password: string;
}

const LoginForm: React.FC<{ singupClick: () => void }> = ({ singupClick }) => {
  const { locale, push } = useRouter();
  const {
    email,
    email_placeholder,
    google,
    password,
    forgot_password,
    remember,
    singin,
    dont_have_account,
    login_in_account,
    singup,
    welcome_back,
  } = locale === "en" ? formEn : formKa;
  const [backErrors, setBackErrors] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(loginValidationSchema),
  });
  const onFormSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      await fetchCSRFToken();
      await login(formData);
      push("/news-feed");
    } catch (err: any) {
      setBackErrors(err.response.data.errors);
    }
  };

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="text-2xl md:text-4xl font-medium mt-16 mb-3 md:mt-14">
        {login_in_account}
      </h1>
      <h3 className="text-gray-500 mb-8 md:mb-6">{welcome_back}</h3>
      <form
        className="w-360 flex flex-col gap-4"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Input
          name="email"
          type="text"
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
          placeholder={password}
          register={register("password")}
          error={errors.password}
          label={password}
          isDirty={dirtyFields.password}
          backErr={backErrors?.password}
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
        <RedBtn className="w-full" label={singin} />
        <a
          href="http://127.0.0.1:8000/api/google/auth"
          className="w-full flex justify-center gap-2 items-center h-10 border border-white rounded-md"
        >
          <Google /> {google}
        </a>
      </form>
      <div className="mt-4">
        {dont_have_account}
        <span
          onClick={singupClick}
          className="cursor-pointer underline text-blue-600 ml-4"
        >
          {singup}
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
