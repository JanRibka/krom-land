import { ComponentType, Dispatch, SetStateAction, useState } from 'react';

import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

import AppSnackBarOpenDataModel from './AppSnackBarModel';

interface IProps {
  openData: AppSnackBarOpenDataModel;
  setOpenData: Dispatch<SetStateAction<AppSnackBarOpenDataModel>>;
}

const AppSnackbar = (props: IProps) => {
  // Other
  const handleOnClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    props.setOpenData({ open: false, message: "", severity: undefined });
  };

  // const action = (
  //   <>
  //     <IconButton
  //       size='small'
  //       aria-label='close'
  //       color='inherit'
  //       onClick={handleOnClose}
  //     >
  //       <CloseIcon fontSize='small' />
  //     </IconButton>
  //   </>
  // );

  return (
    <Snackbar
      open={props.openData.open}
      autoHideDuration={6000}
      onClose={handleOnClose}
      // action={action}
      sx={{ width: "400px" }}
    >
      <Alert severity={props.openData.severity} sx={{ width: "100%" }}>
        {props.openData.message}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
