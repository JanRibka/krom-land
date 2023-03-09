import { useDispatch } from "react-redux";

import { actions, CommonModel } from "./commonSlice";

export const useCommonSlice = () => {
  const dispatch = useDispatch();

  const handleCommonUpdate = (commonData: Partial<CommonModel>) => {
    dispatch(actions.commonUpdate(commonData));
  };

  return {
    handleCommonUpdate,
  };
};
