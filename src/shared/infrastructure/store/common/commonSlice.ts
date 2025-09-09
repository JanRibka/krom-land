import ConditionsModel from "shared/models/ConditionsModel";
import TShirtSizesModel from "shared/models/SelectDataModel";
import TablesOfKeysModel from "shared/models/TablesOfKeysModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface CommonModel {
  Conditions: ConditionsModel;
  TablesOfKeys: TablesOfKeysModel;
  TShirtSizes?: TShirtSizesModel[];
  _dataLoaded: boolean;
  _tShirtSizesLoaded?: boolean;
}

export const initialState: CommonModel = {
  Conditions: new ConditionsModel(),
  TablesOfKeys: new TablesOfKeysModel(),
  TShirtSizes: [],
  _dataLoaded: false,
  _tShirtSizesLoaded: false,
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
    tShirtSizesUpdate: (state, action: PayloadAction<TShirtSizesModel[]>) => {
      state.TShirtSizes = action.payload;
      state._tShirtSizesLoaded = true;
    },
  },
});

export const actions = commonSlice.actions;

export default commonSlice.reducer;

// Selectors
export const selectCommon = (state: AppState) => state.common;
