import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "./actions";

const initialState = {
  posts: [],
  isLoading: true,
};

export const post = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getPosts.fulfilled, (state, action) => ({
      posts: action.payload,
      isLoading: false,
    }));
  },
});
