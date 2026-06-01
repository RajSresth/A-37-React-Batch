import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";


const loggerMiddleware = (store) => (next) => (action) => {
 
    console.log("store:",store.getState());
    console.log("action:",action);
    const result = next(action); 
    console.log("store:",store.getState());
    return result;
}

const store = configureStore({
    reducer:{
        cart: cartReducer,

    },
    // middleware: (getDefaultMiddleware) => {
    //    return getDefaultMiddleware().concat(loggerMiddleware)
    // },
    devTools: true    
})

export default store;


