import { combineReducers, configureStore } from "@reduxjs/toolkit";

import actionsReducer from "./actions/actionsSlice";
import AppState from "./AppState";
import commonReducer from "./common/commonSlice";
import contactReducer from "./contact/contactSlice";
import galleryReducer from "./gallery/gallerySlice";
import homeReducer from "./home/homeSlice";
import webLogosReducer from "./webLogos/webLogosSlice";
import webSettingsReducer from "./webSettings/webSettingsSlice";

const rootReducer = combineReducers<AppState>({
  home: homeReducer,
  actions: actionsReducer,
  gallery: galleryReducer,
  contact: contactReducer,
  webSettings: webSettingsReducer,
  webLogos: webLogosReducer,
  common: commonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
