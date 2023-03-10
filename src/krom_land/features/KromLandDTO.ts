import ActionsDTO from "./actions/models/ActionsDTO";
import CommonDTO from "./CommonDTO";
import ContactDTO from "./contact/models/ContactDTO";
import GalleryDTO from "./gallery/models/GalleryDTO";
import { HomeDTO } from "./home/models/HomeDTO";

export default interface KromLandDTO {
  Common: CommonDTO;
  Home: HomeDTO;
  Actions: ActionsDTO;
  Gallery: GalleryDTO;
  Contact: ContactDTO;
}
