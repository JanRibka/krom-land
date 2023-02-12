import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const ActionStyled = styled(Box)(({ theme }) => ({
  display: "none",
  position: "relative",
  zIndex: 1,

  "&.active": {
    display: "block",
  },
}));

export default ActionStyled;
