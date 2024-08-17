import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
  },

  reducers: {
    setAlljobs: (state, action) => {
      state.allJobs = action.payload;
    },
  },
});

export const { setAlljobs } = jobSlice.actions;

export default jobSlice.reducer;
