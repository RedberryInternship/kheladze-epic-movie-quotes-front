import { Input, LeftArrow, RedBtn, Success } from "components";
import Link from "next/link";
import { SubmitHandler } from "react-hook-form";
import { addEmail, changeUsername, fetchCSRFToken } from "services/axios";
import { EditEmail, EditNameMailProps } from "types";
import { useEditNameMail } from "./useEditNameMail";

const EditNameMail: React.FC<EditNameMailProps> = ({ label, back, user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    query,
    locale,
    push,
    t,
    backErrors,
    setBackErrors,
    showSuccess,
    setShowSuccess,
  } = useEditNameMail();

  const onFormSubmit: SubmitHandler<EditEmail> = async (data) => {
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
        await changeUsername({ name: data.email, userId: user?.id });
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
        <Link href={back}>{t("cancel")}</Link>
        <RedBtn
          click={handleSubmit(onFormSubmit)}
          className={locale === "en" ? "w-16" : "w-20"}
          label={t("add")}
        />
      </div>
    </div>
  );
};

export default EditNameMail;
