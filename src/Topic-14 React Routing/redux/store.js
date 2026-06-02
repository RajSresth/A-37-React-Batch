import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";
import { userApi } from "./userApi.js";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(userApi.middleware);
  },
});

export default store;
