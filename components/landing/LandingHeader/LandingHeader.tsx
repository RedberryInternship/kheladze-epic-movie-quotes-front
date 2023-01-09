import { RedBtn, BlackBtn } from "components/buttons";

const LandingHeader: React.FC = () => {
  return (
    <div className="fixed top-0 z-10 w-full flex justify-between items-center pl-8 md:pl-16 pr-8 md:pr-16 h-16">
      <p className="text-orangeWhite">Movie Quotes</p>
      <div className="flex gap-4">
        <RedBtn label="Sing Up" className="opacity-0 md:opacity-100" />
        <BlackBtn />
      </div>
    </div>
  );
};

export default LandingHeader;
