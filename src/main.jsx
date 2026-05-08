import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import App from "./App";
import Home from "./Topic-14 React Routing/pages/Home";
import Profile from "./Topic-14 React Routing/pages/Profile";
import Shop from "./Topic-14 React Routing/pages/Shop"
import Order from "./Topic-14 React Routing/pages/Order"
import NotFound from "./Topic-14 React Routing/pages/NotFound";
import ProductPage from "./Topic-14 React Routing/pages/ProductPage";
// Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
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
      {
        path: "products/:id",
        element:<ProductPage/>
      }
    ],
  },
  {
    path: "*",
    element: <NotFound/>
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
