import { Layout, MovieHeader } from "components";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Movies: NextPage = () => {
  return (
    <Layout>
      <MovieHeader />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, ["movie", "newsfeed"])),
    },
  };
};

export default Movies;
