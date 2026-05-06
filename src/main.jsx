import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import App from "./App";
import Home from "./Topic-14 React Routing/Home";
import Profile from "./Topic-14 React Routing/Profile";
import Shop from "./Topic-14 React Routing/Shop";
import Order from "./Topic-14 React Routing/Order";

// Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
