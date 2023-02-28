import { Camera, HomeIcon } from "components";
import Link from "next/link";
import { useProfileInfo } from "./useProfileInfo";

const ProfileInfo = () => {
  const { t, user, pathname, userImage } = useProfileInfo();

  return (
    <div className="flex flex-col gap-10 text-white ml-11 mt-10">
      <div className="flex items-center gap-5">
        <img
          className="w-10 md:w-16 h-10 md:h-16 rounded-full"
          src={userImage()}
        />
        <div>
          <h1 className="text-xl">{user.name}</h1>
          <Link href={"/profile"}>{t("edit_profile")}</Link>
        </div>
      </div>
      <div className="ml-3 flex gap-7 items-center">
        <HomeIcon color={pathname === "/news-feed" ? "#E31221" : "white"} />
        <Link href={"/news-feed"}>{t("news")}</Link>
      </div>
      <div className="ml-3 flex gap-7 items-center">
        <Camera color={pathname === "/movies" ? "#E31221" : "white"} />
        <Link href={"/movies"}>{t("list_movies")}</Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
