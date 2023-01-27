import { Navbar, Sidebar } from "components";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-screen h-screen bg-zinc-900">
      <Navbar />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
