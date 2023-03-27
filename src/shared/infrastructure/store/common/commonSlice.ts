import ConditionsModel from "shared/models/ConditionsModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface CommonModel {
  Conditions: ConditionsModel;
  _dataLoaded: boolean;
}

export const initialState: CommonModel = {
  Conditions: new ConditionsModel(),
  _dataLoaded: false,
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    commonUpdate: (state, action: PayloadAction<Partial<CommonModel>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = commonSlice.actions;

export default commonSlice.reducer;

// Selectors
export const selectCommon = (state: AppState) => state.common;
