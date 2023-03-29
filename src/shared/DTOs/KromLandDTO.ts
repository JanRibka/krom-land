import ActionsDTO from "krom_land/features/actions/models/ActionsDTO";
import ContactDTO from "krom_land/features/contact/models/ContactDTO";
import GalleryDTO from "krom_land/features/gallery/models/GalleryDTO";
import HomeDTO from "krom_land/features/home/models/HomeDTO";

import CommonDTO from "./CommonDTO";

export default interface KromLandDTO {
  Common: CommonDTO;
  Home: HomeDTO;
  Actions: ActionsDTO;
  Gallery: GalleryDTO;
  Contact: ContactDTO;
}
