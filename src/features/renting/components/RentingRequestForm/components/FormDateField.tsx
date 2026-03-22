import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";
import dayjs from "dayjs";
import 'dayjs/locale/cs';

interface FormDateFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  required?: boolean;
}

export const FormDateField = <T extends FieldValues>({
  name,
  control,
  label,
  required,
}: FormDateFieldProps<T>) => (
  <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="cs">
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <DatePicker
          label={label}
          value={field.value ? dayjs(field.value) : null}
          disablePast
          onChange={(date: any) => {
            if (!date) {
              field.onChange(null);
            } else {
              const d = date as dayjs.Dayjs;
              field.onChange(d.isValid() ? d.format('YYYY-MM-DD') : "invalid");
            }
          }}
          PaperProps={{
            sx: {
              "& .MuiDayCalendar-weekDayLabel": {
                color: "text.primary",
                opacity: 0.9,
                fontWeight: 700,
              },
              "& .MuiPickersDay-root": {
                color: "text.primary",
              },
              "& .MuiTypography-root": {
                color: "text.primary",
              },
              "& .MuiDayPicker-header .MuiTypography-root": {
                color: "text.primary",
                opacity: 0.9,
                fontWeight: 700,
              },
            },
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              onBlur={field.onBlur} // Přesunuto sem
              fullWidth
              required={required}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      )}
    />
  </LocalizationProvider>
);
