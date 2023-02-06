import { Camera, HomeIcon } from "components";
import Link from "next/link";
import { useProfileInfo } from "./useProfileInfo";

const ProfileInfo = () => {
  const { t, user } = useProfileInfo();
  return (
    <div className="flex flex-col gap-10 text-white ml-11 mt-10">
      <div className="flex items-center gap-5">
        <img
          className="w-10 md:w-16 h-10 md:h-16 rounded-full"
          src={
            user.image
              ? user.image
              : "https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
          }
        />
        <div>
          <h1 className="text-xl">{user.name}</h1>
          <Link href={"/profile"}>{t("edit_profile")}</Link>
        </div>
      </div>
      <div className="ml-3 flex gap-7 items-center">
        <HomeIcon />
        <Link href={"/news-feed"}>{t("news")}</Link>
      </div>
      <div className="ml-3 flex gap-7 items-center">
        <Camera />
        <Link href={"/movies"}>{t("list_movies")}</Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
