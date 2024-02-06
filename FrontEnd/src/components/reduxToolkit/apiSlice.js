import { createSlice,createReducer } from "@reduxjs/toolkit";

export const apiSlice = createSlice({
  name: "api",
  initialState: {
    userData: null,
    setUserData: null,
    error: null,
  },
  reducers: {
    userData: (state, action) => {
      state.userData = action.payload;
    },
    setUserData: (state, action) => {
      state.setUserData = action.payload;
    },
  
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { userData, setUserData, setError } = apiSlice.actions;

export default apiSlice.reducer;
