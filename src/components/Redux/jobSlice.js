import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "job",
  initialState: {
    allJobs: [],
    singleJob: null,
    allAdminJobs: [],
  },

  reducers: {
    setAlljobs: (state, action) => {
      state.allJobs = action.payload;
    },

    setSinglejob: (state, action) => {
      state.singleJob = action.payload;
    },
    setAllAdminJobs: (state, action) => {
      state.allAdminJobs = action.payload;
    },
    setSearchJobByText: (state, action) => {
      state.searchJobByText = action.payload;
    },
  },
});

export const { setAlljobs, setSinglejob, setAllAdminJobs, setSearchJobByText } =
  jobSlice.actions;

export default jobSlice.reducer;
