import { useDispatch } from "react-redux";

import { actions, ActionsModel } from "./actionsSlice";

export const useActionsSlice = () => {
  const dispatch = useDispatch();

  const handleActionsUpdate = (commonData: Partial<ActionsModel>) => {
    dispatch(actions.actionsUpdate(commonData));
  };

  return {
    handleActionsUpdate,
  };
};
