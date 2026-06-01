import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("cart/fetchUsers",async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users")
  return response?.data;
})



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
  extraReducers: (builder) =>{
    builder.addCase(fetchUsers.pending, (state,action) => {
      state.isLoading = true
    })
   
    builder.addCase(fetchUsers.fulfilled, (state,action) => {
      state.isLoading = false;
      state.userData = action.payload
    })

    builder.addCase(fetchUsers.rejected, (state,action) => {
      state.isLoading = false
      state.isError = true;
    })
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;


/*
1. Render then fetch 
2. fetch then render
3. render while fetch
*/


/**
 * ! 1. Render then fetch = useEffect() - local storage
        <Component />  => shimmer ui  => api => real data => ui

 * ! 2. fetch then render
        <Component /> => api (takes 2sec) => ui

  * ! 3. Render while fetch - Asynchronous state management library
                        => api
        <Component />   => ui
 */


/**
 * !  Asynchronous state management library - RTK Query, SWC, React Query (Tanstack Query)
 * ? Caching
 * ? Render while fetch
 * ? unnecessary api call
 * ? Project scalable
 * Chatting System - WebSocket + RTK Query
 * Chatting System - WebSocket + React Query(Tanstack Query)
 */


