import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ userName, password }) => {
    const response = await axios.post("http://localhost:3005/users/login", {
      userName: userName,
      password: password,
    });
    return response.data;
  }
);

export const verfyToken = createAsyncThunk(
  "user/verfyToken",

  async ({ Token }) => {
    const response = await axios.post(
      "http://localhost:3005/users/verfy-token",
      null,
      {
        headers: {
          "Content-Type": "application/json;charset=UTF-8",
          authorization: Token,
        },
      }
    );
    return response.data;
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async ({ userName, password }) => {
    const response = await axios.post("http://localhost:3005/users/register", {
      userName: userName,
      password: password,
    });
    return response.data;
  }
);

const initialState = {
  user: {},
  signUpStatus: "",
};

const userSlicer = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOutUser: (state) => {
      state.user = {};
      localStorage.removeItem("user");
    },
  },
  extraReducers: {
    [loginUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", action.payload.token);
    },
    [registerUser.rejected]: (state) => {
      state.signUpStatus = "failed";
    },
    [registerUser.fulfilled]: (state) => {
      state.signUpStatus = "success";
    },
    [verfyToken.fulfilled]: (state, action) => {
      state.user = action.payload;
    },
  },
});
export const { logOutUser } = userSlicer.actions;
export default userSlicer.reducer;
