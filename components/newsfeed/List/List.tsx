import { QuoteCard } from "components";
import InfiniteScroll from "react-infinite-scroll-component";
import { useList } from "./useList";

const List = () => {
  const { quotes, user, fetchQuotes } = useList();

  const list = quotes.map((quote) => {
    if (quote.movies) {
      return (
        <QuoteCard
          key={`${quote.image}${quote.id}`}
          loggedInUser={user}
          quote={quote}
        />
      );
    }
  });

  return (
    <InfiniteScroll
      className="flex flex-col items-center gap-8 md:gap-10 w-full xl:w-1000 lg:w-601"
      dataLength={quotes.length}
      next={fetchQuotes}
      hasMore={true}
      loader={<h4></h4>}
      endMessage={<h4>You have seen it all</h4>}
    >
      {list}
    </InfiniteScroll>
  );
};

export default List;
