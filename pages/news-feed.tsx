import { Layout } from "components";
import { useAuth } from "hooks";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const News: NextPage = () => {
  return (
    <Layout>
      <form></form>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["newsfeed"])),
    },
  };
};

export default News;
