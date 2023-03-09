import { CommonModel } from "shared/infrastructure/store/common/commonSlice";

import { HomeDTO } from "./home/models/HomeDTO";

export default interface KromLandDTO {
  Home: HomeDTO;
  Common: CommonModel;
}
