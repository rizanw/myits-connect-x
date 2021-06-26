import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "redaxios";

const HOST = "https://myits-server.herokuapp.com/api/v1";
const persistedData = JSON.parse(localStorage.getItem("user"));

export const getPosts = createAsyncThunk("post/GET_ALL_POSTS", async () => {
  const response = await axios.get(`${HOST}/posts`, {
    headers: {
      authorization: persistedData ? persistedData.accessToken : "",
    },
  });
  const data = response.data.data;
  return data;
});

export const likePost = createAsyncThunk("post/LIKE", async (postId) => {
  const response = await axios.post(
    `${HOST}/post/like`,
    { postId },
    {
      headers: {
        authorization: persistedData
          ? "Bearer " + persistedData.accessToken
          : "",
      },
    }
  );
  const data = response.data.data;
  return data;
});

export const unlikePost = createAsyncThunk("post/UNLIKE", async (postId) => {
  const response = await axios.post(
    `${HOST}/post/unlike`,
    { postId },
    {
      headers: {
        authorization: persistedData
          ? "Bearer " + persistedData.accessToken
          : "",
      },
    }
  );
  const data = response.data.data;
  return data;
});
