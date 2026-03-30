import { Control, FieldValues, Path } from "react-hook-form";

import { FormTableSelectOption } from "./FormTableSelectOption";

export interface FormTableSelectFieldProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  label: string;
  options: FormTableSelectOption[];
  disabled?: boolean;
  loading?: boolean;
  onSelectionChange?: (newValue: Array<string | number>) => void;
}
