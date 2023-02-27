import { Gendalf, RedBtn } from "components";
import { useRouter } from "next/router";

const Unauthorized = () => {
  const { push } = useRouter();
  return (
    <div className="w-screen h-screen md:p-0 p-8 bg-zinc-800 flex flex-col items-center justify-center">
      <Gendalf />
      <RedBtn label="Return Home" click={() => push("/")} />
    </div>
  );
};

export default Unauthorized;
