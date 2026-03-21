import { nameof } from "nameof";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import { useSelector } from "react-redux";
import AppCheckbox from "shared/components/checkbox/AppCheckbox";
import OkDialog from "shared/dialogs/OkDialog";
import { selectCommon } from "shared/infrastructure/store/common/commonSlice";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

import ActionsService from "../../ActionsService";
import VoucherModel from "../models/VoucherModel";
import VouchersFormStyled from "./VouchersFormStyled";

const VouchersForm = () => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // Store
  const common = useSelector(selectCommon);

  // State
  const [formData, setFormData] = useState<VoucherModel>(new VoucherModel());
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);

  // Constants
  const theme = useTheme();
  const _actionsService = new ActionsService();
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));

  // Other
  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();

    await _actionsService.sendVoucher(formData);

    setFormData(new VoucherModel());
  };

  const handleTextFieldOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnClickGdpr = (
    e: React.MouseEvent<HTMLAnchorElement | MouseEvent>
  ) => {
    e.preventDefault();
    setDialogOpen(true);
  };

  const handleOnChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    let value: string = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  const handleOnChangeCheckbox = (
    e: ChangeEvent<HTMLInputElement>,
    checked: boolean
  ) => {
    const name: string = e.target.name;

    setFormData({ ...formData, [name]: checked });
  };

  return (
    <VouchersFormStyled>
      <form ref={refForm} onSubmit={handleOnSubmit}>
        <Stack spacing={3} direction="column" className="form-inner-wrapper">
          <FormControl required>
            <FormLabel>Typ poukazu</FormLabel>
            <RadioGroup
              row
              name={nameof<VoucherModel>("voucher_type")}
              value={String(formData.voucher_type)}
              onChange={handleOnChangeRadio}
            >
              {common.TablesOfKeys.Vouchers.map((item, index) => (
                <FormControlLabel
                  key={"voucherType_" + index}
                  value={item.Id}
                  control={<Radio required disabled={!item.Enabled} />}
                  label={item.Name}
                />
              ))}
            </RadioGroup>
          </FormControl>

          <TextField
            label="E-mail"
            required
            fullWidth
            variant="outlined"
            type="email"
            autoComplete="off"
            name={nameof<VoucherModel>("email")}
            value={formData.email}
            onChange={handleTextFieldOnChange}
            inputProps={{
              maxLength: 50,
            }}
          />

          <Stack spacing={3} direction={smDwn ? "column" : "row"}>
            <TextField
              label="Jméno"
              required
              fullWidth
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("first_name")}
              value={formData.first_name}
              onChange={handleTextFieldOnChange}
              inputProps={{
                maxLength: 50,
              }}
            />
            <TextField
              label="Příjmení"
              required
              fullWidth
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("last_name")}
              value={formData.last_name}
              onChange={handleTextFieldOnChange}
              inputProps={{
                maxLength: 50,
              }}
            />
          </Stack>

          <TextField
            label="Obec"
            required
            fullWidth
            variant="outlined"
            type="text"
            autoComplete="off"
            name={nameof<VoucherModel>("city")}
            value={formData.city}
            onChange={handleTextFieldOnChange}
            inputProps={{
              maxLength: 50,
            }}
          />

          <Stack spacing={3} direction={smDwn ? "column" : "row"}>
            <TextField
              label="Ulice a č.p."
              required
              fullWidth
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("street_hn")}
              value={formData.street_hn}
              onChange={handleTextFieldOnChange}
              inputProps={{
                maxLength: 50,
              }}
            />
            <TextField
              label="PSČ"
              required
              fullWidth
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("zip_code")}
              value={formData.zip_code}
              onChange={handleTextFieldOnChange}
              inputProps={{
                maxLength: 10,
              }}
            />
          </Stack>

          <Box className="gdpr-consent">
            <AppCheckbox
              required
              checked={formData.gdpr_consent}
              name={nameof<VoucherModel>("gdpr_consent")}
              label={
                <Box component="span">
                  Souhlasím se zpracováním{" "}
                  <Box component="a" onClick={handleOnClickGdpr}>
                    osobních údajů
                  </Box>
                </Box>
              }
              onChange={handleOnChangeCheckbox}
            />
          </Box>
          <>
            <Box className="button-wrapper">
              <Button variant="contained" type="submit">
                Odeslat
              </Button>
            </Box>
          </>
        </Stack>
      </form>

      <OkDialog
        isOpen={dialogOpen}
        onClickOkButton={() => setDialogOpen(false)}
        title={common.Conditions.GdprLabel}
        isClosable
        content={
          <Box
            component="span"
            dangerouslySetInnerHTML={{ __html: common.Conditions.GdprText }}
          />
        }
      />
    </VouchersFormStyled>
  );
};

export default VouchersForm;
