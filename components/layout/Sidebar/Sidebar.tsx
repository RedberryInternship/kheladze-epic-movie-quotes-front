import { Modal, ProfileInfo } from "components";
import { useSidebar } from "./useSidebar";

const Sidebar: React.FC<{ user?: string }> = ({ user }) => {
  const { push, route, query } = useSidebar();

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
