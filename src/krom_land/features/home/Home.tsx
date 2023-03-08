import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import PageTitle from 'shared/components/pageTitle/PageTitle';
import { selectHome } from 'shared/infrastructure/store/home/homeSlice';
import { useHomeSlice } from 'shared/infrastructure/store/home/useHomeSlice';

import Stack from '@mui/material/Stack';

import AboutUs from './aboutUs/AboutUs';
import HomeService from './HomeService';
import TopBackground from './img/post-5-copyright.jpg';
import { mapFromHomeDTO } from './save/mapFromHomeDTO';
import WhatPeopleSay from './whatPeopleSay/WhatPeopleSay';

const Home = () => {
  // Constants
  const _homeService = new HomeService();
  const { handleHomeUpdate } = useHomeSlice();

  // Store
  const home = useSelector(selectHome);

  // Other
  useEffect(() => {
    if (!home._dataLoaded) {
      getDataHome();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getDataHome = async () => {
    const data = await _homeService.getData();

    handleHomeUpdate(mapFromHomeDTO(data));
  };

  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='KROM Land'
          titleSecondary='Stravte skvěůý víkend s'
          alt='Úvodní fotka stránky Akce'
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
