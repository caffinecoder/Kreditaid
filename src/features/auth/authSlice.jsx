import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: auth,
  initialState,
  reducers: {
    loginSucess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});
export const { loginSucess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;
