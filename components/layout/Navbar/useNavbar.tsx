import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import { useEffect, useState } from "react";
import { fetchCSRFToken, getQuotes, logout } from "services/axios";
import { useDispatch, useSelector } from "react-redux";
import { RootState, storeQuotes, storeSearchTerm } from "store";

export const useNavbar = () => {
  const router = useRouter();
  const { t } = useTranslation("newsfeed");

  const [inputVal, setInputVal] = useState("");
  const [openNotifications, setOpenNotifications] = useState(false);

  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      await fetchCSRFToken();
      await logout();
      deleteCookie("XSRF-TOKEN");
      router.push("/");
    } catch (error) {}
  };
  const notifications = useSelector(
    (store: RootState) => store.user.user.notifications
  );
  const newNotifications =
    notifications && notifications.filter((n) => n.is_new === 1);

  const [openSearch, setOpenSearch] = useState(false);

  const onSearchSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let query = "/api/quote?page=1";
    if (inputVal) {
      if (inputVal.includes("#")) {
        query = `/api/quote?page=1${
          inputVal && `&search=%23${inputVal.slice(1)}`
        }`;
      } else if (inputVal.includes("@")) {
        query = `/api/quote?page=1${inputVal && `&search=${inputVal}`}`;
      }
    }

    const searchedQuotes = await getQuotes(query);
    dispatch(storeQuotes(searchedQuotes.data));
    dispatch(storeSearchTerm(inputVal));
    setOpenSearch(false);
  };

  useEffect(() => {
    if (!openSearch) {
      dispatch(storeSearchTerm(""));
    }
  }, [openSearch, dispatch]);
  return {
    t,
    router,
    inputVal,
    setInputVal,
    dispatch,
    logoutHandler,
    openSearch,
    setOpenSearch,
    onSearchSubmit,
    openNotifications,
    setOpenNotifications,
    newNotifications,
  };
};
