import { useRouter } from "next/router";

export const useLangDropdown = () => {
  const router = useRouter();
  return { router };
};
