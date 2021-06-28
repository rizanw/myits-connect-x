import { createSlice } from "@reduxjs/toolkit";
import { getFriendList, getProfile } from "./actions";

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
  userId: "",
  friends: [],
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
          isLoading: false,
        };
      });
    builder
      .addCase(getFriendList.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getFriendList.fulfilled, (state, action) => ({
        ...state,
        friends: action.payload,
        isLoading: false,
      }));
  },
});
