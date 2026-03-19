import { useAppDispatch } from "shared/infrastructure/store/store";

import { actions } from "./rentingPageSlice";

import type { RentingPageState } from "./RentingPageState";

export const useRentingPageSlice = () => {
  const dispatch = useAppDispatch();

  const setRentingPageData = (data: RentingPageState) => {
    dispatch(actions.setPageData(data));
  };

  return { setRentingPageData };
};
