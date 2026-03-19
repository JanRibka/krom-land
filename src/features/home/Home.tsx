import { useSelector } from "react-redux";
import { useHomeGetData } from "shared/api/home/hooks/useHomeGetData";
import PageTitle from "shared/components/pageTitle/PageTitle";
import { selectHomePageTitle } from "shared/infrastructure/store/home/homeSlice";

import Stack from "@mui/material/Stack";

import AboutUs from "./aboutUs/AboutUs";
import News from "./news/News";
import OurTeam from "./ourTeam/OurTeam";
import WhatPeopleSay from "./whatPeopleSay/WhatPeopleSay";

const Home = () => {
  // Get data
  useHomeGetData();

  // Store
  const homePageTitle = useSelector(selectHomePageTitle);

  return (
    <Stack direction="column">
      <>
        <PageTitle
          image={homePageTitle.mainImagePath ?? ""}
          alt={homePageTitle.mainImageAlt ?? ""}
          title={homePageTitle.pageHeaderTextMain}
          titleColor={homePageTitle.pageHeaderTextMainColor}
          titleVariant="h2"
          titleSecondary={homePageTitle.pageHeaderTextSecondary}
          titleSecondaryColor={homePageTitle.pageHeaderTextSecondaryColor}
          imhHeight={760}
          enbFadeEffect
        />
        <News />
        <AboutUs />
        <OurTeam />
        <WhatPeopleSay />
      </>
    </Stack>
  );
};

export default Home;
