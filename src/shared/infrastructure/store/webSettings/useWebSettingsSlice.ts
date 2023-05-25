import { useDispatch } from "react-redux";

import { actions, WebSettingsModel } from "./webSettingsSlice";

export const useWebSettingsSlice = () => {
  const dispatch = useDispatch();

  const handleWebSettingsUpdate = (webSettings: Partial<WebSettingsModel>) => {
    dispatch(actions.webSettingsUpdate(webSettings));
  };

  return {
    handleWebSettingsUpdate,
  };
};
