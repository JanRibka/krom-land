import Stack from '@mui/material/Stack';

import PageTitle from '../../../shared/infrastructure/components/pageTitle/PageTitle';
import TopBackground from './img/contact_top_bg.webp';

const Actions = () => {
  return (
    <Stack spacing={10} direction='column'>
      <>
        <PageTitle
          image={TopBackground}
          title='Připravované akce'
          alt='Úvodní fotka stránky Akce'
        />
      </>
    </Stack>
  );
};

export default Actions;
