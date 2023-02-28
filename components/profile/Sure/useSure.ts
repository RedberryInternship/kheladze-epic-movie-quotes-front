import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
export const useSure = () => {
  const { back } = useRouter();
  const { t } = useTranslation("profile");

  return { back, t };
};
