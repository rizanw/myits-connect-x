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
      ...state,
      sky: {
        background: action.payload,
      },
    }),
  },
});

export const { changeBackgroundSky } = system.actions;
