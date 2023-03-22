import ActionDetailModel from "krom_land/features/actions/models/ActionDetailModel";
import DocumentModel from "shared/models/DocumentModel";
import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface ActionsModel {
  Title: string;
  Description: string;
  PageHeaderTextMain: string;
  PageHeaderTextMainColor: string;
  MainImage: ImageModel;
  ActionDetails: ActionDetailModel[];
  DocumentsToDownload: DocumentModel[];
}

export const initialState: ActionsModel = {
  Title: "",
  Description: "",
  PageHeaderTextMain: "",
  PageHeaderTextMainColor: "",
  MainImage: new ImageModel(),
  ActionDetails: [],
  DocumentsToDownload: [],
};

export const actionsSlice = createSlice({
  name: "actions",
  initialState,
  reducers: {
    actionsUpdate: (state, action: PayloadAction<Partial<ActionsModel>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = actionsSlice.actions;

export default actionsSlice.reducer;

// Selectors
export const selectActions = (state: AppState) => state.actions;
export const selectDocumentsToDownload = (state: AppState) =>
  state.actions.DocumentsToDownload;
