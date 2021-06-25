import { createSlice } from "@reduxjs/toolkit";
import { getProfile } from "./actions";

const initialState = {
  isSkillActive: false,
  isExperienceActive: false,
  isEducationActive: false,
  skills: [],
  educations: [],
  experiences: [],
  name: "",
  position: "",
  city: "",
  province: "",
  country: "",
  id: "",
};

export const profileNavigation = createSlice({
  name: "profileNavigation",
  initialState: initialState,
  reducers: {
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
    resetNavigation: (state) => initialState,
  },
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
          errorMessage: action.payload.message,
          isLoggedIn: true,
          isLoading: false,
        };
      })
      .addCase(getProfile.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        isError: true,
      }));
  },
});

export const {
  clickSkill,
  clickExperience,
  clickEducation,
  resetNavigation,
} = profileNavigation.actions;
