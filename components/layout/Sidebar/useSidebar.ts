import { useRouter } from "next/router";

export const useSidebar = () => {
  const { push, route, query } = useRouter();
  return { push, route, query };
};
