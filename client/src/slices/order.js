import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  orders: [],
};

export const getOrderById = createAsyncThunk(
  "order/getById",
  async ({ userId }) => {
    const response = await axios.post("http://localhost:3005/orders", {
      userId: userId,
    });

    return response.data;
  }
);

const orderSlicer = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [getOrderById.fulfilled]: (state, action) => {
      state.orders = action.payload;
    },
  },
});
//export const {} = orderSlicer.actions;
export default orderSlicer.reducer;
