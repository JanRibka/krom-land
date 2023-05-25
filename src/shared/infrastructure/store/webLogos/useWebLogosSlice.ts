import { useDispatch } from "react-redux";

import { actions, WebLogosModel } from "./webLogosSlice";

export const useWebLogosSlice = () => {
  const dispatch = useDispatch();

  const handleWebLogosUpdate = (webLogos: Partial<WebLogosModel>) => {
    dispatch(actions.webLogosUpdate(webLogos));
  };

  return {
    handleWebLogosUpdate,
  };
};
