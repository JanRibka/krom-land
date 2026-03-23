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

  const decorationThemesSelected = useWatch({
    control,
    name: "decorationThemes",
  });

  // Data transformation for selects/tables
  const itemOptions = rentingItems.map((item) => ({
    value: item.code,
    label: item.name,
    isActive: item.isActive,
    price: item.price,
    remark: item.remark,
  }));

  const themeOptions = decorationThemes.map((theme) => ({
    value: theme.code,
    label: theme.name,
    isActive: theme.isActive,
    price: theme.price,
    remark: theme.remark,
  }));

  // Calculate total price
  const totalItemsPrice = (rentedItems || [])
    .map((code) => itemOptions.find((o) => o.value === code)?.price || 0)
    .reduce((acc, curr) => acc + curr, 0);

  const totalThemesPrice = (decorationThemesSelected || [])
    .map((code) => themeOptions.find((o) => o.value === code)?.price || 0)
    .reduce((acc, curr) => acc + curr, 0);

  const totalPrice = totalItemsPrice + totalThemesPrice;

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

  // Sync totalPrice to form state
  useEffect(() => {
    setValue("totalPrice", totalPrice);
  }, [totalPrice, setValue]);

  return {
    itemOptions,
    themeOptions,
    isDecorationSelected,
    totalPrice,
    isRentingItemsLoading,
    isDecorationThemesLoading,
  };
};
