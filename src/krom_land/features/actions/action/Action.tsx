import { forwardRef, HTMLAttributes, Ref, useState } from 'react';
import ReactPlayer from 'react-player/youtube';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';

import SectionTitle from '../../../../shared/components/sectionTitle/SectionTitle';
import AppSnackbar from '../../../../shared/components/snackbar/AppSnackbar';
import AppSnackBarOpenDataModel from '../../../../shared/components/snackbar/AppSnackBarModel';
import ActionRegistrationDialog from '../actionRegistrationDialog/ActionRegistrationDialog';
import DetailInfo from './detailInfo/DetaulInfo';
import ActionStyled from './styledComponents/ActionStyled';

interface IProps extends HTMLAttributes<HTMLDivElement> {
  name: string;
  description: string;
  backgroundColor: string;
  image: string;
  imageAlt: string;
  videoUrl?: string;
  kdy: string;
  kde: string;
  cena: string;
}

const Action = forwardRef((props: IProps, ref: Ref<HTMLDivElement>) => {
  // State
  const [open, setOpen] = useState<boolean>(false);
  const [messageOpenData, setMessageOpenData] =
    useState<AppSnackBarOpenDataModel>({
      open: false,
      message: "",
      severity: undefined,
    });

  // Constants
  const theme = useTheme();
  const {
    name,
    description,
    backgroundColor,
    image,
    imageAlt,
    videoUrl,
    kdy,
    kde,
    cena,
    ...restProps
  } = props;
  const xlDwn = useMediaQuery(theme.breakpoints.down("xl"));
  const lgDwn = useMediaQuery(theme.breakpoints.down("lg"));
  const mdDwn = useMediaQuery(theme.breakpoints.down("md"));
  const pictDescWrapperDirection = mdDwn ? "column" : "row";
  const pictDescWrapperSpacing = lgDwn ? 10 : xlDwn ? 20 : 30;

  // Other
  const renderRegistrationButton = () => {
    return (
      <Stack className='button-wrapper' direction='column' spacing={2}>
        {(() => {
          switch (backgroundColor) {
            case theme.palette.secondary.main:
              return (
                <>
                  <DetailInfo
                    kdy={kdy}
                    kde={kde}
                    cena={cena}
                    className='detail-info'
                  />
                  <Button variant='contained' onClick={() => setOpen(true)}>
                    Chci se registrovat
                  </Button>
                </>
              );
            case theme.palette.primary.main:
              return (
                <>
                  <DetailInfo
                    kdy={kdy}
                    kde={kde}
                    cena={cena}
                    className='second'
                  />
                  <Button
                    variant='contained'
                    className='detail-info second'
                    onClick={() => setOpen(true)}
                  >
                    Chci se registrovat
                  </Button>
                </>
              );
            case theme.palette.common.purple.main:
              return (
                <>
                  <DetailInfo
                    kdy={kdy}
                    kde={kde}
                    cena={cena}
                    className='third'
                  />
                  <Button
                    variant='contained'
                    className='detail-info third'
                    onClick={() => setOpen(true)}
                  >
                    Chci se registrovat
                  </Button>
                </>
              );
            default:
              return (
                <Button variant='contained' onClick={() => setOpen(true)}>
                  Chci se registrovat
                </Button>
              );
          }
        })()}
      </Stack>
    );
  };
  //TODO: Pro obr8xek bude pou6ita komponenta picture
  return (
    <ActionStyled
      sx={{ backgroundColor: backgroundColor }}
      ref={ref}
      {...restProps}
    >
      <Stack spacing={5} direction='column' sx={{ width: "100%" }}>
        {/* Obrázek */}
        <Stack
          spacing={pictDescWrapperSpacing}
          direction={pictDescWrapperDirection}
        >
          <Box
            component='img'
            src={image}
            alt={imageAlt}
            loading='lazy'
            className='action-image'
          />

          {/* Popis */}
          <Box className='description-wrapper'>
            <Box>
              <Box className='description-inner-wrapper'>
                <SectionTitle mainText={name} />
                <Typography>{description}</Typography>
              </Box>

              {/* Registrační tlačítko */}
              {renderRegistrationButton()}
            </Box>
          </Box>
        </Stack>

        {/* Přehrávač */}
        {!!videoUrl && (
          <Stack className='player-wrapper'>
            <SectionTitle mainText='Upoutávka na akci' />
            <ReactPlayer url={videoUrl} />
          </Stack>
        )}
      </Stack>
      {/* Registrační dialog */}
      <ActionRegistrationDialog
        open={open}
        setOpen={setOpen}
        actionNam={name}
        setMessageOpenData={setMessageOpenData}
      />
      {/* Informační hláška */}
      <AppSnackbar
        openData={messageOpenData}
        setOpenData={setMessageOpenData}
      />
    </ActionStyled>
  );
});

export default Action;
