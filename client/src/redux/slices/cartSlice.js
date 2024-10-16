import { createSlice } from "@reduxjs/toolkit";

export const selectCartTotal = (state) => {
  return state.cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
};

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : [];
  } catch (error) {
    console.error("Failed to load state from localStorage:", error);
    return [];
  }
};

const saveToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("cart", serializedState);
  } catch (error) {
    console.error("Failed to save state to localStorage:", error);
  }
};

const initialState = loadFromLocalStorage();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIndex >= 0) {
        state[existingItemIndex].quantity += action.payload.quantity;
      } else {
        state.push({ ...action.payload, quantity: action.payload.quantity });
      }
      saveToLocalStorage(state);
    },
    removeItem(state, action) {
      console.log(action.payload);
      const newState = state.filter((item) => item.id !== action.payload.id);

      saveToLocalStorage(newState);
      return newState;
    },
    updateItemQuantity(state, action) {
      const item = state.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
        saveToLocalStorage(state);
      }
    },
    clearCart(state) {
      saveToLocalStorage([]);
      return [];
    },
  },
});

export const { addItem, removeItem, updateItemQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice;
