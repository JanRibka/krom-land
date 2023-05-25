import ActionsDTO from "krom_land/features/actions/models/ActionsDTO";
import ContactDTO from "krom_land/features/contact/models/ContactDTO";
import GalleryDTO from "krom_land/features/gallery/models/GalleryDTO";
import HomeDTO from "krom_land/features/home/models/HomeDTO";

import CommonDTO from "./CommonDTO";
import WebLogosDTO from "./WebLogosDTO";
import WebSettingsDTO from "./WebSettingsDTO";

export default interface KromLandDTO {
  Home: HomeDTO;
  Actions: ActionsDTO;
  Gallery: GalleryDTO;
  Contact: ContactDTO;
  WebSettings: WebSettingsDTO;
  WebLogos: WebLogosDTO;
  Common: CommonDTO;
}
