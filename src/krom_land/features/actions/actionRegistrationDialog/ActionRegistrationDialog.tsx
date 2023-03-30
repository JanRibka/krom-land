import { Dayjs } from "dayjs";
import { MuiTelInputInfo } from "mui-tel-input";
import { nameof } from "nameof";
import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

import CheckIcon from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Typography from "@mui/material/Typography";

import DialogContentForm from "./dialogContent/DialogContentForm";
import DialogContentFormModel from "./models/DialogContentFormModel";
import ActionRegistrationDialogStyled from "./styledComponents/ActionRegistrationDialogStyled";
import DialogActionsStyled from "./styledComponents/DialogActionsStyled";

interface IProps {
  open: boolean;
  id: number;
  actionName: string;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOnClickTermsOfConditions: () => void;
  handleOnAfterFormSubmit: (formData: DialogContentFormModel) => void;
}
// TODO: Při zavření dialogu zmazat data z dialogu
const ActionRegistrationDialog = (props: IProps) => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // State
  const [formData, setFormData] = useState<DialogContentFormModel>(
    new DialogContentFormModel()
  );

  // Other
  useEffect(() => {
    setHiddens();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.actionName, props.id]);

  const setHiddens = () => {
    setFormData({
      ...formData,
      action_id: props.id,
      action_name: props.actionName,
    });
  };

  const handleTextFieldOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnChangeDatePicker = (
    date: Dayjs | null,
    keyboardInputValue: string | undefined,
    name: string
  ) => {
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
    } else if (!!!newDate) {
      setFormData({ ...formData, [name]: "" });
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
    // refForm.current?.submit();
    const submitButton = document.getElementsByClassName(
      "registration-submit-button"
    );

    if (submitButton.length > 0) {
      const button = submitButton[0] as HTMLButtonElement;
      button.click();
    }
  };

  const handleOnChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let value: string = e.target.value;
    let data: Partial<DialogContentFormModel> = {
      [name]: value,
    };

    if (
      name === nameof<DialogContentFormModel>("other_how_children_arrives") &&
      value === "ALONE"
    ) {
      data = {
        ...data,
        other_pickup_person: "",
      };
    } else if (name === nameof<DialogContentFormModel>("other_photos")) {
      data = {
        [name]: JSON.parse(value),
      };
    }

    setFormData({ ...formData, ...data });
  };

  const handleFormOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    props.handleOnAfterFormSubmit(formData);

    const newFormDat: DialogContentFormModel = {
      ...new DialogContentFormModel(),
      action_id: props.id,
      action_name: props.actionName,
    };
    setFormData(newFormDat);
  };
  console.log(formData);
  return (
    <ActionRegistrationDialogStyled
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <Box className='title-wrapper'>
        <DialogTitle>
          Registrace na: {props.actionName}
          {/* <IconButton
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
          </IconButton> */}
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
          handleOnChangeRadio={handleOnChangeRadio}
        />
      </DialogContent>
      <DialogActionsStyled>
        <Typography>
          Potvrzením registrace souhlasíte s{" "}
          <Box component='a' onClick={props.handleOnClickTermsOfConditions}>
            obchodními podmínkami
          </Box>
          .
        </Typography>
        <Box className='buttons-wrapper'>
          <Button
            onClick={() => {
              props.setOpen(false);
            }}
          >
            Zvařít
          </Button>
          <Button
            variant='contained'
            onClick={handleOnClickRegister}
            startIcon={<CheckIcon />}
          >
            Potvrdit registraci
          </Button>
        </Box>
      </DialogActionsStyled>
    </ActionRegistrationDialogStyled>
  );
};

export default ActionRegistrationDialog;
