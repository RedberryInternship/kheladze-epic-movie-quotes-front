import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import { deleteEmail, fetchCSRFToken, makePrimary } from "services/axios";

export const useEmailsDesktop = () => {
  const { asPath, query, locale, back, push } = useRouter();
  const { t } = useTranslation("profile");

  const [showSuccess, setShowSuccess] = useState(false);
  const removeEmail = async (id: number) => {
    try {
      await fetchCSRFToken();
      await deleteEmail(id);
      push(`/profile?success=1`);
    } catch (error) {}
  };
  const makeEmailPrimary = async (id?: number) => {
    try {
      await fetchCSRFToken();
      await makePrimary(id);
      push(`/profile?success=1`);
    } catch (error) {}
  };

  return {
    t,
    query,
    locale,
    push,
    makeEmailPrimary,
    removeEmail,
  };
};
