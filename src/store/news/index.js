import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./actions";

const initialState = {
  posts: [],
  post: null,
  isLoading: true,
};

export const news = createSlice({
  name: "news",
  initialState: initialState,
  reducers: {
    setNews: (state, action) => ({
      ...state,
      post: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getNews.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getNews.fulfilled, (state, action) => ({
      ...state,
      posts: action.payload.posts,
      isLoading: false,
    }));
  },
});

export const { setNews } = news.actions;
