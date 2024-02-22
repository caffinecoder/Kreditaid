import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  isSignup: false,
  user: null,
  error: null,
};
const signupSlice = createSlice({
  name: "signupAuth",
  initialState,

});
