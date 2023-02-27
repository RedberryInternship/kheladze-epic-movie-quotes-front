import { Ellipse, RedBtn, Whoops } from "components";
import { useRouter } from "next/router";

const NotFound = () => {
  const { push } = useRouter();
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-8 text-white">
      <Whoops />
      <Ellipse />
      <h1 className="font-bold lg:text-5xl text-2xl">Whoops</h1>
      <h3 className="font-medium lg:text-2xl text-base">
        We can't see the page you are looking for
      </h3>
      <RedBtn label="Return Home" click={() => push("/")} />
    </div>
  );
};

export default NotFound;
