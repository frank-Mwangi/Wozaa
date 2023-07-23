import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./contexts/UserContext.jsx";
import { FeedProvider } from "./contexts/FeedContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <FeedProvider>
      <App />
    </FeedProvider>
  </UserProvider>
);
