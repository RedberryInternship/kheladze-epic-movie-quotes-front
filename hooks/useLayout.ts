import Echo from "laravel-echo";

import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, getMovies, instance, me } from "services/axios";
import { RootState, storeGenres, storeMovies, storeUser } from "store";
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
        router.push("/401");
      }
    }
  };
  useEffect(() => {
    checkAuth();
  }, [router]);
  const user = useSelector((store: RootState) => store.user.user);
  const updateNotifications = async () => {
    if (typeof window !== "undefined") {
      const pusher = require("pusher-js");

      const echo = new Echo({
        broadcaster: "pusher",
        key: process.env.NEXT_PUBLIC_PUSHER_APP_KEY,
        cluster: process.env.NEXT_PUBLIC_PUSHER_APP_CLUSTER,
        forceTLS: true,
        authorizer: (channel: { name: string }) => {
          return {
            authorize: async (socketId: number, callback: Function) => {
              try {
                const response = await instance.post(
                  `${process.env.NEXT_PUBLIC_API_URL}/api/broadcasting/auth`,
                  {
                    socket_id: socketId,
                    channel_name: channel.name,
                  }
                );
                callback(false, response.data);
              } catch (error) {
                callback(true, error);
              }
            },
          };
        },
      });

      echo
        .private("notification." + user.id)
        .listen("NotificationCreate", (data: Notification) => {
          const updateUserInfo = async () => {
            const response = await me();
            dispatch(storeUser(response?.data?.user));
          };
          updateUserInfo();
        });
    }
  };
  if (router.pathname === "/news-feed" && user.id) {
    updateNotifications();
  }
};

export default useLayout;
