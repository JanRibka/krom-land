import { CommonModel } from "shared/infrastructure/store/common/commonSlice";

import CommonDTO from "./CommonDTO";

export const mapFromCommonDTO = (commonDTO?: CommonDTO | null) => {
  const result: CommonModel = {
    Conditions: {
      GdprLabel: commonDTO?.Conditions?.GdprLabel ?? "",
      GdprText: commonDTO?.Conditions?.GdprText ?? "",
      TermsOfConditionsLabel:
        commonDTO?.Conditions?.TermsOfConditionsLabel ?? "",
      TermsOfConditionsText: commonDTO?.Conditions?.TermsOfConditionsText ?? "",
    },
    TablesOfKeys: {
      PaymentMethodts: commonDTO?.TablesOfKeys?.PaymentMethodts ?? [],
    },
    _dataLoaded: true,
  };

  return result;
};
