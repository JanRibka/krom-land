import ActionDetailModel from "features/actions/models/ActionDetailModel";
import DocumentToDownloadModel from "features/actions/models/DocumentToDownloadModel";
import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface ActionsModel {
  Title: string;
  Description: string;
  PageHeaderTextMain: string;
  PageHeaderTextMainColor: string;
  MainImage: ImageModel;
  ActionDetails: ActionDetailModel[];
  DocumentsToDownload: DocumentToDownloadModel[];
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
export const selectActions = (state: RootState) => state.actions;
export const selectDocumentsToDownload = (state: RootState) =>
  state.actions.DocumentsToDownload;
