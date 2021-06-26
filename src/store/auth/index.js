import { createSlice } from "@reduxjs/toolkit";
import { getUser, login } from "./actions";

const initialState = {
  id: "",
  name: "",
  position: "",
  accessToken: localStorage.getItem("token"),
  isLoading: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      localStorage.clear();
      return initialState;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(login.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLoading: false,
      }));
    builder
      .addCase(getUser.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getUser.fulfilled, (state, action) => ({
        ...state,
        ...action.payload,
        isLoading: false,
      }));
  },
});

export const { logout } = auth.actions;
