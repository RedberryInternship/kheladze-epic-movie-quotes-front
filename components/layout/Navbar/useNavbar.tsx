import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const useNavbar = () => {
  const router = useRouter();
  const { t } = useTranslation("newsfeed");
  return { t, router };
};
