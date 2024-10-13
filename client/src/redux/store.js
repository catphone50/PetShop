import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./slices/productsSlice";
import cartSlice from "./slices/cartSlice";
import categoriesSlice from "./slices/categoriesSlice";
import categorySlice from "./slices/categorySlice";
import productSlice from "./slices/productSlice";

const store = configureStore({
  reducer: {
    products: productsSlice.reducer,
    cart: cartSlice.reducer,
    categories: categoriesSlice.reducer,
    category: categorySlice.reducer,
    product: productSlice.reducer,
  },
});

export default store;
