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
    MainImagePath: contactDTO?.MainImagePath ?? "",
    MainImageAlt: contactDTO?.MainImageAlt ?? "",
    GoogleMapsUrl: contactDTO?.GoogleMapsUrl ?? "",
  };

  return result;
};
