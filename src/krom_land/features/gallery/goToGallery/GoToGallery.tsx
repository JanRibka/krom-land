import { GoogleAnalyticsHelper } from 'shared/helpers/googleAnalyticsHelper';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import GridContainer from '../../../../shared/components/gridContainer/GridContainer';
import GridItem from '../../../../shared/components/gridItem/GridItem';

const GoToGallery = () => {
  // Consts
  const theme = useTheme();
  const googleAnalyticsHelper: GoogleAnalyticsHelper =
    new GoogleAnalyticsHelper();

  // Other
  const HandleOnClick = () => {
    googleAnalyticsHelper.SendEventToGA(
      "Galerie",
      "Zobrazení galerie na Instagramu z galerie"
    );
  };

  return (
    <GridContainer sx={{ marginTop: "50px", justifyContent: "center" }}>
      <GridItem xs={12} justifyContent='center'>
        <Box
          component='a'
          href='https://www.instagram.com/hairsalonph/'
          target='_blank'
          onClick={HandleOnClick}
          sx={{
            borderRadius: "23px",
            height: "46px",
            backgroundColor: theme.palette.primary.main,
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            padding: "0 20px",
            textDecoration: "none",
            color: theme.palette.text.primary,
            ":hover": {
              backgroundColor: theme.palette.primary.dark,
            },
          }}
        >
          Zobrazit celou galerii
        </Box>
      </GridItem>
    </GridContainer>
  );
};

export default GoToGallery;
