import { useTranslation } from "next-i18next";

export const useSuccess = () => {
  const { t } = useTranslation("profile");
  return { t };
};
