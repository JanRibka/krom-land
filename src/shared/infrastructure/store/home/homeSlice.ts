import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import AppState from '../AppState';

export interface HomeModel {
  AboutUs: string;
  MainImage: string;
  MainImageAlt: string;
  _dataLoaded: boolean;
}

export const initialState: HomeModel = {
  AboutUs: "",
  MainImage: "",
  MainImageAlt: "",
  _dataLoaded: false,
};

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
