import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GENERAL_URL } from "../../config/apiConstants";

export const fetchCategories = createAsyncThunk(
  "categories/fetchCategories",
  async () => {
    const response = await axios.get(`${GENERAL_URL}/categories/all`);
    const data = await response.data;
    return data;
  }
);

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    data: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchCategories.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default categoriesSlice;
