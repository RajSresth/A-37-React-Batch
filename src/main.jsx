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
import { ThemeProvider } from "./Topic-14 React Routing/store/ThemeContext";
import Cart from "./Topic-14 React Routing/pages/Cart";
import { Provider } from "react-redux";
import store from "./Topic-14 React Routing/redux/store";
import { userApi } from "./Topic-14 React Routing/redux/userApi";
import "./Topic-14 React Routing/redux/PostApi.js"; // this registers getAllComments on userApi
import ShopClass from "./Topic-14 React Routing/cbc/ShopClass.jsx";
import { ErrorBoundary } from "react-error-boundary";

// prefetch before your react app render
store.dispatch(
  userApi.util.prefetch("getAllComments", undefined, {
    force: false,
    ifOlderThan: 10,
  }),
);

createRoot(document.getElementById("root")).render(
  <ErrorBoundary
    fallback={<h2>Oops! Something went wrong</h2>}
  >
    <Provider store={store}>
      <AuthProvider>
        <ThemeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<ProtectedRoute />}>
                <Route path="/" element={<App />}>
                  <Route index element={<Home />} />
                  <Route path="profile" element={<Profile />} />
                  <Route path="shop" element={<Shop />} />
                  {/* <Route path="shop" element={<ShopClass />} /> */}
                  <Route path="order" element={<Order />} />
                  <Route path="products/:productId" element={<ProductPage />} />
                  <Route path="cart" element={<Cart />} />
                </Route>
              </Route>

              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </AuthProvider>    
    </Provider>
 </ErrorBoundary>
);
