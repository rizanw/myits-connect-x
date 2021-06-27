import { createSlice } from "@reduxjs/toolkit";
import { getNotif } from "./actions";

const initialState = {
  notifications: "",
  isLoading: false,
};

export const notification = createSlice({
  name: "notification",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNotif.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getNotif.fulfilled, (state, action) => ({
        ...state,
        notifications: action.payload,
        isLoading: false,
      }));
  },
});
