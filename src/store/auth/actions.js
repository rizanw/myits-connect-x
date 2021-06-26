import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const login = createAsyncThunk("user/LOGIN", async (body) => {
  const response = await request.post("/login", body);
  const data = response.data.data;
  localStorage.setItem("token", data.accessToken);
  return data;
});

export const getUser = createAsyncThunk("user/GetProfile", async () => {
  const response = await request.get("/user");
  const data = response.data;
  console.log(data.data);
  return data.data;
});
