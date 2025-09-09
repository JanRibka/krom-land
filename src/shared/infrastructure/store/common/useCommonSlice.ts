import { useDispatch } from "react-redux";
import TShirtSizesModel from "shared/models/SelectDataModel";

import { actions, CommonModel } from "./commonSlice";

export const useCommonSlice = () => {
  const dispatch = useDispatch();

  const handleCommonUpdate = (commonData: Partial<CommonModel>) => {
    dispatch(actions.commonUpdate(commonData));
  };

  const handleTShirtSizesUpdate = (data: TShirtSizesModel[]) => {
    dispatch(actions.tShirtSizesUpdate(data));
  };

  return {
    handleCommonUpdate,
    handleTShirtSizesUpdate,
  };
};
