import { Navigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const PrivateRoutes = ({ children }) => {
  const { user_profile } = useUserContext();
  if (!user_profile) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoutes;
