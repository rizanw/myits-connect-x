import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const getProfile = createAsyncThunk("user/PROFILE", async (userId) => {
  const response = await request.get(`/profile?user=${userId}`);
  const data = response.data.data;
  return data;
});

export const getFriendList = createAsyncThunk(
  "user/FRIENDS",
  async (userId) => {
    console.log(userId);
    const response = await request.get(`/friend?user=${userId}`);
    const data = response.data.data;
    return data;
  }
);

export const addFriend = createAsyncThunk(
  "user/AddFriend",
  async ({ me, newFriend }) => {
    console.log(me, newFriend, "di sini");
    const response = await request.post(`/friend`, {
      me: me,
      newFriend: newFriend,
    });
    const data = response.data.data;
    console.log(data);
    return data;
  }
);

export const isFriend = createAsyncThunk(
  "friend/isFriend",
  async (friendId) => {
    const response = await request.get(`/friend/is?friend=${friendId}`);
    const data = response.data.data;
    return data;
  }
);
