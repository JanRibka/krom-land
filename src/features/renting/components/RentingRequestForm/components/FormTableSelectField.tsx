import { Controller, FieldValues } from "react-hook-form";

import {
  Alert,
  Box,
  CircularProgress,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import { TABLE_FIELD_ERROR_ALERT_SX } from "../constants/FormTableSelectField.constants";
import { FormTableSelectFieldProps } from "../types/FormTableSelectFieldProps";
import { TableSelectOptionsTableContainer } from "./TableSelectOptionsTableContainer";

export const FormTableSelectField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  disabled,
  loading,
  onSelectionChange,
}: FormTableSelectFieldProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => {
        const currentValue = Array.isArray(value)
          ? (value as (string | number)[])
          : [];

        const handleToggle = (optionValue: string | number) => {
          if (disabled) return;
          const isSelected = currentValue.includes(optionValue);
          const newValue = isSelected
            ? currentValue.filter((v) => v !== optionValue)
            : [...currentValue, optionValue];
          onChange(newValue);
          onSelectionChange?.(newValue);
        };

        return (
          <Box className="renting-table-section">
            <Typography variant="subtitle1" className="section-title">
              {label}
            </Typography>
            {loading ? (
              <Box sx={{ display: "flex", justifyContent: "center", p: 4 }}>
                <CircularProgress size={24} />
              </Box>
            ) : (
              <>
                <TableSelectOptionsTableContainer
                  options={options}
                  currentValue={currentValue}
                  disabled={disabled}
                  isMobile={isMobile}
                  onToggle={handleToggle}
                />
                {error?.message && (
                  <Alert
                    severity="error"
                    variant="outlined"
                    sx={TABLE_FIELD_ERROR_ALERT_SX}
                  >
                    {error.message}
                  </Alert>
                )}
              </>
            )}
          </Box>
        );
      }}
    />
  );
};
