import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  priceRange: { from: "", to: "" },
  discounted: false,
  sortOption: "byDefault",
  filteredProducts: [],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setPriceRange(state, action) {
      state.priceRange = action.payload;
    },
    toggleDiscounted(state) {
      state.discounted = !state.discounted;
    },
    setSortOption(state, action) {
      state.sortOption = action.payload;
    },
    applyFilters(state, action) {
      const { products } = action.payload;
      const { priceRange, discounted, sortOption } = state;

      let filteredProducts = products.slice();

      if (priceRange.from !== "" || priceRange.to !== "") {
        filteredProducts = filteredProducts.filter((product) => {
          const price = product.discont_price || product.price;
          return (
            (priceRange.from === "" || price >= priceRange.from) &&
            (priceRange.to === "" || price <= priceRange.to)
          );
        });
      }

      if (discounted) {
        filteredProducts = filteredProducts.filter(
          (product) => product.discont_price
        );
      }

      if (state.sortOption === "newest") {
        filteredProducts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      } else if (sortOption === "high-low") {
        filteredProducts.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceB - priceA;
        });
      } else if (sortOption === "low-high") {
        filteredProducts.sort((a, b) => {
          const priceA = a.discont_price || a.price;
          const priceB = b.discont_price || b.price;
          return priceA - priceB;
        });
      }
      state.filteredProducts = filteredProducts;
    },
    resetFilters(state) {
      state.priceRange = { from: "", to: "" };
      state.discounted = false;
      state.sortOption = "byDefault";
      state.filteredProducts = [];
    },
  },
});

export const {
  setProducts,
  setPriceRange,
  toggleDiscounted,
  setSortOption,
  applyFilters,
  resetFilters,
} = filterSlice.actions;

export default filterSlice;
