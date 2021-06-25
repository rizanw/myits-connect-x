import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "redaxios";

// const HOST = "http://localhost:5000/api/v1";
const HOST = "https://myits-server.herokuapp.com/api/v1";

export const login = createAsyncThunk("user/LOGIN", async (body) => {
  const response = await axios.post(HOST + "/login", body);
  const data = response.data.data;
  localStorage.setItem("user", JSON.stringify(data));
  return data;
});
