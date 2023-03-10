import ActionsDTO from "./actions/models/ActionsDTO";
import CommonDTO from "./CommonDTO";
import { HomeDTO } from "./home/models/HomeDTO";

export default interface KromLandDTO {
  Home: HomeDTO;
  Common: CommonDTO;
  Actions: ActionsDTO;
}
