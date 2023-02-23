import { useRouter } from "next/router";
import { useState } from "react";
import { useTranslation } from "next-i18next";
import { fetchCSRFToken, googleLogin } from "services/axios";

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

  return {
    LoginModal,
    setLoginModal,
    singUpModal,
    setSingUpModal,
    checkEmailModal,
    setCheckEmailModal,
    toMail,
    setToMail,
    locale,
    query,
    push,
    t,
  };
};

export default useHome;
