import { combineReducers } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit/dist/configureStore";

import AppState from "./AppState";
import homeReducer from "./home/homeSlice";

const rootReducer = combineReducers<AppState>({
  home: homeReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
