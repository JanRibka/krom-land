import { mapKeysToCamelCase } from "shared/helpers/stringHelpers";
import {
  GalleryModel,
  initialState,
} from "shared/infrastructure/store/gallery/gallerySlice";

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
      ? mapKeysToCamelCase(JSON.parse(galleryDTO?.MainImage))
      : { alt: "", name: "", path: "" },
    ExternalGalleryLink: galleryDTO?.ExternalGalleryLink ?? "",
    Images:
      galleryDTO?.Images.map((item) => ({
        Id: item?.Id ?? 0,
        Image: !!item?.Image
          ? JSON.parse(item.Image)
          : ({
              Delete: false,
              Id: null,
              Image: { alt: "", name: "", path: "" },
            } as GalleryImageModel),
        Delete: item?.Delete ?? false,
      })) ?? [],
  };

  return result;
};
