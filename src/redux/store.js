import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// 🔹 Persist cart automatically
store.subscribe(() => {
  try {
    const state = store.getState();
    localStorage.setItem(
      "cart",
      JSON.stringify(state.cart)
    );
  } catch (err) {
    console.error("Could not save cart", err);
  }
});