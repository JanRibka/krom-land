import { useEffect } from "react";
import { Control, UseFormSetValue, useWatch } from "react-hook-form";
import { useGetRentingDecorationThemes } from "../../../api/hooks/useGetRentingDecorationThemes";
import { useGetRentingItems } from "../../../api/hooks/useGetRentingItems";
import { RentingRequestModel } from "../models/RentingRequestModel";

interface UseRentingDetailsProps {
  control: Control<RentingRequestModel>;
  setValue: UseFormSetValue<RentingRequestModel>;
}

export const useRentingDetails = ({ control, setValue }: UseRentingDetailsProps) => {
  const { rentingItems, isLoading: isRentingItemsLoading } = useGetRentingItems();
  const { decorationThemes, isLoading: isDecorationThemesLoading } =
    useGetRentingDecorationThemes();

  const rentedItems = useWatch({
    control,
    name: "rentedItems",
  });

  // Data transformation for selects
  const itemOptions = rentingItems.map((item) => ({
    value: item.code,
    label: item.name,
  }));

  const themeOptions = decorationThemes.map((theme) => ({
    value: theme.code,
    label: theme.name,
  }));

  // Logic for conditional theme selection
  const isDecorationSelected = rentedItems?.some((itemCode) =>
    itemCode.toLowerCase().includes("decoration")
  );

  // Side effect: Clear decorationThemes if 'decoration' is removed from rentedItems
  useEffect(() => {
    if (!isDecorationSelected) {
      setValue("decorationThemes", []);
    }
  }, [isDecorationSelected, setValue]);

  return {
    itemOptions,
    themeOptions,
    isDecorationSelected,
    isRentingItemsLoading,
    isDecorationThemesLoading,
  };
};
