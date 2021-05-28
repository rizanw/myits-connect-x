import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotificationActive: false,
  isExploreActive: false,
  isMenuActive: false,
  isProfileActive: false,
  isSettingsActive: false,
  isNewsListActive: false,
  isPostsListActive: false,
};

export const navigation = createSlice({
  name: "navigation",
  initialState: initialState,
  reducers: {
    clickProfile: (state) => ({
      ...initialState,
      isProfileActive: true,
    }),
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
    clickPostList: (state) => ({
      ...initialState,
      isPostsListActive: true,
    }),
    resetNavigation: (state) => initialState,
  },
});

export const {
  clickExplore,
  clickMenu,
  clickProfile,
  clickNewsList,
  clickPostList,
  resetNavigation,
} = navigation.actions;
