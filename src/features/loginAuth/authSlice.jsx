import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const login = createAsyncThunk()
const initialState = {
  isLoggedIn: false,
  user: null,
  error: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLoginSuccess: (state, action) => {
      state.isLoggedIn = action.payload;
      state.user = null;
      state.error = null;
    },
    setLoginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    },
    setLogout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    },
  },
});
export const { setLoginSuccess, setLoginFailure, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
