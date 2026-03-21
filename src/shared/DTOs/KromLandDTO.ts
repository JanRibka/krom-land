import ActionsDTO from "features/actions/models/ActionsDTO";
import ContactDTO from "features/contact/models/ContactDTO";
import GalleryDTO from "features/gallery/models/GalleryDTO";
import HomeDTO from "features/home/models/HomeDTO";

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
