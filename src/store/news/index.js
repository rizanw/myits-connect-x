import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./actions";

const initialState = {
  posts: [],
  isLoading: true,
};

export const news = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getNews.fulfilled, (state, action) => ({
      posts: action.payload.posts,
      isLoading: false,
    }));
  },
});
