import { useGetRentingPageData } from "krom_land/features/renting/api/hooks/useGetRentingPageData";
import { RentingHero } from "widgets/Renting/RentingHero";
import { RentingRequest } from "widgets/Renting/RentingRequest";

import PageStyled from "./styledComponents/PageStyled";

const RentingPage = () => {
  useGetRentingPageData();

  return (
    <PageStyled component="main">
      <div className="top-space"></div>
      <RentingHero />
      <RentingRequest />
    </PageStyled>
  );
};

export default RentingPage;
