import { useRouter } from "next/router";
import { instance } from "services";

import { getCookie } from "cookies-next";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { storeUser } from "store";
import { Layout } from "components";
import { GetServerSideProps, NextPage } from "next";

const News: NextPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(storeUser(JSON.parse(getCookie("user"))));
  }, []);
  // const { user } = useSelector((store) => store?.user);

  const { push } = useRouter();
  const logout = () => {
    instance()
      .get("/sanctum/csrf-cookie")
      .then((res) => {
        instance()
          .post("/api/logout")
          .then((res) => {
            push("/");
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    instance()
      .get("/sanctum/csrf-cookie")
      .then((res) => {
        instance()
          .get("/api/me")
          .then((res) => {
            console.log(res);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Layout>
      <button className="text-white" onClick={logout}>
        Log Out
      </button>
      <form></form>
    </Layout>
  );
};

export default News;
