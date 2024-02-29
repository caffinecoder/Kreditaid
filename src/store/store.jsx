import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import radioBtnSlice from "../features/radioBtn/radioBtnSlice";
import placeholderSlice from "../features/placeholder/placeholderSlice";
import userAuthReducer from "../features/loginAuth/authSlice";
import signupReducer from "../features/signupAuth/signupAuthSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    searchType: radioBtnSlice,
    placeholder: placeholderSlice,
    userAuth: userAuthReducer,
    signupAuth: signupReducer,
  },
});
export default store;
