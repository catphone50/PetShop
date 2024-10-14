import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GENERAL_URL } from "../../config/apiConstants";

export const fetchProduct = createAsyncThunk(
  "product/fetchProduct",
  async (id) => {
    const response = await axios.get(`${GENERAL_URL}/products/${id}`);
    const data = await response.data;
    return data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    data: {},
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload[0];
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default productSlice;
