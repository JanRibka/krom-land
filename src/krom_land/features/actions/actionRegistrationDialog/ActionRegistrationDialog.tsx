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
import { useSelector } from "react-redux";
import AppLoader from "shared/components/loader/AppLoader";
import AppNotification from "shared/components/notification/AppNotification";
import { useRequest } from "shared/dataAccess/useRequest";
import ResultDataDTO from "shared/DTOs/ResultDataDTO";
import SelectDataDTO from "shared/DTOs/SelectDataDTO";
import { pushToDataLayer } from "shared/helpers/googleTagManagerHelper";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";
import { useCommonSlice } from "shared/infrastructure/store/common/useCommonSlice";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

import ActionsService from "../ActionsService";
import DialogContentForm from "./dialogContent/DialogContentForm";
import DialogContentFormModel from "./models/DialogContentFormModel";
import ActionRegistrationDialogStyled from "./styledComponents/ActionRegistrationDialogStyled";
import DialogActionsStyled from "./styledComponents/DialogActionsStyled";

interface IProps {
  open: boolean;
  id: number;
  actionName: string;
  actionPrice: string;
  actionDate: string;
  actionPlace: string;
  displayTShirtSize: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  handleOnClickTermsOfConditions: () => void;
}
// TODO: Při zavření dialogu zmazat data z dialogu
const ActionRegistrationDialog = (props: IProps) => {
  // Store
  const common = useSelector(selectCommon);
  const { handleTShirtSizesUpdate } = useCommonSlice();

  // State
  const [registering, setRegistering] = useState<boolean>(false);
  const [formData, setFormData] = useState<DialogContentFormModel>(
    new DialogContentFormModel()
  );

  // References
  const refForm = useRef<HTMLFormElement>(null);

  // Constants
  const _actionsService = new ActionsService();
  const childArrivesMyselveId = common.TablesOfKeys.ChildArrives.find(
    (f) => f.Key === "MYSELVE"
  )?.Id;

  // Get t-shirt sizes
  useRequest<ResultDataDTO<SelectDataDTO[]>>(
    {
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "common",
        type: "getTShirtSizes",
      }),
    },
    {
      Success: false,
      ErrMsg: "",
      Data: [] as SelectDataDTO[],
    },
    [],
    {
      apply: true,
      condition: () => !common._tShirtSizesLoaded,
    },
    (data) => {
      const dataType = typeof data;

      if (dataType === "string") {
        AppNotification("Chyba", String(data), "danger");
      } else {
        if (data.Success) {
          handleTShirtSizesUpdate(data?.Data ?? []);
        } else {
          AppNotification("Chyba", data.ErrMsg ?? "", "danger");
        }
      }
    }
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
      action_price: props.actionPrice,
      action_date: props.actionDate,
      action_place: props.actionPlace,
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

  const handleOnChangeSelect = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
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
    let data: Partial<DialogContentFormModel> = {};

    if (
      name === nameof<DialogContentFormModel>("other_how_children_arrives") &&
      JSON.parse(value) === childArrivesMyselveId
    ) {
      data = {
        [name]: JSON.parse(value),
        other_pickup_person: "",
      };
    } else {
      data = {
        [name]: JSON.parse(value),
      };
    }

    setFormData({ ...formData, ...data });
  };

  const handleFormOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    handleOnAfterFormSubmit(formData);
  };

  const handleOnAfterFormSubmit = async (formData: DialogContentFormModel) => {
    if (registering) return;

    setRegistering(true);

    const result = await _actionsService.create(formData);

    if (result) {
      setTimeout(() => {
        const newFormDat: DialogContentFormModel = {
          ...new DialogContentFormModel(),
          action_id: props.id,
          action_name: props.actionName,
          action_price: props.actionPrice,
          action_date: props.actionDate,
          action_place: props.actionPlace,
        };
        setFormData(newFormDat);
        props.setOpen(false);
        setRegistering(false);

        // Google analytics
        const timestamp = Date.now();
        const random = Math.floor(Math.random() * 1000);
        const transactionId = `${timestamp}-${random}`;

        pushToDataLayer("purchase", {
          buttonName: "",
          buttonDesc: "",
          commerce: {
            transaction_id: transactionId,
            affiliation: "Online Store",
            coupon: "",
            currency: "CZK",
            value: props.actionPrice.replaceAll(" ", ""),
            tax: "21",
            shipping: "0",
            items: [
              {
                item_id: props.id,
                item_name: props.actionName,
                item_bramd: "Krom LAND",
                item_category: "Leisure",
                item_variant: "",
                coupon: "",
                price: props.actionPrice.replaceAll(" ", ""),
                quantity: 1,
              },
            ],
          },
        });
      }, 2000);
    } else {
      setRegistering(false);
    }
  };

  return (
    <ActionRegistrationDialogStyled
      open={props.open}
      onClose={() => props.setOpen(false)}
    >
      <Box className="title-wrapper">
        <DialogTitle>
          Registrace na: {props.actionName}
          <IconButton
            aria-label="close"
            onClick={() => props.setOpen(false)}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[900],
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
          handleOnChangeRadio={handleOnChangeRadio}
          handleOnChangeSelect={handleOnChangeSelect}
          displayTShirtSize={props.displayTShirtSize}
        />

        {/* Loader */}
        {registering && (
          <Box className="loader-wrapper">
            <Box>
              <AppLoader />
            </Box>
          </Box>
        )}
      </DialogContent>
      <DialogActionsStyled>
        <Typography>
          Potvrzením registrace souhlasíte s{" "}
          <Box component="a" onClick={props.handleOnClickTermsOfConditions}>
            obchodními podmínkami
          </Box>
          .
        </Typography>
        <Box className="buttons-wrapper">
          <Button
            onClick={() => {
              props.setOpen(false);
            }}
          >
            Zavřít
          </Button>
          <Button
            variant="contained"
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
