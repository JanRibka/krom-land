import {
  HomeModel,
  initialState,
} from "shared/infrastructure/store/home/homeSlice";

import { HomeDTO } from "../models/HomeDTO";

export const mapFromHomeDTO = (homeDTO?: HomeDTO | null) => {
  const result: HomeModel = {
    ...initialState,
    Title: homeDTO?.Title ?? "",
    Description: homeDTO?.Description ?? "",
    MainImagePath: homeDTO?.MainImagePath ?? "",
    MainImageAlt: homeDTO?.MainImageAlt ?? "",
    AboutUs: homeDTO?.AboutUs ?? "",
    AboutUsImagePath: homeDTO?.AboutUsImagePath ?? "",
    AboutUsImageAlt: homeDTO?.AboutUsImageAlt ?? "",
    PeopleSay1Text: homeDTO?.PeopleSay1Text ?? "",
    PeopleSay1Name: homeDTO?.PeopleSay1Name ?? "",
    PeopleSay2Text: homeDTO?.PeopleSay2Text ?? "",
    PeopleSay2Name: homeDTO?.PeopleSay2Name ?? "",
    PeopleSay3Text: homeDTO?.PeopleSay3Text ?? "",
    PeopleSay3Name: homeDTO?.PeopleSay3Name ?? "",
  };

  return result;
};
