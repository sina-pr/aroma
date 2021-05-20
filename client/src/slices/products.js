import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const response = await axios.get("http://localhost:3005/products/");
  return response.data;
});

export const fetchProductById = createAsyncThunk(
  "product/fetchById",
  async (id) => {
    const response = await axios.get(`http://localhost:3005/products/${id}`);
    return response.data;
  }
);

export const fetchTrendProducts = createAsyncThunk(
  "products/fetchTrend",
  async () => {
    const response = await axios.get("http://localhost:3005/products/trend");
    return response.data;
  }
);

const initialState = {
  allProducts: { loading: true, items: [] },
  trendProducts: [],
  currentProduct: {},
};

const ProductsSlicer = createSlice({
  name: "Products",
  initialState,
  reducers: {
    removeCurrentProduct: (state) => {
      state.currentProduct = initialState.currentProduct;
    },
  },
  extraReducers: {
    [fetchProducts.fulfilled]: (state, action) => {
      state.allProducts.loading = false;
      state.allProducts.items = action.payload;
    },
    [fetchProductById.pending]: (state, action) => {
      state.currentProduct = { loading: true };
    },
    [fetchProductById.fulfilled]: (state, action) => {
      state.currentProduct = { ...action.payload, loading: false };
    },
    [fetchTrendProducts.fulfilled]: (state, action) => {
      state.trendProducts = action.payload;
    },
  },
});
export const { removeCurrentProduct } = ProductsSlicer.actions;
export default ProductsSlicer.reducer;
