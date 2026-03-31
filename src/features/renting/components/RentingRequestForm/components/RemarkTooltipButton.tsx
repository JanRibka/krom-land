import { MouseEvent } from "react";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { IconButton, Tooltip } from "@mui/material";

interface RemarkTooltipButtonProps {
  optionValue: string | number;
  remark: string;
  isMobile: boolean;
  isOpen: boolean;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const RemarkTooltipButton = ({
  optionValue,
  remark,
  isMobile,
  isOpen,
  onClick,
}: RemarkTooltipButtonProps) => {
  return (
    <Tooltip
      title={remark}
      arrow
      placement={isMobile ? "top-start" : "top"}
      open={isMobile ? isOpen : undefined}
      disableFocusListener={isMobile}
      disableTouchListener
    >
      <IconButton
        size="small"
        className="remark-icon-button"
        data-option-value={String(optionValue)}
        onClick={onClick}
      >
        <InfoOutlinedIcon className="remark-icon" />
      </IconButton>
    </Tooltip>
  );
};
