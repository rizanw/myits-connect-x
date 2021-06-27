import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const getNotif = createAsyncThunk("notification/GET", async () => {
  const response = await request.get("/notifications");
  const data = response.data;
  console.log(data);
  return data.data;
});
