import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import App from "./App";
import Home from "./Topic-14 React Routing/pages/Home";
import Profile from "./Topic-14 React Routing/pages/Profile";
import Shop from "./Topic-14 React Routing/pages/Shop";
import Order from "./Topic-14 React Routing/pages/Order";
import NotFound from "./Topic-14 React Routing/pages/NotFound";
import ProductPage from "./Topic-14 React Routing/pages/ProductPage";

// auth pages
import Signup from "./Topic-14 React Routing/pages/Signup";

// Routes
import ProtectedRoute from "./Topic-14 React Routing/routes/ProtectedRoute";

// apis
import { getUserProfile } from "./Topic-14 React Routing/services/api";
import ErrorPage from "./Topic-14 React Routing/pages/ErrorPage";


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
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <Profile />,
            loader: getUserProfile,
            errorElement: <ErrorPage/>
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
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
