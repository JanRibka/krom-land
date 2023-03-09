import { combineReducers, configureStore } from "@reduxjs/toolkit";

import AppState from "./AppState";
import commonReducer from "./common/commonSlice";
import homeReducer from "./home/homeSlice";

const rootReducer = combineReducers<AppState>({
  home: homeReducer,
  common: commonReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
