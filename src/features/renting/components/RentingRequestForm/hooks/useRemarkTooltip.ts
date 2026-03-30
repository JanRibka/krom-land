import { MouseEvent, useCallback, useState } from "react";

export const useRemarkTooltip = () => {
  const [openRemarkKey, setOpenRemarkKey] = useState<string | null>(null);

  const handleRemarkIconClick = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
      event.preventDefault();
      event.stopPropagation();

      const optionValueAttr = event.currentTarget.dataset.optionValue;
      if (!optionValueAttr) return;

      setOpenRemarkKey((previousValue) =>
        previousValue === optionValueAttr ? null : optionValueAttr
      );
    },
    []
  );

  const closeRemarkTooltip = useCallback(() => {
    setOpenRemarkKey(null);
  }, []);

  return {
    openRemarkKey,
    handleRemarkIconClick,
    closeRemarkTooltip,
  };
};

