import { CommentsIcon, LikeFilled, LikesIcon } from "components/icons";
import { QuoteCardProps } from "types";
import { useQuoteCard } from "./useQuoteCard";

const QuoteCard: React.FC<QuoteCardProps> = ({ quote, loggedInUser }) => {
  const {
    l,
    commentVal,
    setCommentVal,
    onCommentSubmit,
    like,
    tempLike,
    tempComment,
    liked,
  } = useQuoteCard(quote, loggedInUser);

  const commentsList =
    quote.comments.length > 0 &&
    quote.comments.map((comment) => (
      <div key={comment.id} className="COMMENTS md:mt-6 mt-4">
        <div className="pb-6 border-b border-gray-300 border-opacity-20">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full md:w-14 md:h-14 w-10 h-10"
              src={comment.user.image}
            />
            <h1 className="text-xl">{comment.user.name}</h1>
          </div>
          <p className="lg:pl-7222">{comment.comment}</p>
        </div>
      </div>
    ));

  return (
    <div className="bg-black w-full md:rounded-xl p-8 md:p-6 md:text-xl">
      <div className="flex items-center gap-4 mb-4">
        <img
          className="md:w-14 w-10 h-10 md:h-14 rounded-full"
          src={quote.movies.users?.image && quote.movies.users?.image}
        />
        <p>{quote.movies.users?.name}</p>
      </div>
      <h1 className="flex items-center gap-2 flex-wrap mb-6 md:mb-4">
        <span>{`"${quote.quote[l]}"`}</span>
        <span className="text-orangeWhite font-semibold">
          {quote.movies.name[l]}
        </span>
        <span>{`(${quote.movies.year})`}</span>
      </h1>
      <img className="w-full rounded-xl" src={quote.image} />
      <div className="pt-6 pb-5 text-xl flex items-center lg:h-20 h-16 border-b border-zinc-100 border-opacity-30 gap-6 lg:gap-8">
        <button className="flex lg:gap-4 gap-3">
          {quote.comments.length}
          <CommentsIcon className="lg:w-8 w-6" />
        </button>
        <button
          onClick={() => {
            like({
              quoteId: quote.id,
              recieverId: quote.movies.users?.id,
              userId: loggedInUser.id,
            });
          }}
          className="flex lg:gap-4 gap-3"
        >
          {quote.likes.length}
          {liked || tempLike ? (
            <LikeFilled className="lg:w-8 w-6" />
          ) : (
            <LikesIcon className="lg:w-8 w-6" />
          )}
        </button>
      </div>
      {commentsList}
      {tempComment.comment && (
        <div className="md:mt-6 mt-4 pb-6 border-b border-gray-300 border-opacity-20">
          <div className="flex gap-4 items-center">
            <img
              className="rounded-full md:w-14 md:h-14 w-10 h-10"
              src={tempComment.image}
            />
            <h1 className="text-xl">{tempComment.username}</h1>
          </div>
          <p className="lg:pl-7222">{tempComment.comment}</p>
        </div>
      )}

      <div className="flex items-center gap-6 mt-4 lg:mt-6">
        <img
          className="rounded-full md:w-14 md:h-14 w-10 h-10"
          src={loggedInUser.image}
        />
        <form onSubmit={onCommentSubmit} className="w-full">
          <input
            type="text"
            placeholder="Write comment"
            className="pl-6 border-none focus:outline-none bg-zinc-700 focus:border-blue-300 h-12 rounded-lg w-full border box-border"
            value={commentVal}
            onChange={(e) => setCommentVal(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
};

export default QuoteCard;
