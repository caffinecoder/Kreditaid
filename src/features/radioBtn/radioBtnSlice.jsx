import { createSlice } from "@reduxjs/toolkit";
const radioBtnSlice = createSlice({
  name: "searchType",
  initialState: { value: "companyName" },
  reducers: {
    setSearchCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setSearchCategory } = radioBtnSlice.actions;
export default radioBtnSlice.reducer;
