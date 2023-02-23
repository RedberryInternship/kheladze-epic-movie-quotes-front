import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { Quote } from "types";
import { deleteQuote, fetchCSRFToken } from "services/axios";

export const useQuoteOptions = (quote: Quote) => {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const { t } = useTranslation("movie");

  const quoteDelete = async () => {
    try {
      await fetchCSRFToken();
      await deleteQuote({ quoteId: router.query.id });
      router.back();
    } catch (error) {}
  };

  return { t, open, setOpen, router, quoteDelete };
};
