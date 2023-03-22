import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface ContactModel {
  Title: string;
  Description: string;
  MainImage: ImageModel;
  GoogleMapsUrl: string;
}

export const initialState: ContactModel = {
  Title: "",
  Description: "",
  MainImage: new ImageModel(),
  GoogleMapsUrl: "",
};

export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    contactUpdate: (state, action: PayloadAction<Partial<ContactModel>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = contactSlice.actions;

export default contactSlice.reducer;

// Selectors
export const selectContact = (state: AppState) => state.contact;
