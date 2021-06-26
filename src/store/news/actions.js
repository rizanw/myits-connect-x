import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getNews = createAsyncThunk("news/get_recent_news", async () => {
  const response = await axios.get(
    "https://proxy-news-my.herokuapp.com/get_recent_posts"
    // "https://www.its.ac.id/news/api/get_recent_posts"
  );
  return response.data;
});
