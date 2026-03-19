import { RentingRequestForm } from "krom_land/features/renting/components/RentingRequestForm/RentingRequestForm";

import { RentingRequestStyled } from "./components/RentingRequestStyled";

export const RentingRequest = () => {
  return (
    <RentingRequestStyled component="section">
      <RentingRequestForm />
    </RentingRequestStyled>
  );
};

RentingRequest.displayName = "RentingRequest";
