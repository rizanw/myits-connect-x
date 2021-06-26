import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const getPosts = createAsyncThunk("post/GET_ALL_POSTS", async () => {
  const response = await request.get(`/posts`);
  const data = response.data.data;
  return data;
});

export const likePost = createAsyncThunk("post/LIKE", async (postId) => {
  const response = await request.post(`/post/like`, { postId });
  const data = response.data.data;
  return data;
});

export const unlikePost = createAsyncThunk("post/UNLIKE", async (postId) => {
  const response = await request.post(`/post/unlike`, { postId });
  const data = response.data.data;
  return data;
});
