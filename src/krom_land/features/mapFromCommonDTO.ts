import { CommonModel } from "shared/infrastructure/store/common/commonSlice";

import CommonDTO from "./CommonDTO";

export const mapFromCommonDTO = (commonDTO?: CommonDTO | null) => {
  const result: CommonModel = {
    _dataLoaded: true,
  };

  return result;
};
