import { useDispatch } from "react-redux";

import { actions, HomeModel } from "./homeSlice";

export const useHomeSlice = () => {
  const dispatch = useDispatch();

  const handleHomeUpdate = (homeData: Partial<HomeModel>) => {
    dispatch(actions.homeUpdate(homeData));
  };

  return {
    handleHomeUpdate,
  };
};
