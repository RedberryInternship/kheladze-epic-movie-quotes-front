import { useRouter } from "next/router";

export const useSidebar = () => {
  const { query, back } = useRouter();
  return { query, back };
};
