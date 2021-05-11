import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotificationActive: false,
  isExploreActive: false,
  isMenuActive: false,
  isProfileActive: false,
  isSettingsActive: false,
  isNewsListActive: false,
};

export const navigation = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    clickMenu: (state) => ({
      ...initialState,
      isMenuActive: true,
    }),
    clickExplore: (state) => ({
      ...initialState,
      isExploreActive: true,
    }),
    clickNewsList: (state) => ({
      ...initialState,
      isNewsListActive: true,
    }),
    resetNavigation: (state) => initialState,
  },
});

export const {
  clickExplore,
  clickMenu,
  clickNewsList,
  resetNavigation,
} = navigation.actions;
