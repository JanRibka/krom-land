import { useEffect } from "react";

import { useRentingPageSlice } from "../../store/useRentingPageSlice";
import { useGetRentingPageDataQuery } from "../rentingApi";

export const useGetRentingPageData = () => {
  const { setRentingPageData } = useRentingPageSlice();

  const { isLoading, isFetching, isError, error, data } =
    useGetRentingPageDataQuery();

  const isLoadingState = isLoading || isFetching;

  useEffect(() => {
    if (isLoadingState) return;

    if (data) {
      setRentingPageData(data);
    } else if (isError && error) {
      console.error("Chyba při načítání dat pro renting page:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isError, isLoadingState]);

  return {
    isLoading: isLoadingState,
  };
};
