import {
  Layout,
  LeftArrow,
  RightArrow,
  EditNameMail,
  EditPassword,
  Emails,
} from "components";
import { profileEn, profileKa } from "lang";
import { RootState } from "store";

import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useTranslate } from "hooks";

const Profile: NextPage = () => {
  const { route, query } = useRouter();

  const profile = useTranslate(profileEn, profileKa);
  const { user } = useSelector((store: RootState) => store?.user);

  return (
    <Layout>
      {user && !query.edit && (
        <div className="overflow-scroll">
          <div className="w-full h-16 flex items-center">
            <Link className="ml-10" href={"/news-feed"}>
              <LeftArrow />
            </Link>
          </div>
          <div className="w-full pl-8 pr-8 bg-zinc-800 rounded-xl flex flex-col items-center">
            <img
              className="w-40 h-40 rounded-full mb-2 mt-10"
              src="https://i.pinimg.com/236x/5f/40/6a/5f406ab25e8942cbe0da6485afd26b71.jpg"
            />
            <p className="text-xl mb-14">{profile.upload_new}</p>
            <div className="border-b border-gray-300 w-full pb-4 mb-8">
              <p>{profile.username}</p>
              <div className="flex justify-between">
                <p className="text-lg">{user.name}</p>
                <Link href={`${route}?edit=name`} className="text-lg">
                  {profile.edit}
                </Link>
              </div>
            </div>
            <div className="border-b border-gray-300 w-full pb-4">
              <p>{profile.password}</p>
              <div className="flex justify-between">
                <p>••••••••••••</p>
                <Link href={`${route}?edit=password`} className="text-lg">
                  {profile.edit}
                </Link>
              </div>
            </div>
            <p className="w-full mt-8 pb-20 flex justify-between">
              <span>{profile.email}</span>
              <Link href={`${route}?edit=mail`}>
                <RightArrow />
              </Link>
            </p>
          </div>
        </div>
      )}
      {query.edit === "name" && (
        <EditNameMail
          back={"/profile"}
          label={profile.new_username}
          profile={profile}
          user={user}
        />
      )}
      {query.edit === "password" && (
        <EditPassword user={user} profile={profile} />
      )}
      {query.edit === "mail" && <Emails user={user} profile={profile} />}
    </Layout>
  );
};

export default Profile;
