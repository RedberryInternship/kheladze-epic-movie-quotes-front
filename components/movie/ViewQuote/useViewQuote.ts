import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "store";
import { addComment, deleteQuote, fetchCSRFToken } from "services/axios";
import { useDispatch } from "react-redux";
import { addLike, getGenres, getMovies, unLike } from "services/axios";
import { storeGenres, storeMovies } from "store";
import { Movie } from "types";

export const useViewQuote = () => {
  const { back, query, pathname, push, locale } = useRouter();
  const { t } = useTranslation("movie");
  const [sure, setSure] = useState(false);
  const [commentVal, setCommentVal] = useState("");

  const { user, movies, quotes } = useSelector(
    (store: RootState) => store.user
  );

  const quote =
    movies &&
    movies
      .find((movie) => movie.id === Number(query.movie))
      ?.quotes.find((quote) => quote.id === Number(query.viewquote));

  const quoteDelete = async () => {
    try {
      await fetchCSRFToken();
      await deleteQuote({ quoteId: quote?.id });
      setSure(false);
      push(`${pathname}?movie=${query.movie}`);
    } catch (error) {}
  };
  const dispatch = useDispatch();

  const liked = quote?.likes.some((like) => Number(like.user_id) === user.id);

  const reFetchData = async () => {
    const movie = await getMovies();
    const myMovies = movie.data.filter((movie: Movie) => {
      return movie.user_id === user.id;
    });
    dispatch(storeMovies(myMovies));
    if (pathname.includes("/movies")) {
      const genres = await getGenres();
      dispatch(storeGenres(genres.data[`${locale}`]));
    }
  };

  const like = async (data: any) => {
    try {
      if (liked) {
        await fetchCSRFToken();
        await unLike({ userId: user.id, quoteId: quote?.id });
      } else {
        await fetchCSRFToken();
        await addLike(data);
      }
      reFetchData();
    } catch (error) {}
  };
  const onCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchCSRFToken();
      await addComment({
        comment: commentVal,
        writerId: user?.id,
        quoteId: quote?.id,
        userId: user?.id,
      });
      setCommentVal("");
      reFetchData();
    } catch (error) {}
  };

  return {
    t,
    back,
    pathname,
    sure,
    setSure,
    user,
    movies,
    quote,
    quoteDelete,
    like,
    liked,
    onCommentSubmit,
    commentVal,
    setCommentVal,
  };
};
