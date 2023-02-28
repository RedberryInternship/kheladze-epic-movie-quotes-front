import { AddQuote, Layout, List, NewsHeader, ViewQuote } from "components";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

const News: NextPage = () => {
  const { query } = useRouter();
  return (
    <Layout>
      <div className="w-full h-full mt-24 flex flex-col items-center">
        <NewsHeader />
        <List />
        {query.add === "quote" && <AddQuote />}
        {query.viewquote && <ViewQuote />}
      </div>
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
