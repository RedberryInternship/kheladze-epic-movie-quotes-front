import {
  Dot,
  EmailModal,
  EmailsDesktop,
  Input,
  ReadOnly,
  RedBtn,
  Success,
} from "components";
import Link from "next/link";
import {
  changePassword,
  changeUsername,
  fetchCSRFToken,
  uploadUserImage,
} from "services/axios";
import { SubmitHandler } from "react-hook-form";
import { EditEmail, EditPasswordForm } from "types";
import { useProfileDesktop } from "./useProfileDesktop";

const ProfileDesktop = () => {
  const {
    nameForm,
    passwordForm,
    t,
    user,
    route,
    query,
    push,
    nameBackErr,
    setNameBackErr,
    showSuccess,
    setShowSuccess,
    image,
    setImage,
    currentImage,
    setCurrentImage,
  } = useProfileDesktop();

  const changeName: SubmitHandler<EditEmail> = async (data) => {
    try {
      await fetchCSRFToken();
      await changeUsername({ name: data.email, userId: query.userId });
      push("/profile");
      setShowSuccess(true);
    } catch (error) {
      setNameBackErr({ email: "name already exists" });
    }
  };
  const editPassword: SubmitHandler<EditPasswordForm> = async (data) => {
    try {
      await fetchCSRFToken();
      await changePassword({ ...data, userId: query.userId });
      push("/profile");
      setShowSuccess(true);
    } catch (error) {}
  };

  const uploadImage = async (e: Event) => {
    let data = new FormData();
    data.append("image", image);
    try {
      await fetchCSRFToken();
      const res = await uploadUserImage({ image, userId: user.id });
      push("/profile");
    } catch (error) {}
  };

  const submit = () => {
    if (query.modify === "name") {
      return nameForm.handleSubmit(changeName);
    } else if (query.modify === "password") {
      return passwordForm.handleSubmit(editPassword);
    } else if (query.modify === "image") {
      return uploadImage;
    }
  };
  const userImage = () => {
    if (currentImage) return currentImage;
    if (user.image) return user.image;
    return "https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg";
  };
  const passwordValidator = () => {
    const fill = passwordForm.formState.errors.password ? "#9C9A9A" : "#198754";
    const text = passwordForm.formState.errors.password
      ? "text-neutral-400"
      : "text-white";
    return { fill, text };
  };

  return (
    <>
      {query.modify === "email" && <EmailModal user={user} />}
      <div className="w-full  flex flex-col justify-center items-center">
        {showSuccess && (
          <Success
            className="desktop top-28 right-20"
            close={() => setShowSuccess(false)}
          />
        )}
        <div className="xl:w-1000 ">
          <p className="self-start text-2xl font-medium mt-28 mb-40">
            {t("my_profile")}
          </p>
          <div className="bg-black z-0 flex flex-col pl-20 pb-9 w-full rounded-xl relative">
            <form className="w-48 flex flex-col gap-2 items-center absolute left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2">
              <img className="w-40 h-40 rounded-full" src={userImage()} />
              <label
                onClick={() => push("/profile?modify=image")}
                htmlFor="image"
                className="w-full text-center cursor-pointer"
              >
                {t("upload_new")}
              </label>
              <input
                onChange={(e: any) => {
                  const createObjectURL = (file: File): any => {
                    return URL.createObjectURL(file);
                  };
                  setCurrentImage(createObjectURL(e.currentTarget.files[0]));
                  setImage(e.target.files[0]);
                }}
                className="hidden"
                type="file"
                id="image"
                name="image"
              />
            </form>
            <div className="mt-48 w-528 flex gap-8 items-end pb-10 border-b border-gray-300 border-opacity-50">
              {query.modify === "name" ? (
                <form onSubmit={nameForm.handleSubmit(changeName)}>
                  <Input
                    type="text"
                    label={t("username")}
                    register={nameForm.register("email")}
                    name="email"
                    error={nameForm.formState.errors?.email}
                    backErr={nameBackErr.email}
                    className="w-528 h-12"
                  />
                </form>
              ) : (
                <ReadOnly
                  label={t("username")}
                  placeholder={user.name}
                  className="bg-gray-300 text-neutral-800"
                />
              )}

              <Link
                className="text-gray-300 h-12 mb-2 flex items-center"
                href={
                  query.modify === "name"
                    ? `${route}`
                    : `${route}?modify=name&userId=${user.id}`
                }
              >
                {query.modify === "name" ? t("cancel") : t("edit")}
              </Link>
            </div>
            <EmailsDesktop user={user} />

            <div className="flex gap-8 items-end mt-8 mb-8">
              <ReadOnly
                label={t("password")}
                placeholder={"••••••••••••"}
                className="bg-gray-300 text-neutral-800"
              />
              {query.modify !== "password" && (
                <Link
                  className="h-12 flex items-center mb-1"
                  href={`/profile?modify=password&userId=${user.id}`}
                >
                  {t("edit")}
                </Link>
              )}
            </div>
            {query.modify === "password" && (
              <>
                <div className="w-528 flex flex-col items-start mb-8 bg-neutral-900 border border-gray-600 rounded-md p-6">
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
                  className="flex flex-col gap-8 w-528"
                  onSubmit={passwordForm.handleSubmit(editPassword)}
                >
                  <Input
                    type="password"
                    label={t("new_password")}
                    register={passwordForm.register("password")}
                    name="password"
                    error={passwordForm.formState.errors.password}
                    className="w-528 h-12"
                  />
                  <Input
                    type="password"
                    label={t("confirm_new_pass")}
                    register={passwordForm.register("password_confirmation")}
                    name="password_confirmation"
                    error={passwordForm.formState.errors.password_confirmation}
                    className="w-528 h-12"
                  />
                </form>
              </>
            )}
          </div>
          {query.modify && (
            <div className="flex justify-end gap-8 mt-10 items-center pb-8">
              <Link href={"/profile"}>{t("cancel")}</Link>
              <RedBtn
                click={submit()}
                className="pl-3 pr-3"
                label={t("save_changes")}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProfileDesktop;
