import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  cart: [],
  submitOrderStatus: "",
};

export const submitOrder = createAsyncThunk(
  "cart/submitOrder",
  async ({ products, userId }) => {
    const response = await axios.post("http://localhost:3005/orders/new", {
      userId: userId,
      cart: products,
    });
    return response.data;
  }
);

const cartSlicer = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      let index = state.cart.findIndex(
        (product) => product._id === action.payload._id
      );

      if (index === -1 && action.payload) {
        state.cart.push({ ...action.payload, quantity: 1 });
      } else {
        state.cart[index].quantity += 1;
      }
    },
    removeFromCart: (state, action) => {
      let filterd = state.cart.filter((p) => {
        return p._id !== action.payload;
      });
      state.cart = filterd;
    },
    increaseQuantity: (state, action) => {
      let index = state.cart.findIndex(
        (product) => product._id === action.payload
      );
      state.cart[index].quantity += 1;
    },

    decreaseQuantity: (state, action) => {
      let index = state.cart.findIndex(
        (product) => product._id === action.payload
      );
      if (state.cart[index].quantity > 1) {
        state.cart[index].quantity -= 1;
      }
    },
    changeOrderStatus: (state) => {
      state.submitOrderStatus = "";
    },
  },
  extraReducers: {
    [submitOrder.rejected]: (state) => {
      state.submitOrderStatus = "failed";
    },
    [submitOrder.fulfilled]: (state) => {
      state.submitOrderStatus = "success";
    },
  },
});
export const {
  addProductToCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
  changeOrderStatus,
} = cartSlicer.actions;
export default cartSlicer.reducer;
