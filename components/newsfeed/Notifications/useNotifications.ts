import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { fetchCSRFToken, readNotification } from "services/axios";
import { RootState } from "store";
import { Notification } from "types";
export const useNotifications = () => {
  const { push } = useRouter();
  const { user, quotes } = useSelector((store: RootState) => store.user);

  const { t } = useTranslation("newsfeed");

  const notifications = [...user.notifications];

  const onNotificationClick = async (n: Notification) => {
    const quote = quotes.find((quote) => quote.id === Number(n.quote_id));
    await fetchCSRFToken();
    await readNotification({ id: n.id });
    push(`/movies?movie=${quote?.movie_id}&viewquote=${quote?.id}`);
  };

  return { onNotificationClick, t, notifications, user };
};
