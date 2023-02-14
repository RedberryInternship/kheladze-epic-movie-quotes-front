import {
  AddMovieModal,
  Layout,
  MovieHeader,
  MovieInfo,
  MovieList,
} from "components";
import { useMovies } from "hooks";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Movies: NextPage = () => {
  const { router } = useMovies();

  return (
    <Layout>
      {router.query.movie ? (
        <MovieInfo />
      ) : (
        <>
          <MovieHeader />
          <MovieList />
        </>
      )}
      {router.query.add === "movie" && <AddMovieModal />}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "movie",
        "newsfeed",
        "common",
      ])),
    },
  };
};

export default Movies;
