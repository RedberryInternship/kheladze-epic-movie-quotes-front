import {
  Layout,
  LeftArrow,
  RightArrow,
  EditNameMail,
  EditPassword,
  Emails,
} from "components";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import { useProfile } from "hooks";

const Profile: NextPage = () => {
  const { route, query, t, user } = useProfile();
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
            <p className="text-xl mb-14">{t("upload_new")}</p>
            <div className="border-b border-gray-300 w-full pb-4 mb-8">
              <p>{t("username")}</p>
              <div className="flex justify-between">
                <p className="text-lg">{user.name}</p>
                <Link href={`${route}?edit=name`} className="text-lg">
                  {t("edit")}
                </Link>
              </div>
            </div>
            <div className="border-b border-gray-300 w-full pb-4">
              <p>{t("password")}</p>
              <div className="flex justify-between">
                <p>••••••••••••</p>
                <Link href={`${route}?edit=password`} className="text-lg">
                  {t("edit")}
                </Link>
              </div>
            </div>
            <p className="w-full mt-8 pb-20 flex justify-between">
              <span>{t("email")}</span>
              <Link href={`${route}?edit=mail`}>
                <RightArrow />
              </Link>
            </p>
          </div>
        </div>
      )}
      {query.edit === "name" && (
        <EditNameMail back={"/profile"} label={t("new_username")} user={user} />
      )}
      {query.edit === "password" && <EditPassword user={user} />}
      {query.edit === "mail" && <Emails user={user} />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "profile",
        "newsfeed",
      ])),
    },
  };
};

export default Profile;
