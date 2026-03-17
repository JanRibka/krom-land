import { mainBaseApi } from "shared/api/mainBaseApi";

import { RentingPageState } from "../store/RentingPageState";

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
  }),
});

export const { useGetRentingPageDataQuery } = rentingApi;
