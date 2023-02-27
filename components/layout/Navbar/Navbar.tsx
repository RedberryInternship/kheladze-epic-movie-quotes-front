import {
  Burger,
  Ring,
  Search,
  LangDropdown,
  BlackBtn,
  LeftArrow,
  NotificationPointerIcon,
  Notifications,
} from "components";
import Link from "next/link";
import { useNavbar } from "./useNavbar";
import { motion } from "framer-motion";

const Navbar = () => {
  const {
    t,
    router,
    inputVal,
    setInputVal,
    logoutHandler,
    openSearch,
    setOpenSearch,
    onSearchSubmit,
    openNotifications,
    setOpenNotifications,
    newNotifications,
  } = useNavbar();

  return (
    <>
      <div className="bg-zinc-800 h-86 fixed z-10 top-0 w-screen flex justify-between items-center pl-9 md:pl-16 pr-9 md:pr-16">
        <h1 className="text-orangeWhite hidden md:block">
          {t("movie_quotes")}
        </h1>
        <Link
          href={{
            pathname: router.pathname,
            query: { ...router.query, sidebar: "1" },
          }}
        >
          <Burger className="md:hidden" />
        </Link>
        <div className="relative flex gap-5 md:gap-32 items-center">
          {router.route === "/news-feed" && (
            <button onClick={() => setOpenSearch(true)} className="md:hidden">
              <Search />
            </button>
          )}

          <LangDropdown className="absolute left-16 top-1/4 hidden md:block" />
          <button
            className="relative"
            onClick={() => setOpenNotifications(true)}
          >
            <Ring />
            {newNotifications && newNotifications.length !== 0 && (
              <span className="absolute -top-3 -right-3 rounded-full bg-red-600 w-6 h-6 flex items-center justify-center">
                {newNotifications.length}
              </span>
            )}

            {openNotifications && (
              <NotificationPointerIcon className="absolute -bottom-12 -right-2" />
            )}
          </button>
          <BlackBtn
            className="hidden md:block"
            click={logoutHandler}
            label={t("log_out")}
          />
        </div>
      </div>
      {openSearch && (
        <>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.4 }}
            className="w-screen right-0 top-0 h-750 z-40 flex flex-col fixed bg-zinc-800"
          >
            <div className="w-full flex gap-7 items-center p-8 h-16 border-b border-gray-300 border-opacity-20">
              <button onClick={() => setOpenSearch(false)}>
                <LeftArrow />
              </button>
              <form onSubmit={onSearchSubmit}>
                <input
                  onChange={(e) => setInputVal(e.target.value)}
                  value={inputVal}
                  placeholder="Search"
                  className="text-xl bg-inherit focus:outline-none h-full placeholder:text-white placeholder:text-xl"
                  type="text"
                />
              </form>
            </div>
            <h1 className="pl-20 text-gray-300 text-lg mt-7 ">{t("enter@")}</h1>
            <h1 className="pl-20 text-gray-300 text-lg mt-7 ">{t("enter#")}</h1>
          </motion.div>
          <div
            onClick={() => setOpenSearch(false)}
            className="w-screen h-screen top-0 left-0 bg-black z-30 fixed bg-opacity-50"
          ></div>
        </>
      )}
      {openNotifications && (
        <>
          <div className="rounded-xl lg:w-961 pt-5 lg:pt-10 pl-8 pr-8 lg:pb-14 pb-9 overflow-scroll w-screen lg:right-14 right-0 top-24 lg:h-812 h-750 z-40 flex flex-col fixed bg-black">
            <Notifications closeModal={setOpenNotifications} />
          </div>
          <div
            onClick={() => setOpenNotifications(false)}
            className="w-screen h-screen top-0 left-0 z-30 fixed"
          ></div>
        </>
      )}
    </>
  );
};

export default Navbar;
