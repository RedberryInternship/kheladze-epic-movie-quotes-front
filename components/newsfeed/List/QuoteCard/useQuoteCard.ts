import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addComment,
  addLike,
  fetchCSRFToken,
  getQuotes,
  unLike,
} from "services/axios";
import { storeQuotes } from "store";
import { Quote, User } from "types";

export const useQuoteCard = (quote: Quote, loggedInUser: User) => {
  const { locale } = useRouter();
  const l = locale === "en" ? "en" : "ka";
  const [commentVal, setCommentVal] = useState("");
  const dispatch = useDispatch();
  const reFetchQuotes = async () => {
    const quote = await getQuotes(1);
    dispatch(storeQuotes(quote.data));
  };
  const onCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await fetchCSRFToken();
      await addComment({
        comment: commentVal,
        writerId: loggedInUser.id,
        quoteId: quote.id,
        userId: quote.movies.users?.id,
      });
      setCommentVal("");
      reFetchQuotes();
    } catch (error) {}
  };

  const liked = quote.likes.some(
    (like) => Number(like.user_id) === loggedInUser.id
  );

  const like = async (data: any) => {
    try {
      if (liked) {
        await fetchCSRFToken();
        await unLike({ userId: loggedInUser.id, quoteId: quote.id });
      } else {
        await fetchCSRFToken();
        await addLike(data);
      }
      reFetchQuotes();
    } catch (error) {}
  };

  return {
    l,
    commentVal,
    setCommentVal,
    reFetchQuotes,
    onCommentSubmit,
    like,
    liked,
  };
};
