import { LeftArrow, RedBtn, Dot, Input, Success } from "components";
import Link from "next/link";
import { EditPasswordProps } from "types";
import { useEditPassword } from "./useEditPassword";

const EditPassword: React.FC<EditPasswordProps> = ({ user }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    showSuccess,
    setShowSuccess,
    locale,
    back,
    t,
    onFormSubmit,
    passwordValidator,
  } = useEditPassword(user);

  return (
    <div>
      {showSuccess && (
        <Success
          className="h-14"
          close={() => {
            setShowSuccess(false);
            back();
          }}
        />
      )}
      <div className="w-full h-16 mt-20 flex items-center">
        <Link className="ml-10" href={"/profile"}>
          <LeftArrow />
        </Link>
      </div>
      <div className="w-full bg-zinc-800 pl-8 pr-8 pt-6 pb-11 rounded-xl flex flex-col gap-2 items-start justify-center">
        <div className="w-full flex flex-col items-start bg-neutral-900 border border-gray-600 rounded-md p-6">
          <h3 className="mb-4">{t("password_should_contain")}</h3>
          <div className="flex items-center gap-2 mb-1">
            <Dot fill={passwordValidator().fill} />
            <p className={`text-sm ${passwordValidator().text}`}>
              {t("or_more")}
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <Dot fill={passwordValidator().fill} />
            <p className={`text-sm ${passwordValidator().text}`}>
              {t("lowercase")}
            </p>
          </div>
        </div>
        <form
          className="flex flex-col gap-10 w-full"
          onSubmit={handleSubmit(onFormSubmit)}
        >
          <Input
            name="password"
            type="password"
            register={register("password")}
            error={errors.password}
            label={t("new_password")}
            className="h-12"
          />
          <Input
            name="password_confirmation"
            type="password"
            register={register("password_confirmation")}
            error={errors.password_confirmation}
            label={t("confirm_new_pass")}
            className="h-12"
          />
        </form>
      </div>
      <div className="flex justify-between pl-12 pr-7 mt-11">
        <Link href="/profile">{t("cancel")}</Link>
        <RedBtn
          className={locale === "en" ? "w-16" : "w-20"}
          label={t("add")}
          click={handleSubmit(onFormSubmit)}
        />
      </div>
    </div>
  );
};

export default EditPassword;
