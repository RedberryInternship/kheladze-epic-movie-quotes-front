import { Layout, ProfileDesktop, ProfileMobile } from "components";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Profile: NextPage = () => {
  return (
    <Layout>
      <div className="hidden md:block">
        <ProfileDesktop />
      </div>
      <div className="md:hidden block">
        <ProfileMobile />
      </div>
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
