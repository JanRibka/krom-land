import GalleryImageModel from "krom_land/features/gallery/models/GalleryImageModel";
import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import AppState from "../AppState";

export interface GalleryModel {
  Title: string;
  Description: string;
  PageHeaderTextMain: string;
  PageHeaderTextMainColor: string;
  MainImage: ImageModel;
  Images: GalleryImageModel[];
}

export const initialState: GalleryModel = {
  Title: "",
  Description: "",
  PageHeaderTextMain: "",
  PageHeaderTextMainColor: "",
  MainImage: new ImageModel(),
  Images: [],
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    galleryUpdate: (state, action: PayloadAction<Partial<GalleryModel>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = gallerySlice.actions;

export default gallerySlice.reducer;

// Selectors
export const selectGallery = (state: AppState) => state.gallery;
export const selectGalleryImages = (state: AppState) => state.gallery.Images;
