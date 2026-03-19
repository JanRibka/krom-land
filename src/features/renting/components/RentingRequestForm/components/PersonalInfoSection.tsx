import { Control } from "react-hook-form";

import Stack from "@mui/material/Stack";

import { RentingRequestModel } from "../models/RentingRequestModel";
import { FormTextField } from "./FormTextField";
import { FormPhoneField } from "./FormPhoneField";

interface PersonalInfoSectionProps {
  control: Control<RentingRequestModel>;
  isMobile: boolean;
}

export const PersonalInfoSection = ({
  control,
  isMobile,
}: PersonalInfoSectionProps) => (
  <>
    <Stack spacing={3} direction={isMobile ? "column" : "row"}>
      <FormTextField
        name="firstName"
        control={control}
        label="Jméno"
        required
        autoComplete="off"
        inputProps={{ maxLength: 50 }}
      />
      <FormTextField
        name="lastName"
        control={control}
        label="Příjmení"
        required
        autoComplete="off"
        inputProps={{ maxLength: 50 }}
      />
    </Stack>

    <Stack spacing={3} direction={isMobile ? "column" : "row"}>
      <FormTextField
        name="email"
        control={control}
        label="E-mail"
        required
        type="email"
        autoComplete="off"
        inputProps={{ maxLength: 50 }}
      />

      <FormPhoneField
        name="phone"
        control={control}
        label="Telefon"
        required
        autoComplete="off"
      />
    </Stack>
  </>
);

