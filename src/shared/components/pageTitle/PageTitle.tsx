import Reveal from "react-awesome-reveal";

import { keyframes } from "@emotion/react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

import PageTitleStyled from "./styledComponents/PageTitleStyled";

interface IProps {
  image: string;
  title: string;
  titleColor?: string;
  titleVariant?: "h1" | "h2" | "h3";
  titleSecondary?: string;
  titleSecondaryColor?: string;
  alt: string;
  imhHeight: number;
  enbFadeEffect?: boolean;
}

const PageTitle = (props: IProps) => {
  // Other
  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(200px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

  return (
    <PageTitleStyled>
      <Box
        component='img'
        src={props.image}
        alt={props.alt}
        loading='lazy'
        sx={{
          minHeight: props.imhHeight.toString() + "px",
          maxHeight: props.imhHeight.toString() + "px",
        }}
      />
      <Reveal
        // direction='up'
        triggerOnce
        keyframes={customAnimation}
        duration={props.enbFadeEffect ? undefined : 0}
        className='animation-effect'
      >
        <Stack spacing={2} className='title-wrapper'>
          {!!props.titleSecondary && (
            <Typography
              variant='h6'
              sx={{
                color: !!props.titleSecondaryColor
                  ? props.titleSecondaryColor + " !important"
                  : undefined,
              }}
            >
              {props.titleSecondary}
            </Typography>
          )}

          <Typography
            className='main-text'
            variant={props.titleVariant || "h1"}
            sx={{
              color: !!props.titleColor
                ? props.titleColor + " !important"
                : undefined,
            }}
          >
            {props.title}
          </Typography>
        </Stack>
      </Reveal>
    </PageTitleStyled>
  );
};

export default PageTitle;
