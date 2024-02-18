import { createSlice } from "@reduxjs/toolkit";
const placeholderSlice = createSlice({
  name: "placeholder",
  initialState: { value: "Search with Company Name" },
  reducers: {
    setPlaceholder: (state, action) => {
      state.value = action.payload;
    },
  },
});
export const { setPlaceholder } = placeholderSlice.actions;
export default placeholderSlice.reducer;
