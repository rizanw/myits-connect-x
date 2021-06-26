import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./actions";

const initialState = {
  skills: [],
  educations: [],
  experiences: [],
  name: "",
  position: "",
  city: "",
  province: "",
  country: "",
  id: "",
};

export const profile = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProfile.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getProfile.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        return {
          ...state,
          ...action.payload,
          errorMessage: action.payload.message,
          isLoggedIn: true,
          isLoading: false,
        };
      })
      .addCase(getProfile.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});
