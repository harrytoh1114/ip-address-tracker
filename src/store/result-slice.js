import { createSlice } from "@reduxjs/toolkit";

const resultSlice = createSlice({
  name: "result",
  initialState: { r: {} },
  reducers: {
    setResult(state, action) {
      const result = action.payload;
      state.r = result;
    },
  },
});

export const resultAction = resultSlice.actions;

export default resultSlice.reducer;