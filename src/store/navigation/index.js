import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  navigation: {
    isNotificationActive: false,
    isExploreActive: false,
    isMenuActive: false,
    isProfileActive: false,
    isSettingsActive: false,
  },
};

export const navigation = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    clickExplore: (state) => ({
      isExploreActive: true,
      ...state,
    }),
    resetNavigation: (state) => initialState,
  },
});

export const { clickExplore, resetNavigation } = navigation.actions;
