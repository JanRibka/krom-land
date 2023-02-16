import { parse as dateParse } from "date-fns";
import dayjs, { Dayjs } from "dayjs";
import { MuiTelInputInfo } from "mui-tel-input";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useRef,
  useState,
} from "react";

import emailjs from "@emailjs/browser";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";

import AppSnackBarOpenDataModel from "../../../../shared/components/snackbar/AppSnackBarModel";
import HttpStatusCode from "../../../../shared/enums/HttpStatusCode";
import {
  addTimeZoneOffset,
  dateTimeToString,
  parseDateTime,
} from "../../../../shared/helpers/dateTimeHelper";
import DialogContentForm from "./dialogContent/DialogContentForm";
import DialogContentFormModel from "./models/DialogContentFormModel";
import ActionRegistrationDialogStyled from "./styledComponents/ActionRegistrationDialogStyled";

interface IProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  actionNam: string;
  setMessageOpenData: Dispatch<SetStateAction<AppSnackBarOpenDataModel>>;
}

const ActionRegistrationDialog = (props: IProps) => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // State
  const [formData, setFormData] = useState<DialogContentFormModel>(
    new DialogContentFormModel()
  );

  // Other
  const handleTextFieldOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;
    console.log(name, value);
    setFormData({ ...formData, [name]: value });
  };

  const handleOnChangeDatePicker = (
    date: Dayjs | null,
    keyboardInputValue: string | undefined,
    name: string
  ) => {
    debugger;
    const dateFormat = "dd.MM.yyyy";
    let newDate = date?.toDate();

    // Aby se nevytvarel rok po zadani prvniho cisla napr 0002

    if (keyboardInputValue !== undefined) {
      const splitKeyboardInputValue = keyboardInputValue?.split(".");

      if (
        splitKeyboardInputValue?.length === 3 &&
        splitKeyboardInputValue[2] !== undefined &&
        splitKeyboardInputValue[2]?.length < 4
      ) {
        return;
      }
    }

    if (newDate !== null && !!newDate?.getDate()) {
      const resultDate = `${newDate.getDate()}.${
        newDate.getMonth() + 1
      }.${newDate.getUTCFullYear()}`;

      setFormData({ ...formData, [name]: resultDate });
    }
  };

  const handleOnChangeTelInput = (
    value: string,
    info: MuiTelInputInfo,
    name: string
  ) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleOnClickRegister = () => {
    refForm.current?.submit();
  };

  const handleFormOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAIL_SERVICE_ID ?? "",
        process.env.REACT_APP_EMAIL_TEMPLATE_ID_REGISTRATION ?? "",
        refForm.current as HTMLFormElement,
        process.env.REACT_APP_EMAIL_PUBLIC_KEY ?? ""
      )
      .then(
        (result) => {
          console.log(result.text);
          if (result.status === HttpStatusCode.OK) {
            props.setMessageOpenData({
              open: true,
              message: "Vaše zpráva byla úspěšně odeslána",
              severity: "success",
            });
          } else {
            props.setMessageOpenData({
              open: true,
              message: "Chyba při odesílání zprávy. Zkuste to prosím později.",
              severity: "error",
            });
          }
        },
        (error) => {
          console.log(error.text);
          props.setMessageOpenData({
            open: true,
            message: "Chyba při odesílání zprávy. Zkuste to prosím později.",
            severity: "error",
          });
        }
      );

    e.currentTarget.reset();
    setFormData(new DialogContentFormModel());
  };

  console.log(formData);
  return (
    <ActionRegistrationDialogStyled
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <Box className='title-wrapper'>
        <DialogTitle>
          Registrace na {props.actionNam}
          <IconButton
            aria-label='close'
            onClick={() => props.setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      </Box>
      <DialogContent>
        <DialogContentForm
          ref={refForm}
          formData={formData}
          handleTextFieldOnChange={handleTextFieldOnChange}
          handleOnChangeDatePipcker={handleOnChangeDatePicker}
          handleOnChangeTelInput={handleOnChangeTelInput}
          handleFormOnSubmit={handleFormOnSubmit}
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={() => {
            props.setOpen(false);
          }}
        >
          Zvařít
        </Button>
        <Button variant='contained' onClick={handleOnClickRegister}>
          Registrivat
        </Button>
      </DialogActions>
    </ActionRegistrationDialogStyled>
  );
};

export default ActionRegistrationDialog;
