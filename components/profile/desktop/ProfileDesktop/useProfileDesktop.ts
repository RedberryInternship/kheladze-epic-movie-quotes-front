import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameValidation, passwordValidation } from "schemas";
import { EditEmail, EditPasswordForm } from "types";
import { useState } from "react";
import {
  changePassword,
  changeUsername,
  fetchCSRFToken,
  uploadUserImage,
} from "services/axios";

export const useProfileDesktop = () => {
  const { route, query, asPath, push } = useRouter();
  const { t } = useTranslation("profile");
  const { user } = useSelector((store: RootState) => store?.user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [nameBackErr, setNameBackErr] = useState({ email: "" });
  const [image, setImage] = useState("");
  const [currentImage, setCurrentImage] = useState(null);

  const nameForm = useForm<EditEmail>({
    mode: "all",
    defaultValues: { email: user.name },
    resolver: yupResolver(nameValidation),
  });

  const passwordForm = useForm<EditPasswordForm>({
    mode: "all",
    resolver: yupResolver(passwordValidation),
  });
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

  return {
    nameForm,
    passwordForm,
    t,
    user,
    route,
    query,
    push,
    nameBackErr,
    showSuccess,
    setShowSuccess,
    setImage,
    setCurrentImage,
    changeName,
    editPassword,
    submit,
    userImage,
    passwordValidator,
  };
};
