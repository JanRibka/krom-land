import { Control, UseFormSetValue } from "react-hook-form";

import { Box } from "@mui/material";

import { useRentingDetails } from "../hooks/useRentingDetails";
import { RentingRequestModel } from "../models/RentingRequestModel";
import { FormDateField } from "./FormDateField";
import { FormTableSelectField } from "./FormTableSelectField";
import { FormTextField } from "./FormTextField";
import { RentingTotalPrice } from "./RentingTotalPrice";

interface RentingDetailsSectionProps {
  control: Control<RentingRequestModel>;
  setValue: UseFormSetValue<RentingRequestModel>;
}

export const RentingDetailsSection = ({
  control,
  setValue,
}: RentingDetailsSectionProps) => {
  const {
    itemOptions,
    themeOptions,
    isDecorationSelected,
    totalPrice,
    isRentingItemsLoading,
    isDecorationThemesLoading,
  } = useRentingDetails({ control, setValue });

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
      />

      <FormTableSelectField
        name="decorationThemes"
        control={control}
        label="Vyberte téma výzdoby"
        options={themeOptions}
        disabled={!isDecorationSelected}
        loading={isDecorationThemesLoading}
      />

      {/* <Box sx={{ mt: 2 }}>
        <FormTextField
          name="remark"
          control={control}
          label="Chcete nám ještě něco sdělit?"
          multiline
          rows={4}
          inputProps={{ maxLength: 1000 }}
          placeholder="Doplňující informace k vaší poptávce..."
        />
      </Box> */}

      <RentingTotalPrice totalPrice={totalPrice} />
    </>
  );
};
