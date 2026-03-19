import { Control, Controller, FieldValues, Path } from "react-hook-form";

import { MuiTelInput, MuiTelInputProps } from "mui-tel-input";

interface FormPhoneFieldProps<T extends FieldValues>
  extends Omit<MuiTelInputProps, "name" | "value" | "onChange"> {
  name: Path<T>;
  control: Control<T>;
}

export const FormPhoneField = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormPhoneFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <MuiTelInput
        {...field}
        {...props}
        error={!!error}
        helperText={error?.message}
        fullWidth
        variant="outlined"
        defaultCountry="CZ"
        langOfCountryName="cs"
      />
    )}
  />
);
