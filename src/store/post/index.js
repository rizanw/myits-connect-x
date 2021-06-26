import { createSlice } from "@reduxjs/toolkit";
import { getPosts, likePost, unlikePost } from "./actions";

const initialState = {
  posts: [],
  post: null,
  isLoading: true,
};

export const post = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    setPost: (state, action) => ({
      ...state,
      post: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(getPosts.fulfilled, (state, action) => ({
      ...state,
      posts: action.payload,
      isLoading: false,
    }));
    builder.addCase(likePost.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(likePost.fulfilled, (state, action) => ({
      ...state,
      post: action.payload,
      isLoading: false,
    }));
    builder.addCase(unlikePost.pending, (state) => ({
      ...state,
      isLoading: true,
    }));
    builder.addCase(unlikePost.fulfilled, (state, action) => ({
      ...state,
      post: action.payload,
      isLoading: false,
    }));
  },
});

export const { setPost } = post.actions;
