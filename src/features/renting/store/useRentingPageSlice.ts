import { useAppDispatch } from "shared/infrastructure/store/store";

import { actions } from "./rentingPageSlice";
import { RentingData } from "../types";

export const useRentingPageSlice = () => {
  const dispatch = useAppDispatch();

  const setRentingPageData = (data: RentingData) => {
    dispatch(actions.setPageData(data));
  };

  return { setRentingPageData };
};
