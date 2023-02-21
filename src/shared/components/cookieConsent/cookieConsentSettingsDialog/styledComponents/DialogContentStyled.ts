import DialogContent from '@mui/material/DialogContent';
import { styled } from '@mui/material/styles';

const DialogContentStyled = styled(DialogContent)(
  ({ theme }) =>
    `
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px ${theme.palette.grey[200]};
    border: solid 3px transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 10px 10px ${theme.palette.grey[400]};
    border: solid 3px transparent;
    border-radius: 10px;

    &:hover {
      box-shadow: inset 0 0 10px 10px ${theme.palette.grey[500]};
    }
  }

  &::-webkit-scrollbar-button {
    display: none;
  }
`
);

export default DialogContentStyled;
