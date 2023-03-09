import { CommonModel } from "./common/commonSlice";
import { HomeModel } from "./home/homeSlice";

export default interface AppState {
  home: HomeModel;
  common: CommonModel;
}
