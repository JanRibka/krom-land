import { MouseEvent } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";

import { FormTableSelectOption } from "../types/FormTableSelectOption";
import { TableSelectOptionRow } from "./TableSelectOptionRow";

interface TableSelectOptionsTableProps {
  options: FormTableSelectOption[];
  currentValue: Array<string | number>;
  disabled?: boolean;
  isMobile: boolean;
  onRowClick: (event: MouseEvent<HTMLTableRowElement>) => void;
  onRemarkIconClick: (event: MouseEvent<HTMLButtonElement>) => void;
  isRemarkOpen: (optionValue: string | number) => boolean;
}

export const TableSelectOptionsTable = ({
  options,
  currentValue,
  disabled,
  isMobile,
  onRowClick,
  onRemarkIconClick,
  isRemarkOpen,
}: TableSelectOptionsTableProps) => {
  return (
    <TableContainer className="table-container">
      <Table size="medium">
        <TableBody>
          {options.map((option) => {
            const isSelected = currentValue.includes(option.value);
            const isRowDisabled = disabled || option.isActive === false;

            return (
              <TableSelectOptionRow
                key={option.value}
                option={option}
                isSelected={isSelected}
                isRowDisabled={isRowDisabled}
                isMobile={isMobile}
                isRemarkOpen={isRemarkOpen(option.value)}
                onRowClick={onRowClick}
                onRemarkIconClick={onRemarkIconClick}
              />
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
  );
};
