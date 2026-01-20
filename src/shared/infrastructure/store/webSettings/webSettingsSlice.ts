import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface WebSettingsModel {
  FacebookLink: string;
  InstagramLink: string;
  TikTokLink: string;
  SubjectName: string;
  SubjectICO: string;
  SubjectDIC: string | null;
  AddressName: string;
  AddressAddress: string;
  AddressLink: string;
  ContactName: string;
  ContactHours: string;
  ContactTel: string;
  ContactEmail: string;
}

export const initialState: WebSettingsModel = {
  FacebookLink: "",
  InstagramLink: "",
  TikTokLink: "",
  SubjectName: "",
  SubjectICO: "",
  SubjectDIC: null,
  AddressName: "",
  AddressAddress: "",
  AddressLink: "",
  ContactName: "",
  ContactHours: "",
  ContactTel: "",
  ContactEmail: "",
};

export const webSettingsSlice = createSlice({
  name: "webSettings",
  initialState,
  reducers: {
    webSettingsUpdate: (
      state,
      action: PayloadAction<Partial<WebSettingsModel>>,
    ) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = webSettingsSlice.actions;

export default webSettingsSlice.reducer;

// Selectors
export const selectWebSettings = (state: RootState) => state.webSettings;
