import { RedBtn, BlackBtn, LangDropdown } from "components";

const LandingHeader: React.FC<{
  labels: { movie_quotes: string; singup: string; login: string };
}> = ({ labels }) => {
  return (
    <div className="fixed top-0 z-10 w-full flex justify-between items-center pl-8 md:pl-16 pr-8 md:pr-16 h-16">
      <p className="text-orangeWhite">{labels.movie_quotes}</p>
      <div className="flex gap-4 relative">
        <LangDropdown />
        <RedBtn label={labels.singup} className="hidden md:block" />
        <BlackBtn label={labels.login} />
      </div>
    </div>
  );
};

export default LandingHeader;
