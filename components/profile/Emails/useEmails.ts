import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteEmail, fetchCSRFToken, makePrimary } from "services/axios";

export const useEmails = () => {
  const { asPath, query, locale, back } = useRouter();
  const { t } = useTranslation("profile");

  const [showSuccess, setShowSuccess] = useState(false);

  const removeEmail = async (id: string | string[] | undefined) => {
    try {
      await fetchCSRFToken();
      await deleteEmail(id);
      back();
      setShowSuccess(true);
    } catch (error) {}
  };
  const makeEmailPrimary = async (id: string | string[] | undefined) => {
    try {
      await fetchCSRFToken();
      await makePrimary(id);
      back();
      setShowSuccess(true);
    } catch (error) {}
  };

  return {
    makeEmailPrimary,
    removeEmail,
    showSuccess,
    setShowSuccess,
    t,
    asPath,
    query,
    locale,
    back,
  };
};
