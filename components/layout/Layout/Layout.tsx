import { Navbar, Sidebar } from "components";
import { useLayout } from "hooks";
import { LayoutProps } from "types";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const user = useLayout();
  return (
    <div className="w-screen md:h-full h-screen pb-12 bg-zinc-900 text-white">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
