import { createSlice } from "@reduxjs/toolkit";

// 🔹 Load from localStorage
const loadState = () => {
  try {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : { items: [] };
  } catch {
    return { items: [] };
  }
};

const initialState = loadState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        i => i.id !== action.payload
      );
    },

    increaseQty: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload
      );

      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(
        i => i.id === action.payload
      );

      if (!item) return;

      if (item.quantity > 1) {
        item.quantity -= 1;
      } else {
        // 🔥 Remove item if quantity hits 0
        state.items = state.items.filter(
          i => i.id !== action.payload
        );
      }
    },

    clearCart: (state) => {
      state.items = [];
    }
  }
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart
} = cartSlice.actions;

export default cartSlice.reducer;