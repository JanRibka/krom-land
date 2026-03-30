import { Control, UseFormClearErrors, UseFormSetValue } from "react-hook-form";

import { Box } from "@mui/material";

import { useRentingDetails } from "../hooks/useRentingDetails";
import { useRentingDetailsSectionHandlers } from "../hooks/useRentingDetailsSectionHandlers";
import { RentingRequestModel } from "../models/RentingRequestModel";
import { FormDateField } from "./FormDateField";
import { FormTableSelectField } from "./FormTableSelectField";
import { FormTextField } from "./FormTextField";
import { RentingTotalPrice } from "./RentingTotalPrice";

interface RentingDetailsSectionProps {
  control: Control<RentingRequestModel>;
  setValue: UseFormSetValue<RentingRequestModel>;
  clearErrors: UseFormClearErrors<RentingRequestModel>;
}

export const RentingDetailsSection = ({
  control,
  setValue,
  clearErrors,
}: RentingDetailsSectionProps) => {
  const {
    itemOptions,
    themeOptions,
    isDecorationSelected,
    totalPrice,
    isRentingItemsLoading,
    isDecorationThemesLoading,
  } = useRentingDetails({ control, setValue });
  const {
    handleRentedItemsSelectionChange,
    handleDecorationThemesSelectionChange,
  } = useRentingDetailsSectionHandlers({ clearErrors });

  return (
    <>
      <FormDateField
        name="rentingDate"
        control={control}
        label="Datum zapůjčení"
        required
      />
      <FormTableSelectField
        name="rentedItems"
        control={control}
        label="Co si chcete zapůjčit?"
        options={itemOptions}
        loading={isRentingItemsLoading}
        onSelectionChange={handleRentedItemsSelectionChange}
      />

      <FormTableSelectField
        name="decorationThemes"
        control={control}
        label="Vyberte téma výzdoby"
        options={themeOptions}
        disabled={!isDecorationSelected}
        loading={isDecorationThemesLoading}
        onSelectionChange={handleDecorationThemesSelectionChange}
      />

      <Box sx={{ mt: 2 }}>
        <FormTextField
          name="remark"
          control={control}
          label="Chcete nám ještě něco sdělit?"
          multiline
          rows={4}
          inputProps={{ maxLength: 1000 }}
          placeholder="Doplňující informace k vaší poptávce..."
        />
      </Box>

      <RentingTotalPrice totalPrice={totalPrice} />
    </>
  );
};
