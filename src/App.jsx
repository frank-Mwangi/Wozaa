import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Feed, Error, SharedLayout, Login } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { MyProfile, MyPosts, Following, Users, PrivateRoutes } from "./pages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Feed />} />
          <Route
            path="/my-profile"
            element={
              <PrivateRoutes>
                <MyProfile />
              </PrivateRoutes>
            }
          />
          <Route
            path="/my-posts"
            element={
              <PrivateRoutes>
                <MyPosts />
              </PrivateRoutes>
            }
          />
          <Route
            path="/following"
            element={
              <PrivateRoutes>
                <Following />
              </PrivateRoutes>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoutes>
                <Users />
              </PrivateRoutes>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </Router>
  );
}

export default App;
