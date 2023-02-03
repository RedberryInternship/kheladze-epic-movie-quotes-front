import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";

export const useProfileInfo = () => {
  const { t } = useTranslation("newsfeed");
  const { user } = useSelector((store: RootState) => store?.user);
  return { t, user };
};
