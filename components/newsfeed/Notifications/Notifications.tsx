import { LikeFilled, QuoteIcon } from "components";
import { useDispatch } from "react-redux";
import { fetchCSRFToken, markAsRead, me } from "services/axios";
import { storeUser } from "store";
import { NotificationsProps } from "types";
import { calculateTime } from "./helpers";
import { useNotifications } from "./useNotifications";

const Notifications: React.FC<NotificationsProps> = ({ closeModal }) => {
  const { onNotificationClick, t, notifications } = useNotifications();

  const list = notifications.reverse().map((n) => {
    return (
      <div
        onClick={() => {
          onNotificationClick(n);
          closeModal(false);
        }}
        className="flex items-center lg:gap-6 gap-4 h-28 border border-gray-300 border-opacity-30 rounded-md
        lg:pl-6 lg:pr-6 p-4 mb-2 lg:mb-4"
        key={`${n.created_at}${n.id}`}
      >
        <div className="h-full flex flex-col items-center justify-between">
          <img
            className="rounded-full self-start lg:w-20 w-14 lg:h-20 h-14"
            src={n.writer.image}
          />
          {n.is_new === 1 && (
            <p className="text-green-700 lg:hidden block">New</p>
          )}
        </div>
        <div className="flex flex-col gap-1 flex-1 justify-start">
          <h1>{n.writer.name}</h1>
          {n.type === "comment" ? (
            <p className="flex items-center gap-3">
              <QuoteIcon /> {t("commented")}
            </p>
          ) : (
            <p className="flex items-center gap-3">
              <LikeFilled className="w-6 h-5" /> {t("reacted")}
            </p>
          )}
          <p className="lg:hidden block">{calculateTime(n.created_at)}</p>
        </div>
        <div className="">
          <p className="hidden lg:block">{calculateTime(n.created_at)}</p>
          {n.is_new === 1 && (
            <p className="text-green-700 hidden lg:block">New</p>
          )}
        </div>
      </div>
    );
  });
  const dispatch = useDispatch();
  const markAllAsRead = async () => {
    try {
      await fetchCSRFToken();
      await markAsRead();
      const response = await me();
      dispatch(storeUser(response.data.user));
    } catch (error) {}
  };
  return (
    <>
      <div className="flex items-center justify-between mb-7">
        <h1 className="font-medium lg:text-3xl text-xl">
          {t("notifications")}
        </h1>
        <h3 className="underline lg:text-xl text-sm" onClick={markAllAsRead}>
          {t("mark_as_read")}
        </h3>
      </div>
      {list}
    </>
  );
};

export default Notifications;
