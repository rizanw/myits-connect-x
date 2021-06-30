import { createSlice } from "@reduxjs/toolkit";
import { getUser, login } from "./actions";

const initialState = {
  id: "",
  name: "",
  position: "",
  accessToken: localStorage.getItem("token"),
  isLoading: false,
  error: "",
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
      }))
      .addCase(login.rejected, (state, action) => {
        let status = action.error.message.replace(/^\D+/g, "");
        if (status === "404") {
          return {
            ...state,
            error:
              "Email tidak terdaftar, silakan periksa kembali email anda atau lakukan registrasi di laman myITS Connect",
          };
        } else if (status === "401") {
          return {
            ...state,
            error: "Password salah, silakan periksa kembali password anda",
          };
        }
      });
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
