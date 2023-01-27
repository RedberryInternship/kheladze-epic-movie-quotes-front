import { Burger, Ring, Search, LangDropdown, BlackBtn } from "components";
import { newsEn, newsKa } from "lang";
import Link from "next/link";

import { useRouter } from "next/router";

const Navbar = () => {
  const { locale, push, route } = useRouter();
  console.log(route);
  const { movie_quotes, logout } = locale === "en" ? newsEn : newsKa;
  return (
    <div className="bg-zinc-800 h-86 flex justify-between items-center pl-9 md:pl-16 pr-9 md:pr-16">
      <h1 className="text-orangeWhite hidden md:block">{movie_quotes}</h1>
      <Link href={`${route}?sidebar=1`}>
        <Burger className="md:hidden" />
      </Link>
      <div className="relative flex gap-5 md:gap-32 items-center">
        <Search className="md:hidden" />
        <LangDropdown className="absolute left-16 top-1/4 hidden md:block" />
        <Ring />
        <BlackBtn
          className="hidden md:block"
          click={() => console.log("click")}
          label={logout}
        />
      </div>
    </div>
  );
};

export default Navbar;
