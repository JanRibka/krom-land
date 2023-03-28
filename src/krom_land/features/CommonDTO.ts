import ConditionsDTO from "shared/DTOs/ConditionsDTO";
import TableOfKeysDTO from "shared/DTOs/TableOfKeysDTO";

export default interface CommonDTO {
  Conditions: ConditionsDTO | null;
  TableOfKeys: TableOfKeysDTO | null;
}
