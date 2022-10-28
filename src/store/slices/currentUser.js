import { createSlice } from "@reduxjs/toolkit";

export const currentUserSlice = createSlice({
  name: "currentUser",
  initialState: '',
  reducers: {
    set: (state, { payload }) => payload,
    clear: () => null
  }
});

export const setCurrentUser = currentUserSlice.actions.set;
export const clearCurrentUser = currentUserSlice.actions.clear;
export const currentUserReducer = currentUserSlice.reducer;
