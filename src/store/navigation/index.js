import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isNotificationActive: false,
  isExploreActive: false,
  isMenuActive: false,
  isSettingsActive: false,
  isNewsListActive: false,
  isNewsViewActive: false,
  isPostsListActive: false,
  isPostsViewActive: false,
  isFriendListActive: false,

  isProfileActive: false,
  isSkillActive: false,
  isExperienceActive: false,
  isEducationActive: false,

  isSettingGeneralActive: true,
  isSettingThemeActive: false,
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
    clickNewsDetail: (state, action) => ({
      ...initialState,
      isNewsViewActive: true,
    }),
    clickPostList: (state) => ({
      ...initialState,
      isPostsListActive: true,
    }),
    clickPostView: (state) => ({
      ...initialState,
      isPostsViewActive: true,
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
    clickSkill: (state) => ({
      ...state,
      isExperienceActive: false,
      isEducationActive: false,
      isSkillActive: true,
    }),
    clickExperience: (state) => ({
      ...state,
      isSkillActive: false,
      isEducationActive: false,
      isExperienceActive: true,
    }),
    clickEducation: (state) => ({
      ...state,
      isSkillActive: false,
      isExperienceActive: false,
      isEducationActive: true,
    }),
    resetProfileNavigation: (state) => ({
      ...state,
      isSkillActive: false,
      isEducationActive: false,
      isExperienceActive: false,
    }),
    clickSettingGeneral: (state) => ({
      ...state,
      isSettingGeneralActive: true,
      isSettingThemeActive: false,
    }),
    clickSettingTheme: (state) => ({
      ...state,
      isSettingThemeActive: true,
      isSettingGeneralActive: false,
    }),
  },
});

export const {
  clickExplore,
  clickMenu,
  clickProfile,
  clickNewsList,
  clickNewsDetail,
  clickPostList,
  clickPostView,
  resetNavigation,
  clickSettingScreen,
  clickFriendList,
  clickSkill,
  clickExperience,
  clickEducation,
  resetProfileNavigation,
  clickSettingGeneral,
  clickSettingTheme,
} = navigation.actions;
