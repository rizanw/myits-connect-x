import { createSlice } from "@reduxjs/toolkit";

import rektorat from "../../assets/environtment/360-rektorat-pole.jpg";

const initialState = {
  sky: {
    background: rektorat,
  },
};

export const system = createSlice({
  name: "system",
  initialState: initialState,
  reducers: {
    changeBackgroundSky: (state, action) => ({
      sky: {
        background: action.payload,
      },
      ...state,
    }),
  },
});

export const { changeBackgroundSky } = system.actions;
