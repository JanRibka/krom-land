import { ActionsModel } from "./actions/actionsSlice";
import { CommonModel } from "./common/commonSlice";
import { ContactModel } from "./contact/contactSlice";
import { GalleryModel } from "./gallery/gallerySlice";
import { HomeModel } from "./home/homeSlice";

export default interface AppState {
  home: HomeModel;
  actions: ActionsModel;
  gallery: GalleryModel;
  contact: ContactModel;
  common: CommonModel;
}
