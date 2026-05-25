import { createRoot } from "react-dom/client";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import App from "./App";
import Home from "./Topic-14 React Routing/pages/Home";
import NotFound from "./Topic-14 React Routing/pages/NotFound";
import ProtectedRoute from "./Topic-14 React Routing/routes/ProtectedRoute";
import Profile from "./Topic-14 React Routing/pages/Profile";
import Shop from "./Topic-14 React Routing/pages/Shop";
import Order from "./Topic-14 React Routing/pages/Order";
import ProductPage from "./Topic-14 React Routing/pages/ProductPage";
import Signup from "./Topic-14 React Routing/pages/Signup";
import Login from "./Topic-14 React Routing/pages/Login";
import { AuthProvider } from "./Topic-14 React Routing/store/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="shop" element={<Shop />} />
            <Route path="order" element={<Order />} />
            <Route path="products/:productId" element={<ProductPage />} />
          </Route>
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>,
);
