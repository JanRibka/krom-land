import { useSelector } from 'react-redux';
import GridContainer from 'shared/components/gridContainer/GridContainer';
import GridItem from 'shared/components/gridItem/GridItem';
import { pushToDataLayer } from 'shared/helpers/googleTagManagerHelper';
import { selectGallery } from 'shared/infrastructure/store/gallery/gallerySlice';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

const GoToGallery = () => {
  // Store
  const gallery = useSelector(selectGallery);

  // Consts
  const theme = useTheme();

  // Other
  const HandleOnClick = () => {
    // googleAnalyticsHelper.SendEventToGA("Galerie", "Zobrazení externí galeri");
    pushToDataLayer("button_click", {
      buttonName: "goToGallery",
      buttonDesc: "Zobrazení externí galeri",
    });
  };

  return (
    <GridContainer sx={{ marginBottom: "80px", justifyContent: "center" }}>
      <GridItem xs={12} justifyContent='center'>
        <Box
          component='a'
          href={gallery.ExternalGalleryLink}
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
