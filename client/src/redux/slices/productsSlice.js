import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("http://localhost:3333/products/all");
    const data = await response.data;
    return data;
  }
);

const fetchProductsPending = (state) => {
  state.isLoading = true;
};

const fetchProductsFulfilled = (state, action) => {
  state.isLoading = false;
  state.data = action.payload;
};

const fetchProductsRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, fetchProductsPending);
    builder.addCase(fetchProducts.fulfilled, fetchProductsFulfilled);
    builder.addCase(fetchProducts.rejected, fetchProductsRejected);
  },
});

export default productsSlice;
