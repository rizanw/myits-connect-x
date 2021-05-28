import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSkillActive: false,
  isExperienceActive: false,
  isEducationActive: false,
};

export const profileNavigation = createSlice({
  name: "profileNavigation",
  initialState: initialState,
  reducers: {
    clickSkill: (state) => ({
      ...initialState,
      isSkillActive: true,
    }),
    clickExperience: (state) => ({
      ...initialState,
      isExperienceActive: true,
    }),
    clickEducation: (state) => ({
      ...initialState,
      isEducationActive: true,
    }),
    resetNavigation: (state) => initialState,
  },
});

export const {
  clickSkill,
  clickExperience,
  clickEducation,
  resetNavigation,
} = profileNavigation.actions;
