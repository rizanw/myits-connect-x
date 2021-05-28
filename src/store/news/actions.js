import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "redaxios";

export const getNews = createAsyncThunk("news/get_recent_news", async () => {
  const response = await axios.get(
    "https://proxy-news-my.herokuapp.com/get_recent_posts"
  );
  if (!response) throw new Error("getNews failed");
  console.log(response.data);
  return response.data;
});
