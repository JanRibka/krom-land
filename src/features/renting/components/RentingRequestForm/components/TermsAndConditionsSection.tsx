import { Control } from "react-hook-form";

import Box from "@mui/material/Box";

import { RentingRequestModel } from "../models/RentingRequestModel";
import { FormCheckbox } from "./FormCheckbox";

interface TermsAndConditionsSectionProps {
  control: Control<RentingRequestModel>;
  onOpenTerms: (e: React.MouseEvent) => void;
}

export const TermsAndConditionsSection = ({
  control,
  onOpenTerms,
}: TermsAndConditionsSectionProps) => (
  <Box className="terms-consent">
    <FormCheckbox
      name="termsAndConditionsConsent"
      control={control}
      required
      label={
        <Box component="span">
          Souhlasím s{" "}
          <Box
            component="a"
            onClick={onOpenTerms}
            sx={{ cursor: "pointer", textDecoration: "underline" }}
          >
            obchodními podmínkami
          </Box>
        </Box>
      }
    />
  </Box>
);
