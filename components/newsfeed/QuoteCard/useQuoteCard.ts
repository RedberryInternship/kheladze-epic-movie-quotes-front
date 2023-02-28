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
  const [tempComment, setTempComment] = useState<{
    comment: string;
    image: string;
    username: string;
  }>({
    username: "",
    comment: "",
    image: "",
  });
  const dispatch = useDispatch();
  const reFetchQuotes = async () => {
    const quote = await getQuotes("/api/quote?page=1");
    dispatch(storeQuotes(quote.data));
  };
  const onCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setTempComment({
        comment: commentVal,
        image: loggedInUser.image,
        username: loggedInUser.name,
      });
      await fetchCSRFToken();
      await addComment({
        comment: commentVal,
        writerId: loggedInUser.id,
        quoteId: quote.id,
        userId: quote.movies.users?.id,
      });
      setCommentVal("");
      await reFetchQuotes();
      setTempComment({
        comment: "",
        image: "",
        username: "",
      });
    } catch (error) {}
  };

  const liked = quote.likes.some(
    (like) => Number(like.user_id) === loggedInUser.id
  );
  const [tempLike, setTempLike] = useState(liked);

  const like = async (data: any) => {
    try {
      if (liked) {
        await fetchCSRFToken();
        await unLike({ userId: loggedInUser.id, quoteId: quote.id });
        setTempLike(false);
      } else {
        setTempLike(true);
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
    tempLike,
    tempComment,
    liked,
  };
};
