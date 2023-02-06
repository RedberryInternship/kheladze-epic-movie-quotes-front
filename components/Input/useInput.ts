import { useRouter } from "next/router";
import { useState } from "react";

export const useInput = (type: string) => {
  const [toggle, setToggle] = useState(type);
  const { pathname, query } = useRouter();
  return { toggle, setToggle, pathname, query };
};
