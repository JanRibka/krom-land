import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface WebLogosModel {
  HeaderLogo: ImageModel;
}

export const initialState: WebLogosModel = {
  HeaderLogo: new ImageModel(),
};

export const webLogosSlice = createSlice({
  name: "webLogos",
  initialState,
  reducers: {
    webLogosUpdate: (state, action: PayloadAction<Partial<WebLogosModel>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = webLogosSlice.actions;

export default webLogosSlice.reducer;

// Selectors
export const selectWebLogos = (state: RootState) => state.webLogos;
