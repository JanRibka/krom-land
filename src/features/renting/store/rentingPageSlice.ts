import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RentingPageState } from "./RentingPageState";

export const initialState: RentingPageState = {
  title: "",
  description: "",
  pageHeaderTextMain: "",
  pageHeaderTextMainColor: "",
  mainImage: new ImageModel(),
};

export const rentingPageSlice = createSlice({
  name: "rentingPage",
  initialState,
  reducers: {
    setPageData: (state, action: PayloadAction<RentingPageState>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = rentingPageSlice.actions;
export default rentingPageSlice.reducer;
