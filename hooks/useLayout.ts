import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getGenres, getMovies, me } from "services/axios";
import { storeGenres, storeMovies, storeUser } from "store";

const useLayout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await me();
        setUser(response.data.user);
        dispatch(storeUser(response.data.user));
      } catch (error) {
        if (router.pathname !== "/" || !user) {
          router.push("/");
        }
      }
    };
    const movies = async () => {
      const movie = await getMovies();
      dispatch(storeMovies(movie.data));
      const genres = await getGenres();
      dispatch(storeGenres(genres.data[`${router.locale}`]));
    };
    if (router.pathname.includes("/movies")) {
      movies();
    }
    checkAuth();
  }, [router]);

  return user;
};

export default useLayout;
