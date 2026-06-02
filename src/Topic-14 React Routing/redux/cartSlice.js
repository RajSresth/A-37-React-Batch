import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    userData: null,
    isError: false,
    isLoading: false
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        existingItem.quantity = existingItem.quantity + 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state,action) => {},
    clearCart: (state,action) => {},
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;

