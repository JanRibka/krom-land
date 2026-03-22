import ImageModel from "shared/models/ImageModel";

import { RentingData } from "../types/RentingData";
import { RentingPageState } from "../store/RentingPageState";

/**
 * Maps API data (RentingData) to the store shape (RentingState).
 * Converts mainImage from a JSON string to a full ImageModel instance.
 * API sends: '{"path":"...","alt":"...","name":"...","id":null}'
 */
export function mapRentingDataToState(data: RentingData): RentingPageState {
  const parsedImage: Partial<ImageModel> = data.mainImage
    ? JSON.parse(data.mainImage)
    : {};

  return {
    title: data.title,
    description: data.description,
    pageHeaderTextMain: data.pageHeaderTextMain,
    pageHeaderTextMainColor: data.pageHeaderTextMainColor,
    mainImage: new ImageModel(parsedImage),
  };
}
