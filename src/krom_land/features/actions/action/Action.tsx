import { forwardRef, HTMLAttributes, Ref } from 'react';
import ReactPlayer from 'react-player/youtube';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import SectionTitle from '../../../../shared/components/sectionTitle/SectionTitle';
import ActionStyled from './styledComponents/ActionStyled';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  backgroundColor: string;
  image: string;
  imageAlt: string;
  videoUrl?: string;
}

const Action = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // Constants
  const theme = useTheme();
  const { name, backgroundColor, ...restProps } = props;
  const mdDwn = useMediaQuery(theme.breakpoints.down("md"));
  const pistDescWrapperDirection = mdDwn ? "column" : "row";

  return (
    <ActionStyled
      sx={{ backgroundColor: props.backgroundColor }}
      ref={ref}
      {...restProps}
    >
      <Stack spacing={5} direction='column' sx={{ width: "100%" }}>
        {/* Obrázek */}
        <Stack spacing={10} direction={pistDescWrapperDirection}>
          <Box
            component='img'
            src={props.image}
            alt={props.imageAlt}
            loading='lazy'
            className='action-image'
          />

          {/* Popis */}
          <Stack className='description-wrapper'>
            <SectionTitle mainText={props.name} />
            <Typography>{props.description}</Typography>
          </Stack>
        </Stack>

        {/* Přehrávač */}
        {!!props.videoUrl && (
          <Stack className='player-wrapper'>
            <SectionTitle mainText='Upoutávka na akci' />
            <ReactPlayer url={props.videoUrl} />
          </Stack>
        )}

        {/* Registrační tlačítko */}
        <Box className='button-wrapper'>
          {(() => {
            switch (props.backgroundColor) {
              case theme.palette.secondary.main:
                return <Button variant='contained'>Chci se registrovat</Button>;
              case theme.palette.primary.main:
                return (
                  <Button variant='contained' className='second'>
                    Chci se registrovat
                  </Button>
                );
              case theme.palette.common.purple.main:
                return (
                  <Button variant='contained' className='third'>
                    Chci se registrovat
                  </Button>
                );
              default:
                return <Button variant='contained'>Chci se registrovat</Button>;
            }
          })()}
        </Box>
      </Stack>
    </ActionStyled>
  );
});

export default Action;
