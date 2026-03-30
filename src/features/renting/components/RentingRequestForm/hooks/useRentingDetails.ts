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

  const sumSelectedOptionsPrice = (
    selectedCodes: Array<string | number>,
    options: typeof itemOptions
  ) =>
    selectedCodes
      .map((selectedCode) => {
        const option = options.find(
          (o) => String(o.value).toLowerCase() === String(selectedCode).toLowerCase()
        );
        return option?.price || 0;
      })
      .reduce((acc, curr) => acc + curr, 0);

  // Calculate total price
  const selectedItemsForPrice = (rentedItems || [])
    .filter((code) => !String(code).toLowerCase().includes("decoration"));

  const totalThemesPrice = sumSelectedOptionsPrice(
    decorationThemesSelected || [],
    themeOptions
  );

  const totalItemsPrice = sumSelectedOptionsPrice(selectedItemsForPrice, itemOptions);
  const totalPrice = totalItemsPrice + totalThemesPrice;

  // Logic for conditional theme selection
  const isDecorationSelected = rentedItems?.some((itemCode) =>
    String(itemCode).toLowerCase().includes("decoration")
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
