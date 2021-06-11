import { createSlice } from "@reduxjs/toolkit";

import rektorat from "../../assets/environtment/360-rektorat-pole.jpg";

const initialState = {
  sky: {
    background: rektorat,
  },
  orbitalSpeed: 1,
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
    increaseOrbitaSpeed: (state, action) => {
      if (state.orbitalSpeed < 2) {
        return {
          ...state,
          orbitalSpeed: state.orbitalSpeed + 0.1,
        };
      } else {
        return {
          ...state,
          orbitalSpeed: 2,
        };
      }
    },
    decreaseOrbitalSpeed: (state, action) => {
      if (state.orbitalSpeed > 0) {
        return {
          ...state,
          orbitalSpeed: state.orbitalSpeed - 0.1,
        };
      } else {
        return {
          ...state,
          orbitalSpeed: 0,
        };
      }
    },
  },
});

export const {
  changeBackgroundSky,
  increaseOrbitaSpeed,
  decreaseOrbitalSpeed,
} = system.actions;
