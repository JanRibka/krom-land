import { ActionsModel } from "./actions/actionsSlice";
import { CommonModel } from "./common/commonSlice";
import { ContactModel } from "./contact/contactSlice";
import { GalleryModel } from "./gallery/gallerySlice";
import { HomeModel } from "./home/homeSlice";
import { WebLogosModel } from "./webLogos/webLogosSlice";
import { WebSettingsModel } from "./webSettings/webSettingsSlice";

export default interface AppState {
  home: HomeModel;
  actions: ActionsModel;
  gallery: GalleryModel;
  contact: ContactModel;
  webSettings: WebSettingsModel;
  webLogos: WebLogosModel;
  common: CommonModel;
}
