import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";

export const useEmailsDesktop = () => {
  const { asPath, query, locale, back, push } = useRouter();
  const { t } = useTranslation("profile");

  const [showSuccess, setShowSuccess] = useState(false);

  return { showSuccess, setShowSuccess, t, asPath, query, locale, back, push };
};
