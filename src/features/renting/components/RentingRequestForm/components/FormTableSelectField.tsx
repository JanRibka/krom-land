import { Control, Controller, FieldValues, Path } from "react-hook-form";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Checkbox,
  Tooltip,
  Typography,
  Box,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

export interface FormTableSelectOption {
  value: string | number;
  label: string;
  isActive?: boolean;
  price?: number;
  remark?: string;
}

interface FormTableSelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: FormTableSelectOption[];
  disabled?: boolean;
  loading?: boolean;
  required?: boolean;
}

export const FormTableSelectField = <T extends FieldValues>({
  name,
  control,
  label,
  options,
  disabled,
  loading,
  required,
}: FormTableSelectFieldProps<T>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Controller
      name={name}
      control={control}
      rules={{ required }}
      render={({ field: { onChange, value } }) => {
        const currentValue = Array.isArray(value) ? (value as (string | number)[]) : [];

        const handleToggle = (optionValue: string | number) => {
          if (disabled) return;
          const isSelected = currentValue.includes(optionValue);
          const newValue = isSelected
            ? currentValue.filter((v) => v !== optionValue)
            : [...currentValue, optionValue];
          onChange(newValue);
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
                <TableContainer className="table-container">
                  <Table size="medium">
                    <TableBody>
                      {options.map((option) => {
                        const isSelected = currentValue.includes(option.value);
                        const isRowDisabled = disabled || option.isActive === false;

                        return (
                          <TableRow
                            key={option.value}
                            hover={!isRowDisabled}
                            onClick={() => !isRowDisabled && handleToggle(option.value)}
                            selected={isSelected}
                            className={`table-row ${isRowDisabled ? "disabled-row" : ""}`}
                          >
                            <TableCell padding="checkbox" sx={{ width: 56, pl: 2 }}>
                              <Checkbox
                                checked={isSelected}
                                disabled={isRowDisabled}
                                size="small"
                                color="primary"
                              />
                            </TableCell>
                            <TableCell sx={{ py: 2 }}>
                              <Box sx={{ display: "flex", flexDirection: "column" }}>
                                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                                  <Typography
                                    variant="body1"
                                    className={`option-label ${isSelected ? "selected" : "not-selected"}`}
                                  >
                                    {option.label}
                                  </Typography>
                                  {!isMobile && option.remark && (
                                    <Tooltip title={option.remark} arrow placement="top">
                                      <InfoOutlinedIcon className="remark-icon" />
                                    </Tooltip>
                                  )}
                                </Box>
                                {isMobile && option.remark && (
                                  <Typography
                                    variant="caption"
                                    sx={{
                                      color: "text.secondary",
                                      mt: 0.5,
                                      lineHeight: 1.2,
                                      display: "block",
                                    }}
                                  >
                                    {option.remark}
                                  </Typography>
                                )}
                              </Box>
                            </TableCell>
                            <TableCell align="right" sx={{ width: 120, pr: 3 }}>
                              {option.price !== undefined && option.price > 0 && (
                                <Typography
                                  variant="body1"
                                  className={`price-text ${isSelected ? "selected" : "not-selected"}`}
                                >
                                  {option.price.toLocaleString("cs-CZ")} Kč
                                </Typography>
                              )}
                            </TableCell>
                          </TableRow>
                        );
                      })}
                      {options.length === 0 && (
                        <TableRow>
                          <TableCell colSpan={3} align="center">
                            <Typography
                              variant="body2"
                              sx={{
                                py: 4,
                                color: "text.disabled",
                                fontStyle: "italic",
                              }}
                            >
                              Žádné položky k dispozici
                            </Typography>
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </TableContainer>
              </>
            )}
          </Box>
        );
      }}
    />
  );
};
