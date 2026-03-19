import { useGetRentingDecorationThemesQuery } from "../rentingApi";

export const useGetRentingDecorationThemes = () => {
  const { isLoading, isFetching, isError, error, data } =
    useGetRentingDecorationThemesQuery();

  const isLoadingState = isLoading || isFetching;

  if (isError && error) {
    console.error("Chyba při načítání témat výzdoby:", error);
  }

  return {
    isLoading: isLoadingState,
    decorationThemes: data || [],
    isError,
  };
};
