import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export const useQuoteList = () => {
  const { t } = useTranslation("movie");
  const { push, asPath, query, locale } = useRouter();
  const l = locale === "en" ? "en" : "ka";
  return { t, l, push, asPath, query };
};
