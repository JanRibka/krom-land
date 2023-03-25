import {
  ContactModel,
  initialState,
} from "shared/infrastructure/store/contact/contactSlice";
import ImageModel from "shared/models/ImageModel";

import ContactDTO from "../models/ContactDTO";

export const mapFromContactDTO = (contactDTO?: ContactDTO | null) => {
  const result: ContactModel = {
    ...initialState,
    Title: contactDTO?.Title ?? "",
    Description: contactDTO?.Description ?? "",
    PageHeaderTextMain: contactDTO?.PageHeaderTextMain ?? "",
    PageHeaderTextMainColor: contactDTO?.PageHeaderTextMainColor ?? "",
    MainImage: !!contactDTO?.MainImage
      ? JSON.parse(contactDTO?.MainImage)
      : new ImageModel(),
    GoogleMapsUrl: contactDTO?.GoogleMapsUrl ?? "",
  };

  return result;
};
