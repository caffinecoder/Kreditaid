import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setLoginSuccess: (state, action) => {
      state.isLoggedIn = action.payload;
      state.userAuth = null;
      state.error = null;
    },
    setLoginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.userAuth = null;
      state.error = action.payload;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.userAuth = null;
      state.error = null;
    },
  },
});
export const { setLoginSuccess, setLoginFailure, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
