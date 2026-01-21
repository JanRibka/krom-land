import { mapKeysToCamelCase } from "shared/helpers/stringHelpers";
import {
  ContactModel,
  initialState,
} from "shared/infrastructure/store/contact/contactSlice";

import ContactDTO from "../models/ContactDTO";

export const mapFromContactDTO = (contactDTO?: ContactDTO | null) => {
  const result: ContactModel = {
    ...initialState,
    Title: contactDTO?.Title ?? "",
    Description: contactDTO?.Description ?? "",
    PageHeaderTextMain: contactDTO?.PageHeaderTextMain ?? "",
    PageHeaderTextMainColor: contactDTO?.PageHeaderTextMainColor ?? "",
    MainImage: !!contactDTO?.MainImage
      ? mapKeysToCamelCase(JSON.parse(contactDTO?.MainImage))
      : { alt: "", name: "", path: "" },
    GoogleMapsUrl: contactDTO?.GoogleMapsUrl ?? "",
    Email: contactDTO?.Email ?? "",
  };

  return result;
};
