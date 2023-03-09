import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface HomeModel {
  Title: string;
  Description: string;
  MainImagePath: string;
  MainImageAlt: string;
  AboutUs: string;
  AboutUsImagePath: string;
  AboutUsImageAlt: string;
  PeopleSay1Text: string;
  PeopleSay1Name: string;
  PeopleSay2Text: string;
  PeopleSay2Name: string;
  PeopleSay3Text: string;
  PeopleSay3Name: string;
}

export const initialState: HomeModel = {
  Title: "",
  Description: "",
  MainImagePath: "",
  MainImageAlt: "",
  AboutUs: "",
  AboutUsImagePath: "",
  AboutUsImageAlt: "",
  PeopleSay1Text: "",
  PeopleSay1Name: "",
  PeopleSay2Text: "",
  PeopleSay2Name: "",
  PeopleSay3Text: "",
  PeopleSay3Name: "",
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
