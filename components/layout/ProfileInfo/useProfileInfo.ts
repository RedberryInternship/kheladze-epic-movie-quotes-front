import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const useProfileInfo = () => {
  const { t } = useTranslation("newsfeed");
  const { pathname } = useRouter();
  const { user } = useSelector((store: RootState) => store?.user);
  return { t, user, pathname };
};
