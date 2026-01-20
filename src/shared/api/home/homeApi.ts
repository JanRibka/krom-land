import { HomeSlice } from "shared/infrastructure/store/home/homeSlice";

import { mainBaseApi } from "../mainBaseApi";
import { HOME_GET_DATA } from "./endpoints";

export const homeApi = mainBaseApi.injectEndpoints({
  endpoints: (build) => ({
    getHomeData: build.query<HomeSlice, void>({
      query: () => ({
        url: `/${HOME_GET_DATA}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetHomeDataQuery } = homeApi;
