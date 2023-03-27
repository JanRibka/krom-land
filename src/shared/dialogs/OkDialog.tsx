import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

import DialogStyled from "./styledComponents/DialogStyled";

interface Props {
  isOpen: boolean;
  title: string;
  okButtonTitle?: string;
  content: JSX.Element;
  onClickOkButton: () => void;
}

const OkDialog = (props: Props) => {
  const handleOnClickOkButton = () => {
    props.onClickOkButton();
  };

  return (
    <DialogStyled open={props.isOpen}>
      <DialogTitle>{props.title}</DialogTitle>

      <DialogContent>
        <Box sx={{ marginTop: "1rem" }}>{props.content}</Box>
      </DialogContent>

      <DialogActions>
        <Button
          variant='outlined'
          color='primary'
          onClick={handleOnClickOkButton}
        >
          {props.okButtonTitle ?? "Ok"}
        </Button>
      </DialogActions>
    </DialogStyled>
  );
};

export default OkDialog;
