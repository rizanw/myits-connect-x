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
