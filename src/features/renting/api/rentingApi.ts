import { mainBaseApi } from "shared/api/mainBaseApi";

import { RentingPageState } from "../store/RentingPageState";
import { RentingItem } from "../models/RentingItem";
import { RentingDecorationTheme } from "../models/RentingDecorationTheme";

const basePath = "renting";

export const rentingApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getRentingPageData: build.query<RentingPageState, void>({
      query: (body) => ({
        url: `/${basePath}/getRentingPageData`,
        method: "GET",
        body,
      }),
    }),

    getRentingItems: build.query<RentingItem[], void>({
      query: (body) => ({
        url: `/${basePath}/getRentingItems`,
        method: "GET",
        body,
      }),
    }),

    getRentingDecorationThemes: build.query<RentingDecorationTheme[], void>({
      query: (body) => ({
        url: `/${basePath}/getRentingDecorationThemes`,
        method: "GET",
        body,
      }),
    }),
  }),
});

export const {
  useGetRentingPageDataQuery,
  useGetRentingItemsQuery,
  useGetRentingDecorationThemesQuery,
} = rentingApi;
