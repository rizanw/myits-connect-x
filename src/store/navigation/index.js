import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotificationActive: false,
  isExploreActive: false,
  isMenuActive: false,
  isProfileActive: false,
  isSettingsActive: false,
  isNewsListActive: false,
  isPostsListActive: false,
  isFriendListActive: false,
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
    clickSettingScreen: (state) => ({
      ...initialState,
      isSettingsActive: true,
    }),
    clickFriendList: (state) => ({
      ...initialState,
      isFriendListActive: true,
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
  clickSettingScreen,
  clickFriendList,
} = navigation.actions;
