import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import PageTitleStyled from './styledComponents/PageTitleStyled';

interface IProps {
  image: string;
  title: string;
  alt: string;
}

const PageTitle = (props: IProps) => {
  // TODO: Při načítání obrázku chvíli není nic vidět, dát tam nějaké pozadí
  return (
    <PageTitleStyled>
      <Box component='img' src={props.image} alt={props.alt} loading='lazy' />
      <Typography variant='h1'>{props.title}</Typography>
    </PageTitleStyled>
  );
};

export default PageTitle;
