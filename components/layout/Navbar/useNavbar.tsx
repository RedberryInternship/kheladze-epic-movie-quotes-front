import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const useNavbar = () => {
  const { push, route } = useRouter();
  const { t } = useTranslation("newsfeed");
  return { t, push, route };
};
