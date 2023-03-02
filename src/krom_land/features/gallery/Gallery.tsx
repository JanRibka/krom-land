import { useState } from "react";
import PageTitle from "shared/components/pageTitle/PageTitle";

import Stack from "@mui/material/Stack";

import GridContainer from "../../../shared/components/gridContainer/GridContainer";
import GridItem from "../../../shared/components/gridItem/GridItem";
import Picture from "../../../shared/components/picture/Picture";
import TopBackground from "./img/contact_top_bg.webp";
import photos from "./PhotosDeclaration";
import OpenDialogModel from "./photosDialog/OpenDialoModel";
import PhotosDialog from "./photosDialog/PhotosDialog";
import ImageGridWrapperStyled from "./styledComponents/ImageGridWrapperStyled";

const Gallery = () => {
  // State
  const [openGalleryData, setOpenGalleryData] = useState<OpenDialogModel>({
    Open: false,
    InitialSlide: 0,
  });

  // Other
  const handleOpenGalleryOnClick = (index?: number) => {
    setOpenGalleryData({ Open: true, InitialSlide: index ?? 0 });
  };
  return (
    <>
      <Stack spacing={10} direction='column'>
        <>
          <PageTitle
            image={TopBackground}
            title='Galerie'
            alt='Úvodní fotka stránky Galerie'
            imhHeight={350}
          />
        </>
        <ImageGridWrapperStyled>
          <>
            <GridContainer>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[0]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[1]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[2]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[3]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
            </GridContainer>
          </>
          <>
            <GridContainer>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[4]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[5]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[6]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[7]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
            </GridContainer>
          </>
          <>
            <GridContainer>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[8]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[9]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[10]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={photos[11]}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
            </GridContainer>
          </>
        </ImageGridWrapperStyled>
      </Stack>
      {/* Photos dialog */}
      <PhotosDialog
        openData={openGalleryData}
        setOpenData={setOpenGalleryData}
        photos={photos}
      />
    </>
  );
};

export default Gallery;
