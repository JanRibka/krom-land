import {
  GalleryModel,
  initialState,
} from "shared/infrastructure/store/gallery/gallerySlice";
import ImageModel from "shared/models/ImageModel";

import GalleryDTO from "../models/GalleryDTO";

export const mapFromGalleryDTO = (galleryDTO?: GalleryDTO | null) => {
  const result: GalleryModel = {
    ...initialState,
    Title: galleryDTO?.Title ?? "",
    Description: galleryDTO?.Description ?? "",
    MainImage: !!galleryDTO?.MainImage
      ? JSON.parse(galleryDTO?.MainImage)
      : new ImageModel(),
    Images:
      galleryDTO?.Images.map(
        (item) =>
          new ImageModel({
            Path: item.ImagePath,
            Alt: item.ImageAlt,
          })
      ) ?? [],
  };

  return result;
};
