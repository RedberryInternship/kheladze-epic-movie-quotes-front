import { yupResolver } from "@hookform/resolvers/yup";
import { Input, InputLogged, LeftArrow, RedBtn, Success } from "components";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailValidaion, nameValidation } from "schemas";
import { addEmail, changeUsername, fetchCSRFToken } from "services/axios";

interface FormData {
  email: string;
}

const EditNameMail: React.FC<{
  profile: any;
  label: string;
  back: string;
  user?: any;
}> = ({ profile, label, back, user }) => {
  const { query, locale, push } = useRouter();

  const schema = query.add === "mail" ? emailValidaion : nameValidation;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const [backErrors, setBackErrors] = useState({ email: "" });
  const [showSuccess, setShowSuccess] = useState(false);

  const onFormSubmit: SubmitHandler<FormData> = async (data) => {
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
        await changeUsername({ name: data.email, userId: user.id });
        setShowSuccess(true);
      } catch (error) {
        setBackErrors({ email: "name already exists" });
      }
    }
  };

  return (
    <div>
      {showSuccess && (
        <Success
          className="h-14"
          close={() => {
            setShowSuccess(false);
            push(back);
          }}
        />
      )}
      <div className="w-full h-16 flex items-center">
        <Link className="ml-10" href={back}>
          <LeftArrow />
        </Link>
      </div>
      <form
        onSubmit={handleSubmit(onFormSubmit)}
        className="w-full bg-zinc-800 h-44 pl-8 pr-8 rounded-xl flex flex-col gap-2 items-start justify-center"
      >
        <Input
          name="email"
          type="email"
          register={register("email")}
          error={errors.email}
          label={label}
          className="h-12"
          backErr={backErrors.email}
        />
      </form>
      <div className="flex justify-between pl-12 pr-7 mt-24">
        <Link href={back}>{profile.cancel}</Link>
        <RedBtn
          click={handleSubmit(onFormSubmit)}
          className={locale === "en" ? "w-16" : "w-20"}
          label={profile.add}
        />
      </div>
    </div>
  );
};

export default EditNameMail;
