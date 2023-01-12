import { RedBtn, BlackBtn, LangDropdown } from "components";

const LandingHeader: React.FC<{
  login: () => void;
  singup: () => void;
  labels: { movie_quotes: string; singup: string; login: string };
}> = ({ labels, login, singup }) => {
  return (
    <div className="fixed top-0 z-10 w-full flex justify-between items-center pl-8 md:pl-16 pr-8 md:pr-16 h-16">
      <p className="text-orangeWhite">{labels.movie_quotes}</p>
      <div className="flex gap-4 relative">
        <LangDropdown />
        <RedBtn
          click={singup}
          label={labels.singup}
          className="hidden md:block"
        />
        <BlackBtn click={login} label={labels.login} />
      </div>
    </div>
  );
};

export default LandingHeader;
