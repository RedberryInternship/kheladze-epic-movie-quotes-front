import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { nameValidation } from "schemas";
import { EditEmail } from "types";
import { useState } from "react";
import { fetchCSRFToken, uploadUserImage } from "services/axios";
const useProfile = () => {
  const { route, query, asPath, push } = useRouter();
  const { t } = useTranslation("profile");
  const { user } = useSelector((store: RootState) => store?.user);
  const [showSuccess, setShowSuccess] = useState(false);
  const [nameBackErr, setNameBackErr] = useState({ email: "" });
  const [image, setImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditEmail>({
    mode: "all",
    defaultValues: { email: user.name },
    resolver: yupResolver(nameValidation),
  });
  const uploadImage = async () => {
    let data = new FormData();
    data.append("image", image);
    try {
      await fetchCSRFToken();
      await uploadUserImage({ image, userId: user.id });
      push("/profile?success=1");
    } catch (error) {}
  };
  const [currentImage, setCurrentImage] = useState(null);
  const userImage = () => {
    if (currentImage) return currentImage;
    if (user.image?.includes("users")) return user.image;
    return "/person.png";
  };

  return {
    uploadImage,
    route,
    query,
    push,
    t,
    user,
    asPath,
    register,
    handleSubmit,
    formState: { errors },
    nameBackErr,
    setNameBackErr,
    showSuccess,
    setShowSuccess,
    image,
    setImage,
    setCurrentImage,
    userImage,
  };
};

export default useProfile;
