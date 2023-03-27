import {
  GalleryModel,
  initialState,
} from "shared/infrastructure/store/gallery/gallerySlice";
import ImageModel from "shared/models/ImageModel";

import GalleryDTO from "../models/GalleryDTO";
import GalleryImageModel from "../models/GalleryImageModel";

export const mapFromGalleryDTO = (galleryDTO?: GalleryDTO | null) => {
  const result: GalleryModel = {
    ...initialState,
    Title: galleryDTO?.Title ?? "",
    Description: galleryDTO?.Description ?? "",
    PageHeaderTextMain: galleryDTO?.PageHeaderTextMain ?? "",
    PageHeaderTextMainColor: galleryDTO?.PageHeaderTextMainColor ?? "",
    MainImage: !!galleryDTO?.MainImage
      ? JSON.parse(galleryDTO?.MainImage)
      : new ImageModel(),
    ExternalGalleryLink: galleryDTO?.ExternalGalleryLink ?? "",
    Images:
      galleryDTO?.Images.map(
        (item) =>
          new GalleryImageModel({
            Id: item?.Id ?? 0,
            Image: !!item?.Image
              ? JSON.parse(item.Image)
              : new GalleryImageModel(),
            Delete: item?.Delete ?? false,
          })
      ) ?? [],
  };

  return result;
};
