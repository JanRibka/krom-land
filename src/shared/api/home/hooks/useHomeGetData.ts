import { useEffect } from "react";
import { useHomeSlice } from "shared/infrastructure/store/home/useHomeSlice";

import { useGetHomeDataQuery } from "../homeApi";

export const useHomeGetData = () => {
  const { handleHomeUpdate } = useHomeSlice();

  const { isLoading, isFetching, isError, error, data } = useGetHomeDataQuery();

  const isLoadingState = isLoading || isFetching;

  useEffect(() => {
    if (isLoadingState) return;

    if (data) {
      handleHomeUpdate(data);
    } else if (isError && error) {
      console.error("Chyba při načítání dat pro home page:", error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, error, isError, isLoadingState]);

  return {
    isLoading: isLoadingState,
  };
};
