import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import { useUserContext } from "../contexts/UserContext";
const SharedLayout = () => {
  return (
    <main>
      <Navbar />
      <Sidebar />
      <Outlet />
    </main>
  );
};

export default SharedLayout;
