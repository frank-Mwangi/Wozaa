import { Outlet } from "react-router-dom";
import { Navbar } from "../components";
import { Sidebar } from "../components";
import { useUserContext } from "../contexts/UserContext";
const SharedLayout = () => {
  const { user_profile } = useUserContext();
  return (
    <main>
      <Navbar />
      {user_profile && <Sidebar />}
      <Outlet />
    </main>
  );
};

export default SharedLayout;
