import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counter/counterSlice";
import radioBtnSlice from "../features/radioBtn/radioBtnSlice";
import placeholderSlice from "../features/placeholder/placeholderSlice";
const store = configureStore({
  reducer: {
    counter: counterSlice,
    searchType: radioBtnSlice,
    placeholder: placeholderSlice
  },
});
export default store;
