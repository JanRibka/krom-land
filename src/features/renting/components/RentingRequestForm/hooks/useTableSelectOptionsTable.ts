import { MouseEvent, useCallback } from "react";

import { FormTableSelectOption } from "../types/FormTableSelectOption";
import { useRemarkTooltip } from "./useRemarkTooltip";

interface UseTableSelectOptionsTableProps {
  options: FormTableSelectOption[];
  onToggle: (optionValue: string | number) => void;
}

export const useTableSelectOptionsTable = ({
  options,
  onToggle,
}: UseTableSelectOptionsTableProps) => {
  const { openRemarkKey, handleRemarkIconClick, closeRemarkTooltip } =
    useRemarkTooltip();

  const handleRowClick = useCallback(
    (event: MouseEvent<HTMLTableRowElement>) => {
      const row = event.currentTarget;
      const optionValueAttr = row.dataset.optionValue;
      const rowDisabled = row.dataset.rowDisabled === "true";

      if (!optionValueAttr || rowDisabled) return;
      closeRemarkTooltip();

      const option = options.find(
        (item) => String(item.value) === String(optionValueAttr),
      );

      if (!option) return;
      onToggle(option.value);
    },
    [closeRemarkTooltip, onToggle, options],
  );

  const isRemarkOpen = useCallback(
    (optionValue: string | number) => openRemarkKey === String(optionValue),
    [openRemarkKey],
  );

  return {
    handleRowClick,
    handleRemarkIconClick,
    isRemarkOpen,
  };
};
