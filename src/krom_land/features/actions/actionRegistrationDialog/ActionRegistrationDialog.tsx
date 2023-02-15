import { Dispatch, SetStateAction } from "react";

import DialogContent from "@mui/material/DialogContent";

import ActionRegistrationDialogStyled from "./styledComponents/ActionRegistrationDialogStyled";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

const ActionRegistrationDialog = (props: IProps) => {
  return (
    <>
      {/* <ActionRegistrationDialogStyled open={props.open}>
      <DialogTitle></DialogTitle>
      <DialogContent></DialogContent>
    </ActionRegistrationDialogStyled> */}
    </>
  );
};

export default ActionRegistrationDialog;
