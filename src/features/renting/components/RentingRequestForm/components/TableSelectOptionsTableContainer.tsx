import { useTableSelectOptionsTable } from "../hooks/useTableSelectOptionsTable";
import { FormTableSelectOption } from "../types/FormTableSelectOption";
import { TableSelectOptionsTable } from "./TableSelectOptionsTable";

interface TableSelectOptionsTableContainerProps {
  options: FormTableSelectOption[];
  currentValue: Array<string | number>;
  disabled?: boolean;
  isMobile: boolean;
  onToggle: (optionValue: string | number) => void;
}

export const TableSelectOptionsTableContainer = ({
  options,
  currentValue,
  disabled,
  isMobile,
  onToggle,
}: TableSelectOptionsTableContainerProps) => {
  const { handleRowClick, handleRemarkIconClick, isRemarkOpen } =
    useTableSelectOptionsTable({
      options,
      onToggle,
    });

  return (
    <TableSelectOptionsTable
      options={options}
      currentValue={currentValue}
      disabled={disabled}
      isMobile={isMobile}
      onRowClick={handleRowClick}
      onRemarkIconClick={handleRemarkIconClick}
      isRemarkOpen={isRemarkOpen}
    />
  );
};
