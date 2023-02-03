import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useSelector } from "react-redux";
import { RootState } from "store";
const useProfile = () => {
  const { route, query } = useRouter();

  const { t } = useTranslation("profile");
  const { user } = useSelector((store: RootState) => store?.user);

  return { route, query, t, user };
};

export default useProfile;
