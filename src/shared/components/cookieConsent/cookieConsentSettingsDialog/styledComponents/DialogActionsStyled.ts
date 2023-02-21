import DialogActions from '@mui/material/DialogActions';
import { styled } from '@mui/material/styles';

const DialogActionsStyled = styled(DialogActions)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "flex",
    flexDirection: "column",

    button: {
      width: "100%",

      ":first-of-type": {
        margin: "0 0 5px 0",
      },

      ":not(:first-of-type)": {
        margin: "5px 0 5px 0",
      },

      ":last-of-type": {
        margin: "5px 0 0 0",
      },
    },
  },
}));

export default DialogActionsStyled;
