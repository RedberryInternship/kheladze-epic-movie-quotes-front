import { Burger, Ring, Search, LangDropdown, BlackBtn } from "components";
import { deleteCookie } from "cookies-next";
import Link from "next/link";
import { fetchCSRFToken, logout } from "services/axios";
import { useNavbar } from "./useNavbar";

const Navbar = () => {
  const { t, router } = useNavbar();

  const logoutHandler = async () => {
    try {
      await fetchCSRFToken();
      await logout();
      deleteCookie("XSRF-TOKEN");
      router.push("/");
    } catch (error) {}
  };

  return (
    <div className="bg-zinc-800 h-86 fixed z-10 top-0 w-screen flex justify-between items-center pl-9 md:pl-16 pr-9 md:pr-16">
      <h1 className="text-orangeWhite hidden md:block">{t("movie_quotes")}</h1>
      <Link
        href={{
          pathname: router.pathname,
          query: { ...router.query, sidebar: "1" },
        }}
      >
        <Burger className="md:hidden" />
      </Link>
      <div className="relative flex gap-5 md:gap-32 items-center">
        {router.route === "/news-feed" && <Search className="md:hidden" />}
        <LangDropdown className="absolute left-16 top-1/4 hidden md:block" />
        <Ring />
        <BlackBtn
          className="hidden md:block"
          click={logoutHandler}
          label={t("log_out")}
        />
      </div>
    </div>
  );
};

export default Navbar;
