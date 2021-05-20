import { combineReducers, configureStore } from "@reduxjs/toolkit";

//import currentProduct from "../slices/currentProduct";
import userSlicer from "./../slices/user";
import productsSlicer from "./../slices/products";
import cartSlicer from "./../slices/cart";
import orderSlicer from "./../slices/order";
const reducer = combineReducers({
  productsSlicer,
  userSlicer,
  cartSlicer,
  orderSlicer,
});

const store = configureStore({
  reducer,
});

export default store;
