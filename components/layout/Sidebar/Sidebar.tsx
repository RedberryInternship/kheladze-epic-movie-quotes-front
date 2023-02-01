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
      <div className="hidden md:block fixed left-0 top-20">
        <ProfileInfo texts={texts} />
      </div>
    </div>
  );
};

export default Sidebar;
