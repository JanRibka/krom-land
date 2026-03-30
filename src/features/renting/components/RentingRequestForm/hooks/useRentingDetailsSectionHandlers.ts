import { useCallback } from "react";
import { UseFormClearErrors } from "react-hook-form";
import { RentingRequestModel } from "../models/RentingRequestModel";

interface UseRentingDetailsSectionHandlersProps {
  clearErrors: UseFormClearErrors<RentingRequestModel>;
}

export const useRentingDetailsSectionHandlers = ({
  clearErrors,
}: UseRentingDetailsSectionHandlersProps) => {
  const handleRentedItemsSelectionChange = useCallback(() => {
    clearErrors("rentedItems");
  }, [clearErrors]);

  const handleDecorationThemesSelectionChange = useCallback(() => {
    clearErrors("decorationThemes");
  }, [clearErrors]);

  return {
    handleRentedItemsSelectionChange,
    handleDecorationThemesSelectionChange,
  };
};

