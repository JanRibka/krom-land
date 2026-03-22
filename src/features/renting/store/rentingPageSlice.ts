import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RentingPageState } from "./RentingPageState";
import { mapRentingDataToState } from "../mappers/mapRentingDataToState";
import { RentingData } from "../types";

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
    setPageData: (state, action: PayloadAction<RentingData>) => {
      return {
        ...state,
        ...mapRentingDataToState(action.payload),
      };
    },
  },
});

export const actions = rentingPageSlice.actions;
export default rentingPageSlice.reducer;
