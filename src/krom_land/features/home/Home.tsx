import { useSelector } from "react-redux";
import PageTitle from "shared/components/pageTitle/PageTitle";
import { selectHome } from "shared/infrastructure/store/home/homeSlice";

import Stack from "@mui/material/Stack";

import AboutUs from "./aboutUs/AboutUs";
import WhatPeopleSay from "./whatPeopleSay/WhatPeopleSay";

const Home = () => {
  // Store
  const home = useSelector(selectHome);

  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={home.MainImagePath}
          alt={home.MainImageAlt}
          title='KROM Land'
          titleSecondary='Stravte skvěůý víkend s'
          imhHeight={760}
          enbFadeEffect
        />
        <AboutUs />
        <WhatPeopleSay />
      </>
    </Stack>
  );
};

export default Home;
