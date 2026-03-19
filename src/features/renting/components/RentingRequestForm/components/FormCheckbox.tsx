import React from "react";
import { Control, Controller, FieldValues, Path } from "react-hook-form";

import Checkbox, { CheckboxProps } from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface FormCheckboxProps<T extends FieldValues> extends Omit<CheckboxProps, "name"> {
  name: Path<T>;
  control: Control<T>;
  label: React.ReactNode;
}

export const FormCheckbox = <T extends FieldValues>({
  name,
  control,
  label,
  ...props
}: FormCheckboxProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field }) => (
      <FormControlLabel
        control={
          <Checkbox
            {...props}
            checked={!!field.value}
            onChange={(e) => field.onChange(e.target.checked)}
          />
        }
        label={label}
      />
    )}
  />
);
