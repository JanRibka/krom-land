import OkDialog from "shared/dialogs/OkDialog";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { PersonalInfoSection } from "./components/PersonalInfoSection";
import { RentingDetailsSection } from "./components/RentingDetailsSection";
import RentingRequestFormStyled from "./components/RentingRequestFormStyled";
import { TermsAndConditionsSection } from "./components/TermsAndConditionsSection";
import { useRentingRequestForm } from "./hooks/useRentingRequestForm";

/**
 * RentingRequestForm component (Orchestrator)
 *
 * Handles layout and coordination of the renting request form.
 * Logic is extracted to useRentingRequestForm hook.
 * UI is decomposed into specialized section components.
 */
export const RentingRequestForm = () => {
  const {
    control,
    handleSubmit,
    setValue,
    isMobile,
    handleOpenTerms,
    handleCloseTerms,
    dialogOpen,
    common,
  } = useRentingRequestForm();

  return (
    <RentingRequestFormStyled>
      <form onSubmit={handleSubmit}>
        <Stack spacing={3} direction="column" className="form-inner-wrapper">
          <PersonalInfoSection control={control} isMobile={isMobile} />

          <RentingDetailsSection control={control} setValue={setValue} />

          <TermsAndConditionsSection
            control={control}
            onOpenTerms={handleOpenTerms}
          />

          <Box className="button-wrapper">
            <Button variant="contained" type="submit">
              Odeslat
            </Button>
          </Box>
        </Stack>
      </form>

      <OkDialog
        isOpen={dialogOpen}
        onClickOkButton={handleCloseTerms}
        title={common.Conditions.TermsOfConditionsLabel}
        isClosable
        content={
          <Box
            component="span"
            dangerouslySetInnerHTML={{
              __html: common.Conditions.TermsOfConditionsText,
            }}
          />
        }
      />
    </RentingRequestFormStyled>
  );
};

RentingRequestForm.displayName = "RentingRequestForm";
