import { nameof } from "nameof";
import { ChangeEvent, FormEvent, useRef, useState } from "react";

import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import useMediaQuery from "@mui/material/useMediaQuery";

import VoucherModel from "../models/VoucherModel";
import VouchersFormStyled from "./VouchersFormStyled";

const VouchersForm = () => {
  // References
  const refForm = useRef<HTMLFormElement>(null);

  // State
  const [formData, setFormData] = useState<VoucherModel>(new VoucherModel());

  // Constants
  const theme = useTheme();
  const smDwn = useMediaQuery(theme.breakpoints.down("sm"));

  // Other
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setFormData(new VoucherModel());
  };

  const handleTextFieldOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const name: string = e.target.name;
    const value: string = e.target.value;

    setFormData({ ...formData, [name]: value });
  };

  return (
    <VouchersFormStyled>
      <form ref={refForm} onSubmit={handleOnSubmit}>
        <Stack spacing={3} direction="column">
          <TextField
            label="E-mail"
            required
            variant="outlined"
            type="email"
            autoComplete="off"
            name={nameof<VoucherModel>("email")}
            value={formData.email}
            onChange={handleTextFieldOnChange}
          />

          <Stack spacing={3} direction={smDwn ? "column" : "row"}>
            <TextField
              label="Jméno"
              required
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("first_name")}
              value={formData.first_name}
              onChange={handleTextFieldOnChange}
            />
            <TextField
              label="Příjmení"
              required
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("last_name")}
              value={formData.last_name}
              onChange={handleTextFieldOnChange}
            />
          </Stack>

          <TextField
            label="Obec"
            required
            variant="outlined"
            type="text"
            autoComplete="off"
            name={nameof<VoucherModel>("city")}
            value={formData.city}
            onChange={handleTextFieldOnChange}
          />

          <Stack spacing={3} direction={smDwn ? "column" : "row"}>
            <TextField
              label="Ulice a č.p."
              required
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("street_hn")}
              value={formData.street_hn}
              onChange={handleTextFieldOnChange}
            />
            <TextField
              label="PSČ"
              required
              variant="outlined"
              type="text"
              autoComplete="off"
              name={nameof<VoucherModel>("zip_code")}
              value={formData.zip_code}
              onChange={handleTextFieldOnChange}
            />
          </Stack>
        </Stack>
      </form>
    </VouchersFormStyled>
  );
};

export default VouchersForm;
