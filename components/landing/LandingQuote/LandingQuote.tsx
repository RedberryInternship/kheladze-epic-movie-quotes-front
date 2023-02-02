import { LandingQuoteProps } from "types";

const LandingQuote: React.FC<LandingQuoteProps> = ({
  background,
  quote,
  movie,
}) => {
  return (
    <div
      className={`text-white flex flex-col justify-center gap-4 md:pl-40 pl-9 bg-fixed bg-cover h-screen bg-center bg-no-repeat ${background}`}
    >
      <header className="md:text-5xl text-xl flex">
        <p className="border-2 border-white md:w-14 w-4 h-0 md:mt-6 mt-3 mr-2"></p>
        <p className="w-4/5">"{quote}"</p>
      </header>
      <p className="md:text-3xl text-base">{movie}</p>
    </div>
  );
};

export default LandingQuote;
