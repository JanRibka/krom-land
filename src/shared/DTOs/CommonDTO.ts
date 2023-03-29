import ConditionsDTO from "shared/DTOs/ConditionsDTO";
import TablesOfKeysModel from "shared/models/TablesOfKeysModel";

export default interface CommonDTO {
  Conditions: ConditionsDTO | null;
  TablesOfKeys: TablesOfKeysModel | null;
}
