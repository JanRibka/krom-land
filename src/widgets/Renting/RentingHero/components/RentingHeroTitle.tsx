import { selectRentingPageData } from "features/renting/store/rentingPageSelectors";
import { useSelector } from "react-redux";
import PageTitle from "shared/components/pageTitle/PageTitle";

export const RentingHeroTitle = () => {
  const renting = useSelector(selectRentingPageData);

  return (
    <PageTitle
      image={renting.mainImage?.path ?? ""}
      title={renting.pageHeaderTextMain}
      titleColor={renting.pageHeaderTextMainColor}
      alt={renting.mainImage?.alt ?? ""}
      imhHeight={350}
    />
  );
};

RentingHeroTitle.displayName = "RentingHeroTitle";
