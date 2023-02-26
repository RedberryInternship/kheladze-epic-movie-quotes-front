import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import {
  fetchCSRFToken,
  googleLogin,
  resetPassword,
  sendResetInstructions,
} from "services/axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { emailShema, resetSchema } from "schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { EmailForm, ResetForm } from "types";

const useHome = () => {
  const [LoginModal, setLoginModal] = useState(false);
  const [singUpModal, setSingUpModal] = useState(false);
  const [checkEmailModal, setCheckEmailModal] = useState(false);
  const [toMail, setToMail] = useState("");
  const { locale, query, push } = useRouter();
  const { t } = useTranslation("common");
  const googleAuth = async () => {
    try {
      await fetchCSRFToken();
      await googleLogin({ id: query.googleuser });
      push("/news-feed");
    } catch (err: any) {}
  };
  if (query.googleuser) {
    googleAuth();
  }
  const sendInstructionsForm = useForm<EmailForm>({
    resolver: yupResolver(emailShema),
  });
  const resetForm = useForm<ResetForm>({
    mode: "all",
    resolver: yupResolver(resetSchema),
  });
  const [emailBackErrors, setEmailBackErrors] = useState("");

  const sendInstructions: SubmitHandler<EmailForm> = async (email) => {
    try {
      await fetchCSRFToken();
      await sendResetInstructions(email);
      setSingUpModal(false);
      setLoginModal(false);
      push("/?instruction=sent");
    } catch (error: any) {
      setEmailBackErrors(error.response.data.message);
    }
  };

  const resetPasswordSubmit: SubmitHandler<ResetForm> = async (formData) => {
    try {
      await fetchCSRFToken();
      await resetPassword({ ...formData, reset_token: query.reset });
      push("/?password_updated=1");
    } catch (error) {}
  };

  return {
    LoginModal,
    setLoginModal,
    singUpModal,
    setSingUpModal,
    checkEmailModal,
    setCheckEmailModal,
    toMail,
    setToMail,
    query,
    push,
    t,
    sendInstructionsForm,
    resetForm,
    emailBackErrors,
    sendInstructions,
    resetPasswordSubmit,
  };
};

export default useHome;
