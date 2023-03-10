import { useState } from "react";
import { useSelector } from "react-redux";
import PageTitle from "shared/components/pageTitle/PageTitle";
import {
  selectGallery,
  selectGalleryImages,
} from "shared/infrastructure/store/gallery/gallerySlice";

import Stack from "@mui/material/Stack";

import GridContainer from "../../../shared/components/gridContainer/GridContainer";
import GridItem from "../../../shared/components/gridItem/GridItem";
import Picture from "../../../shared/components/picture/Picture";
import OpenDialogModel from "./photosDialog/OpenDialoModel";
import PhotosDialog from "./photosDialog/PhotosDialog";
import ImageGridWrapperStyled from "./styledComponents/ImageGridWrapperStyled";

const Gallery = () => {
  // State
  const [openGalleryData, setOpenGalleryData] = useState<OpenDialogModel>({
    Open: false,
    InitialSlide: 0,
  });

  // Store
  const gallery = useSelector(selectGallery);
  const galleryImages = useSelector(selectGalleryImages);

  // Other
  const handleOpenGalleryOnClick = (index?: number) => {
    setOpenGalleryData({ Open: true, InitialSlide: index ?? 0 });
  };
  return (
    <>
      <Stack spacing={10} direction='column'>
        <>
          <PageTitle
            image={gallery.MainImagePath}
            title='Galerie'
            alt={gallery.MainImageAlt}
            imhHeight={350}
          />
        </>
        <ImageGridWrapperStyled>
          <>
            <GridContainer>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[0]}
                  index={0}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[1]}
                  index={1}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[2]}
                  index={2}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[3]}
                  index={3}
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
                  photo={galleryImages[4]}
                  index={4}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[5]}
                  index={5}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[6]}
                  index={6}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[7]}
                  index={7}
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
                  photo={galleryImages[8]}
                  index={8}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[9]}
                  index={9}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[10]}
                  index={10}
                  enbHover
                  handleOpenGalleryOnClick={handleOpenGalleryOnClick}
                />
              </GridItem>
              <GridItem xs={12} sm={6} lg={3}>
                <Picture
                  photo={galleryImages[11]}
                  index={11}
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
        photos={galleryImages}
      />
    </>
  );
};

export default Gallery;
