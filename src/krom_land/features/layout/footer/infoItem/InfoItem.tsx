import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import InfoItemStyled from './styledComponents/InfoItemStyled';

interface IProps {
  image: string;
  alt: string;
  description: string;
  children: JSX.Element;
}

const InfoItem = (props: IProps) => {
  return (
    <InfoItemStyled spacing={3} direction='column' className='info-item'>
      <Box component='img' src={props.image} alt={props.alt} loading='lazy' />
      <Typography className='description'>{props.description}</Typography>
      {props.children}
    </InfoItemStyled>
  );
};

export default InfoItem;
