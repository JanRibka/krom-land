import { useGetRentingItemsQuery } from "../rentingApi";

export const useGetRentingItems = () => {
  const { isLoading, isFetching, isError, error, data } =
    useGetRentingItemsQuery();

  const isLoadingState = isLoading || isFetching;

  if (isError && error) {
    console.error("Chyba při načítání položek k zapůjčení:", error);
  }

  return {
    isLoading: isLoadingState,
    rentingItems: data || [],
    isError,
  };
};
