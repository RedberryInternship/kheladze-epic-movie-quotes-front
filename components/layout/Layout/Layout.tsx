import { Navbar, Sidebar } from "components";
import { useAuth } from "hooks";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const user = useAuth();

  return (
    <div className="w-screen md:h-full h-screen pb-12 bg-zinc-900 text-white">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
