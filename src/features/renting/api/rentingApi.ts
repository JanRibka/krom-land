import { mainBaseApi } from "shared/api/mainBaseApi";

import { RentingRequestModel } from "../components/RentingRequestForm/models/RentingRequestModel";
import { RentingDecorationTheme } from "../models/RentingDecorationTheme";
import { RentingItem } from "../models/RentingItem";
import { RentingData } from "../types";

const basePath = "renting";

export const rentingApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getRentingPageData: build.query<RentingData, void>({
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

    sendRentingRequest: build.mutation<void, RentingRequestModel>({
      query: (body) => ({
        url: `/${basePath}/sendRentingRequest`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetRentingPageDataQuery,
  useGetRentingItemsQuery,
  useGetRentingDecorationThemesQuery,
  useSendRentingRequestMutation,
} = rentingApi;
