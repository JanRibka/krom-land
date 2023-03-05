import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface HomeModel {}

export const initialState: HomeModel = {};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homeUpdate: (state, action: PayloadAction<Partial<HomeModel>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = homeSlice.actions;

export default homeSlice.reducer;

// Selectors
export const selectHome = (state: AppState) => state.home;
