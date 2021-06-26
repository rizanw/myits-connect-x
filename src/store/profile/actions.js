import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const getProfile = createAsyncThunk("user/PROFILE", async (userId) => {
  const response = await request.get(`/profile?user=${userId}`);
  const data = response.data.data;
  console.log(data);
  return data;
});
