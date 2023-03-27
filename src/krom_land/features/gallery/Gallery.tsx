import { useState } from "react";
import { useSelector } from "react-redux";
import PageTitle from "shared/components/pageTitle/PageTitle";
import {
  selectGallery,
  selectGalleryImages,
} from "shared/infrastructure/store/gallery/gallerySlice";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import GridContainer from "../../../shared/components/gridContainer/GridContainer";
import GridItem from "../../../shared/components/gridItem/GridItem";
import Picture from "../../../shared/components/picture/Picture";
import GoToGallery from "./goToGallery/GoToGallery";
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
  const imageCollection = galleryImages.map(
    (galleryImage) => galleryImage.Image
  );

  // Other
  const handleOpenGalleryOnClick = (index?: number) => {
    setOpenGalleryData({ Open: true, InitialSlide: index ?? 0 });
  };

  const renderImages = () => {
    let result: JSX.Element[] = [];
    let pictures: JSX.Element[] = [];

    galleryImages.forEach((galleryImage, index) => {
      if (
        (index === 0 || index % 4 !== 0) &&
        index + 1 !== galleryImages.length
      ) {
        pictures.push(
          <GridItem xs={12} sm={6} lg={3}>
            <Picture
              photo={galleryImage.Image}
              index={index}
              enbHover
              handleOpenGalleryOnClick={handleOpenGalleryOnClick}
            />
          </GridItem>
        );
      } else if (index + 1 === galleryImages.length) {
        pictures.push(
          <GridItem xs={12} sm={6} lg={3}>
            <Picture
              photo={galleryImage.Image}
              index={index}
              enbHover
              handleOpenGalleryOnClick={handleOpenGalleryOnClick}
            />
          </GridItem>
        );

        result.push(<GridContainer>{pictures}</GridContainer>);
      } else {
        result.push(<GridContainer>{pictures}</GridContainer>);
        pictures = [
          <GridItem xs={12} sm={6} lg={3}>
            <Picture
              photo={galleryImage.Image}
              index={index}
              enbHover
              handleOpenGalleryOnClick={handleOpenGalleryOnClick}
            />
          </GridItem>,
        ];
      }
    });

    return result;
  };

  return (
    <>
      <Stack direction='column'>
        <>
          <PageTitle
            image={gallery.MainImage.Path}
            title={gallery.PageHeaderTextMain}
            titleColor={gallery.PageHeaderTextMainColor}
            alt={gallery.MainImage.Alt}
            imhHeight={350}
          />
        </>
        <ImageGridWrapperStyled>{renderImages()}</ImageGridWrapperStyled>
        <GoToGallery />
      </Stack>
      {/* Photos dialog */}
      <PhotosDialog
        openData={openGalleryData}
        setOpenData={setOpenGalleryData}
        photos={imageCollection}
      />
    </>
  );
};

export default Gallery;
