import { createSlice } from "@reduxjs/toolkit";
import { getFriendList, getProfile, isFriend } from "./actions";

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
  errorMessage: "",
  isFriend: true,
};

export const profile = createSlice({
  name: "profile",
  initialState: initialState,
  reducers: {
    clearFriends: (state) => ({
      ...state,
      friends: [],
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(isFriend.pending, (state, action) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(isFriend.fulfilled, (state, action) => {
        console.log("payload", action.payload);
        return {
          ...state,
          isFriend: action.payload,
          isLoading: false,
          errorMessage: "",
        };
      });
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
          isFriend: true,
          isLoading: false,
        };
      });
    builder
      .addCase(getFriendList.pending, (state, action) => ({
        ...state,
        isLoading: true,
        errorMessage: "",
      }))
      .addCase(getFriendList.fulfilled, (state, action) => {
        console.log(action.payload);
        if (!action.payload)
          return { ...state, errorMessage: "Tidak ada data teman" };
        return {
          ...state,
          friends: action.payload,
          isLoading: false,
        };
      });
  },
});

export const { clearFriends } = profile.actions;
