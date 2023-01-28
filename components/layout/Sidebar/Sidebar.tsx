import { Modal, ProfileInfo } from "components";
import { newsEn, newsKa } from "lang";
import { useRouter } from "next/router";

const Sidebar: React.FC<{ user?: string }> = ({ user }) => {
  const { locale, push, route, query } = useRouter();
  const texts = locale === "en" ? newsEn : newsKa;
  return (
    <div>
      <div className="md:hidden block">
        {query.sidebar && (
          <Modal closeModal={() => push(route)}>
            <ProfileInfo texts={texts} />
          </Modal>
        )}
      </div>
      <div className="hidden md:block">
        <ProfileInfo texts={texts} />
      </div>
    </div>
  );
};

export const getInitialProps = async () => {
  return { props: { user: "user" } };
};

export default Sidebar;
