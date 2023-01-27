import { Layout } from "components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { fetchCSRFToken, logout } from "services/axios";

const News: NextPage = () => {
  const { push } = useRouter();
  return (
    <Layout>
      <button
        className="text-white"
        onClick={() => {
          fetchCSRFToken();
          logout().then(() => {
            push("/");
          });
        }}
      >
        Log Out
      </button>
      <form></form>
    </Layout>
  );
};

export default News;
