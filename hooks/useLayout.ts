import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getGenres, getMovies, me } from "services/axios";
import { storeGenres, storeMovies, storeUser } from "store";
import { Movie } from "types";

const useLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const checkAuth = async () => {
    try {
      const response = await me();
      dispatch(storeUser(response.data.user));
      const movies = async () => {
        const movie = await getMovies();
        const myMovies = movie.data.filter((movie: Movie) => {
          return movie.user_id === response.data.user.id;
        });
        dispatch(storeMovies(myMovies));
        if (router.pathname.includes("/movies")) {
          const genres = await getGenres();
          dispatch(storeGenres(genres.data[`${router.locale}`]));
        }
      };
      if (
        router.pathname.includes("/movies") ||
        router.pathname.includes("/news-feed")
      ) {
        movies();
      }
    } catch (error) {
      if (router.pathname !== "/") {
        router.push("/");
      }
    }
  };
  useEffect(() => {
    checkAuth();
  }, [router]);
};

export default useLayout;
