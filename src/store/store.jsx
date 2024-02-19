import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import radioBtnSlice from "../features/radioBtn/radioBtnSlice";
import placeholderSlice from "../features/placeholder/placeholderSlice";
import authSlice from "../features/auth/authSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    searchType: radioBtnSlice,
    placeholder: placeholderSlice,
    auth: authSlice,
  },
});
export default store;
