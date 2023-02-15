import { forwardRef, HTMLAttributes, Ref } from "react";
import ReactPlayer from "react-player/youtube";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

import SectionTitle from "../../../../shared/components/sectionTitle/SectionTitle";
import DetailInfo from "./detailInfo/DetaulInfo";
import ActionStyled from "./styledComponents/ActionStyled";

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
  // Constants
  const theme = useTheme();
  const { name, backgroundColor, ...restProps } = props;
  const mdDwn = useMediaQuery(theme.breakpoints.down("md"));
  const pistDescWrapperDirection = mdDwn ? "column" : "row";

  // Other
  const renderRegistrationButton = () => {
    return (
      <Stack className='button-wrapper' direction='column' spacing={2}>
        {(() => {
          switch (props.backgroundColor) {
            case theme.palette.secondary.main:
              return (
                <>
                  <DetailInfo
                    kdy={props.kdy}
                    kde={props.kde}
                    cena={props.cena}
                    className='detail-info'
                  />
                  <Button variant='contained'>Chci se registrovat</Button>
                </>
              );
            case theme.palette.primary.main:
              return (
                <>
                  <DetailInfo
                    kdy={props.kdy}
                    kde={props.kde}
                    cena={props.cena}
                    className='second'
                  />
                  <Button variant='contained' className='detail-info second'>
                    Chci se registrovat
                  </Button>
                </>
              );
            case theme.palette.common.purple.main:
              return (
                <>
                  <DetailInfo
                    kdy={props.kdy}
                    kde={props.kde}
                    cena={props.cena}
                    className='third'
                  />
                  <Button variant='contained' className='detail-info third'>
                    Chci se registrovat
                  </Button>
                </>
              );
            default:
              return <Button variant='contained'>Chci se registrovat</Button>;
          }
        })()}
      </Stack>
    );
  };

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
          <Box className='description-wrapper'>
            <Box>
              <Box className='description-inner-wrapper'>
                <SectionTitle mainText={props.name} />
                <Typography>{props.description}</Typography>
              </Box>

              {/* Registrační tlačítko */}
              {renderRegistrationButton()}
            </Box>
          </Box>
        </Stack>

        {/* Přehrávač */}
        {!!props.videoUrl && (
          <Stack className='player-wrapper'>
            <SectionTitle mainText='Upoutávka na akci' />
            <ReactPlayer url={props.videoUrl} />
          </Stack>
        )}
      </Stack>
    </ActionStyled>
  );
});

export default Action;
