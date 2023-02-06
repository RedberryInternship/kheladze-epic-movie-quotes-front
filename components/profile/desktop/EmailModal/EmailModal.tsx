import { Backdrop, Input, RedBtn } from "components";
import { SubmitHandler } from "react-hook-form";
import { addEmail, fetchCSRFToken } from "services/axios";
import { EditEmail, EmailModalProps, User } from "types";
import { useEmailModal } from "./useEmailModal";

const EmailModal: React.FC<EmailModalProps> = ({ user }) => {
  const {
    push,
    t,
    register,
    handleSubmit,
    formState: { errors },
    backErrors,
    setBackErrors,
  } = useEmailModal();

  const onFormSubmit: SubmitHandler<EditEmail> = async (data) => {
    try {
      await fetchCSRFToken();
      await addEmail({ ...data, userId: user.id });
      push("profile?success=1");
    } catch (error) {
      setBackErrors("email already exists");
    }
  };

  return (
    <>
      <div className="rounded-xl text-white w-601 h-367 z-40 flex flex-col fixed bg-zinc-800 left-1/2 top-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="p-6 text-2xl font-medium border-b border-gray-300 border-opacity-20">
          {t("add_new_mail")}
        </h1>
        <form
          onSubmit={handleSubmit(onFormSubmit)}
          className="w-full h-full bg-zinc-800 pl-8 pr-8 pt-14 rounded-xl flex flex-col gap-14 items-start justify-center"
        >
          <Input
            name="email"
            type="email"
            register={register("email")}
            error={errors.email}
            label={t("email")}
            className="h-12"
            backErr={backErrors}
          />
          <div className="w-full flex gap-8 items-center justify-end">
            <p onClick={() => push("/profile")}>{t("cancel")}</p>
            <RedBtn label={t("add")} />
          </div>
        </form>
      </div>
      <Backdrop click={() => push("/profile")} />
    </>
  );
};

export default EmailModal;
