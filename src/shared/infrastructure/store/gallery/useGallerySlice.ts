import { useDispatch } from "react-redux";

import { actions, GalleryModel } from "./gallerySlice";

export const useGallerySlice = () => {
  const dispatch = useDispatch();

  const handleGalleryUpdate = (homeData: Partial<GalleryModel>) => {
    dispatch(actions.galleryUpdate(homeData));
  };

  return {
    handleGalleryUpdate,
  };
};
