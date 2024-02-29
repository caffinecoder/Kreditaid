import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSignedup: false,
  user: null,
  error: null,
};
const signupSlice = createSlice({
  name: "signupAuth",
  initialState,
  reducers: {
    setSignupSuccess: (state, action) => {
      state.isLoggedIn = action.payload;
      state.userAuth = null;
      state.error = null;
    },
    setSignupFailure: (state, action) => {
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
export const { setSignupSuccess, setSignupFailure, setLogout } =
  signupSlice.actions;

export default signupSlice.reducer;
