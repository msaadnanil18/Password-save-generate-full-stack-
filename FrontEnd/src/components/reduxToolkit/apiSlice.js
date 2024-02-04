import { createSlice } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    apiResponse: null,
    loading: false,
    error: null,
  },
  reducers: {
    setApiResponse: (state, action) => {
      state.apiResponse = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setApiResponse, setLoading, setError } = apiSlice.actions;

export default apiSlice.reducer;
