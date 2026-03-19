import { RentingHero } from "widgets/Renting/RentingHero";
import { RentingRequest } from "widgets/Renting/RentingRequest";

import { useGetRentingPageData } from "../renting/api/hooks/useGetRentingPageData";
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
