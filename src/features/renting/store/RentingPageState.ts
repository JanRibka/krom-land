import ImageModel from "shared/models/ImageModel";

export interface RentingPageState {
  title: string;
  description: string;
  pageHeaderTextMain: string;
  pageHeaderTextMainColor: string;
  mainImage: ImageModel | null;
}
