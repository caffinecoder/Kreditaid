import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = createAsyncThunk(
  "userAuth/login",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        " https://api.escuelajs.co/api/v1/users",
        {
          method: "GET",
        }
      );
      const userData = response;
      const user = userData.find(
        (user) => user.email === email && user.password === password
      );
      if (user) {
        return user;
      } else {
        return rejectWithValue("Invalid email or password");
      }
    } catch (error) {
      return rejectWithValue(
        error.response.data.message || "Failed to fetch user data"
      );
    }
  }
);
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
  extraReducers: (builder) => {
    // Handle pending state while logging in
    builder.addCase(login.pending, (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = null;
    });
    // Handle successful login
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.error = null;
    });
    // Handle login failure
    builder.addCase(login.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.error = action.payload;
    });
  },
});

export const { setLoginSuccess, setLoginFailure, setLogout } =
  authSlice.actions;
export default authSlice.reducer;
