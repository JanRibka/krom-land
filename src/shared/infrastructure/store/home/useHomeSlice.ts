import { useDispatch } from "react-redux";

import { actions, HomeSlice } from "./homeSlice";

export const useHomeSlice = () => {
  const dispatch = useDispatch();

  const handleHomeUpdate = (homeData: Partial<HomeSlice>) => {
    dispatch(actions.homeUpdate(homeData));
  };

  return {
    handleHomeUpdate,
  };
};
