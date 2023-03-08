import { HomeModel, initialState } from 'shared/infrastructure/store/home/homeSlice';

import { HomeDTO } from '../models/HomeDTO';

export const mapFromHomeDTO = (homeDTO: HomeDTO) => {
  const result: HomeModel = {
    ...initialState,
    AboutUs: homeDTO.AboutUs,
    MainImage: homeDTO.MainImage,
    MainImageAlt: homeDTO.MainImageAlt,
    _dataLoaded: true,
  };

  return result;
};
