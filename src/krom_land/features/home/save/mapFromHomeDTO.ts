import {
  HomeModel,
  initialState,
} from "shared/infrastructure/store/home/homeSlice";
import ImageModel from "shared/models/ImageModel";

import { HomeDTO } from "../models/HomeDTO";

export const mapFromHomeDTO = (homeDTO?: HomeDTO | null) => {
  const result: HomeModel = {
    ...initialState,
    Title: homeDTO?.Title ?? "",
    Description: homeDTO?.Description ?? "",
    MainImage: JSON.parse(
      homeDTO?.MainImage ?? JSON.stringify(new ImageModel())
    ),
    AboutUs: homeDTO?.AboutUs ?? "",
    AboutUsImage: JSON.parse(
      homeDTO?.AboutUsImage ?? JSON.stringify(new ImageModel())
    ),
    PeopleSay1Text: homeDTO?.PeopleSay1Text ?? "",
    PeopleSay1Name: homeDTO?.PeopleSay1Name ?? "",
    PeopleSay2Text: homeDTO?.PeopleSay2Text ?? "",
    PeopleSay2Name: homeDTO?.PeopleSay2Name ?? "",
    PeopleSay3Text: homeDTO?.PeopleSay3Text ?? "",
    PeopleSay3Name: homeDTO?.PeopleSay3Name ?? "",
  };

  return result;
};
