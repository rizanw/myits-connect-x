import { createSlice } from "@reduxjs/toolkit";
import { login } from "./actions";

const persistedData = JSON.parse(localStorage.getItem("user"));

const initialState = {
  id: persistedData ? persistedData.id : "",
  name: persistedData ? persistedData.name : "",
  email: persistedData ? persistedData.email : "",
  accessToken: persistedData ? persistedData.accessToken : "",
  errorMessage: "",
  isLoading: false,
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => state,
    logout: (state, action) => {
      localStorage.clear();
      return { ...initialState };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(login.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        return {
          ...state,
          ...action.payload,
          errorMessage: action.payload.message,
          isLoggedIn: true,
          isLoading: false,
        };
      })
      .addCase(login.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export const { logout } = auth.actions;
