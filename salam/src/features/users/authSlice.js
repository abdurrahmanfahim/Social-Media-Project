import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: JSON.parse(localStorage.getItem('userInfo')) || null,
};

export const userSlice = createSlice({
  name: "authUser",
  initialState,
  reducers: {
    loggedInUser: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload))
    },
    loggedOutUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const { loggedInUser, loggedOutUser } = userSlice.actions;

export default userSlice.reducer;
