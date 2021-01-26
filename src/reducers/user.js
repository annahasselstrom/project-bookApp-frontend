import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  login: {
    accessToken: null,
    userId: 0,
    name: "",
    statusMessage: "",
  },
};

export const user = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setAccessToken: (state, action) => {
      const { accessToken } = action.payload;
      state.login.accessToken = accessToken;
    },
    setUserId: (state, action) => {
      const { userId } = action.payload;
      state.login.userId = userId;
    },
    setName: (state, action) => {
      const { name } = action.payload;
      state.login.name = name;
    },
    setStatusMessage: (state, action) => {
      const { statusMessage } = action.payload;
      state.login.statusMessage = statusMessage;
    },
    logout: (state, action) => {
      state.login.accessToken = null;
      state.login.userId = 0;
      state.login.name = "";   
      localStorage.clear();
    }
  },
});