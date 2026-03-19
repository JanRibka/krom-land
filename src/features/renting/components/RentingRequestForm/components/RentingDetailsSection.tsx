import { Control, UseFormSetValue } from "react-hook-form";
import { RentingRequestModel } from "../models/RentingRequestModel";
import { FormDateField } from "./FormDateField";
import { FormMultiSelectField } from "./FormMultiSelectField";
import { useRentingDetails } from "../hooks/useRentingDetails";

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
      <FormMultiSelectField
        name="rentedItems"
        control={control}
        label="Co si chcete zapůjčit?"
        options={itemOptions}
        required
        loading={isRentingItemsLoading}
      />

      {isDecorationSelected && (
        <FormMultiSelectField
          name="decorationThemes"
          control={control}
          label="Vyberte téma výzdoby"
          options={themeOptions}
          required
          loading={isDecorationThemesLoading}
        />
      )}
    </>
  );
};


