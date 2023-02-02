import { Modal, ProfileInfo } from "components";
import { useRouter } from "next/router";

const Sidebar: React.FC<{ user?: string }> = ({ user }) => {
  const { push, route, query } = useRouter();

  return (
    <div>
      <div className="md:hidden block">
        {query.sidebar && (
          <Modal closeModal={() => push(route)}>
            <ProfileInfo />
          </Modal>
        )}
      </div>
      <div className="hidden md:block fixed left-0 top-20">
        <ProfileInfo />
      </div>
    </div>
  );
};

export default Sidebar;
