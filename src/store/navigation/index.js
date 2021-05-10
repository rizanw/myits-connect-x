import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotificationActive: false,
  isExploreActive: false,
  isMenuActive: false,
  isProfileActive: false,
  isSettingsActive: false,
};

export const navigation = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    clickExplore: (state) => ({
      ...state,
      isExploreActive: true,
    }),
    resetNavigation: (state) => initialState,
  },
});

export const { clickExplore, resetNavigation } = navigation.actions;
