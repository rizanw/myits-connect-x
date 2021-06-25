import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "redaxios";

// const HOST = "http://localhost:5000/api/v1";
const HOST = "https://myits-server.herokuapp.com/api/v1";
const persistedData = JSON.parse(localStorage.getItem("user"));

export const getProfile = createAsyncThunk("user/PROFILE", async (userId) => {
  const response = await axios.get(`${HOST}/profile?user=${userId}`, {
    headers: {
      authorization: persistedData ? persistedData.accessToken : "",
    },
  });
  const data = response.data.data;
  return data;
});
