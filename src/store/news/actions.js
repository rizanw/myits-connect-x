import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "redaxios";

export const getNews = createAsyncThunk("news/get_recent_news", async () => {
  const response = await axios.post(
    "https://www.its.ac.id/news/api/get_recent_posts"
  );
  if (!response) throw new Error("getNews failed");
  return response.data;
});
