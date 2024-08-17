import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
  },

  reducers: {
    setAlljobs: (state, action) => {
      state.allJobs = action.payload;
    },

    setSinglejob: (state, action) => {
      state.singleJob = action.payload;
    },
  },
});

export const { setAlljobs, setSinglejob } = jobSlice.actions;

export default jobSlice.reducer;
