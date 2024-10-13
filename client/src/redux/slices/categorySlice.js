import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCategory = createAsyncThunk(
  "category/fetchCategory",
  async (category) => {
    const response = await axios.get(
      `http://localhost:3333/categories/${category}`
    );
    const data = await response.data;
    return data;
  }
);

const fetchCategoryPending = (state) => {
  state.isLoading = true;
};

const fetchCategoryFulfilled = (state, action) => {
  state.isLoading = false;
  state.data.data = action.payload.data;
  state.data.category = action.payload.category;
};

const fetchCategoryRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.error.message;
};

const categorySlice = createSlice({
  name: "category",
  initialState: {
    data: {
      category: {},
      data: [],
    },
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategory.pending, fetchCategoryPending);
    builder.addCase(fetchCategory.fulfilled, fetchCategoryFulfilled);
    builder.addCase(fetchCategory.rejected, fetchCategoryRejected);
  },
});

export default categorySlice;
