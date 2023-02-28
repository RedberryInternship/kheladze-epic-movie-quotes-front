import { Google, Input, RedBtn } from "components";
import { SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { fetchCSRFToken, login } from "services/axios";
import { Login, LoginFormProps } from "types";
import { useLoginForm } from "./useLoginForm";

const LoginForm: React.FC<LoginFormProps> = ({ singupClick }) => {
  const {
    t,
    push,
    backErrors,
    setBackErrors,
    register,
    formState: { errors, dirtyFields },
    handleSubmit,
  } = useLoginForm();

  const onFormSubmit: SubmitHandler<Login> = async (formData) => {
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
        {t("login_in_account")}
      </h1>
      <h3 className="text-gray-500 mb-8 md:mb-6">{t("welcome_back")}</h3>
      <form
        className="w-360 flex flex-col gap-4"
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <Input
          name="email"
          type="text"
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
          placeholder={t("password")}
          register={register("password")}
          error={errors.password}
          label={t("password")}
          isDirty={dirtyFields.password}
          backErr={backErrors?.password}
        />
        <div className="flex justify-between">
          <div className="flex justify-between gap-1">
            <input type="checkbox" />
            <p>{t("remember")}</p>
          </div>
          <Link className="underline text-blue-600" href={`/?forgot=password`}>
            {t("forgot_password")}
          </Link>
        </div>
        <RedBtn className="w-full" label={t("singin")} />
        <a
          href={`${process.env.NEXT_PUBLIC_API_URL}/api/google/auth`}
          className="w-full flex justify-center gap-2 items-center h-10 border border-white rounded-md"
        >
          <Google /> {t("google")}
        </a>
      </form>
      <div className="mt-4">
        {t("dont_have_account")}
        <span
          onClick={singupClick}
          className="cursor-pointer underline text-blue-600 ml-4"
        >
          {t("singup")}
        </span>
      </div>
    </div>
  );
};

export default LoginForm;
