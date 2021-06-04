import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
};

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    getUser: (state) => state,
    login: (state, action) => ({
      name: "Rizky Andre Wibisono",
      email: action.payload,
    }),
    logout: (state, action) => ({ ...initialState }),
  },
});

export const { login, logout } = auth.actions;
