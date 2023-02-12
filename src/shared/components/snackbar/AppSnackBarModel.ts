import { Severity } from '../../types/severityType';

interface AppSnackBarOpenDataModel {
  open: boolean;
  severity: Severity;
  message: string;
}

export default AppSnackBarOpenDataModel;
