import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isGeneralActive: true,
  isThemeActive: false,
};

export const setting = createSlice({
  name: "setting",
  initialState: initialState,
  reducers: {
    clickGeneral: (state) => ({
      ...initialState,
      isGeneralActive: true,
    }),
    clickTheme: (state) => ({
      ...initialState,
      isThemeActive: true,
      isGeneralActive: false,
    }),
  },
});

export const { clickGeneral, clickTheme } = setting.actions;
