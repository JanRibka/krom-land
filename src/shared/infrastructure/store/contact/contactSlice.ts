import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface ContactModel {
  Title: string;
  Description: string;
  MainImagePath: string;
  MainImageAlt: string;
  GoogleMapsUrl: string;
}

export const initialState: ContactModel = {
  Title: "",
  Description: "",
  MainImagePath: "",
  MainImageAlt: "",
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
