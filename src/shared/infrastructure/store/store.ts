import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { mainBaseApi } from "shared/api/mainBaseApi";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

import rentingPageReducer from "../../../krom_land/features/renting/store/rentingPageSlice";
import actionsReducer from "./actions/actionsSlice";
import commonReducer from "./common/commonSlice";
import contactReducer from "./contact/contactSlice";
import galleryReducer from "./gallery/gallerySlice";
import homeReducer from "./home/homeSlice";
import webLogosReducer from "./webLogos/webLogosSlice";
import webSettingsReducer from "./webSettings/webSettingsSlice";

const rootReducer = combineReducers({
  home: homeReducer,
  actions: actionsReducer,
  rentingPage: rentingPageReducer,
  gallery: galleryReducer,
  contact: contactReducer,
  webSettings: webSettingsReducer,
  webLogos: webLogosReducer,
  common: commonReducer,
  [mainBaseApi.reducerPath]: mainBaseApi.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend([]).concat(mainBaseApi.middleware),
  devTools: process.env.VITE_ENABLE_DEVTOOLS === "true",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
