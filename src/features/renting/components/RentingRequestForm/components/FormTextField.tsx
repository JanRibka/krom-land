import { Control, Controller, FieldValues, Path } from "react-hook-form";

import TextField, { TextFieldProps } from "@mui/material/TextField";

interface FormTextFieldProps<T extends FieldValues>
  extends Omit<TextFieldProps, "name"> {
  name: Path<T>;
  control: Control<T>;
}

export const FormTextField = <T extends FieldValues>({
  name,
  control,
  ...props
}: FormTextFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field, fieldState: { error } }) => (
      <TextField
        {...field}
        {...props}
        error={!!error}
        helperText={error?.message}
        fullWidth
        variant="outlined"
      />
    )}
  />
);
