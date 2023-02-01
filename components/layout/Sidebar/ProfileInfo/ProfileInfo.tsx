import { Camera, HomeIcon } from "components";
import Link from "next/link";

const ProfileInfo: React.FC<{
  texts: { edit_profile: string; list_movies: string; news: string };
}> = ({ texts }) => {
  return (
    <div className="flex flex-col gap-10 text-white ml-11 mt-10">
      <div className="flex items-center gap-5">
        <img
          className="w-10 md:w-16 h-10 md:h-16 rounded-full"
          src="https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
        />
        <div>
          <h1 className="text-xl">saxeli gvari</h1>
          <Link href={"/profile"}>{texts.edit_profile}</Link>
        </div>
      </div>
      <div className="ml-3 flex gap-7 items-center">
        <HomeIcon />
        <Link href={"/news-feed"}>{texts.news}</Link>
      </div>
      <div className="ml-3 flex gap-7 items-center">
        <Camera />
        <Link href={"/movies"}>{texts.list_movies}</Link>
      </div>
    </div>
  );
};

export default ProfileInfo;
