import { Control, Controller, FieldValues, Path } from "react-hook-form";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export interface FormMultiSelectOption {
  value: string | number;
  label: string;
}

interface FormMultiSelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: FormMultiSelectOption[];
  required?: boolean;
  loading?: boolean;
}

export const FormMultiSelectField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  required,
  loading,
}: FormMultiSelectFieldProps<T>) => (
  <Controller
    name={name}
    control={control}
    render={({ field: { onChange, value }, fieldState: { error } }) => {
      // Ensure value is an array of IDs/Codes (string | number)
      const currentValue = Array.isArray(value) ? value : [];
      
      const selectedOptions = options.filter((option) =>
        currentValue.some((v: string | number) => v === option.value)
      );

      return (
        <Autocomplete
          multiple
          options={options}
          loading={loading}
          disableCloseOnSelect
          getOptionLabel={(option) => option.label}
          isOptionEqualToValue={(option, value) => option.value === value.value}
          value={selectedOptions}
          onChange={(_, newValue) => {
            onChange(newValue.map((v) => v.value));
          }}
          noOptionsText={
            <Typography sx={{ color: "text.primary", opacity: 0.6 }}>
              Žádné položky k dispozici
            </Typography>
          }
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.label}
            </li>
          )}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              placeholder={label}
              required={required && currentValue.length === 0}
              error={!!error}
              helperText={error?.message}
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <>
                    {loading ? (
                      <CircularProgress color="primary" size={20} />
                    ) : null}

                    {params.InputProps.endAdornment}
                  </>
                ),
              }}
            />
          )}
        />
      );
    }}
  />
);
