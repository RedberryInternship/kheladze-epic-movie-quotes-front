import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { me } from "services/axios";
import { storeUser } from "store";

const useAuth = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await me();
        setUser(response.data.user);
        dispatch(storeUser(response.data.user));
      } catch (error) {
        if (router.pathname !== "/" || !user) {
          router.push("/");
        }
      }
    };
    checkAuth();
  }, [router]);

  return user;
};

export default useAuth;
