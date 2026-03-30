import { MouseEvent } from "react";

import { Box, Checkbox, TableCell, TableRow, Typography } from "@mui/material";

import { FormTableSelectOption } from "../types/FormTableSelectOption";
import { RemarkTooltipButton } from "./RemarkTooltipButton";

interface TableSelectOptionRowProps {
  option: FormTableSelectOption;
  isSelected: boolean;
  isRowDisabled: boolean;
  isMobile: boolean;
  isRemarkOpen: boolean;
  onRowClick: (event: MouseEvent<HTMLTableRowElement>) => void;
  onRemarkIconClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const TableSelectOptionRow = ({
  option,
  isSelected,
  isRowDisabled,
  isMobile,
  isRemarkOpen,
  onRowClick,
  onRemarkIconClick,
}: TableSelectOptionRowProps) => {
  return (
    <TableRow
      hover={!isRowDisabled}
      data-option-value={String(option.value)}
      data-row-disabled={String(isRowDisabled)}
      onClick={onRowClick}
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
              className={`option-label ${
                isSelected ? "selected" : "not-selected"
              }`}
            >
              {option.label}
            </Typography>
            {option.remark && (
              <RemarkTooltipButton
                optionValue={option.value}
                remark={option.remark}
                isMobile={isMobile}
                isOpen={isRemarkOpen}
                onClick={onRemarkIconClick}
              />
            )}
          </Box>
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
};
