import {
  HomeSlice,
  initialState,
} from "shared/infrastructure/store/home/homeSlice";

// import ImageModel from "shared/models/ImageModel";
import HomeDTO from "../models/HomeDTO";

// import TeamMemberModel from "../models/TeamMemberModel";

export const mapFromHomeDTO = (homeDTO?: HomeDTO | null) => {
  const result: HomeSlice = {
    ...initialState,
    // title: homeDTO?.Title ?? "",
    // description: homeDTO?.Description ?? "",
    // pageHeaderTextMain: homeDTO?.PageHeaderTextMain ?? "",
    // pageHeaderTextMainColor: homeDTO?.PageHeaderTextMainColor ?? "",
    // pageHeaderTextSecondary: homeDTO?.PageHeaderTextSecondary ?? "",
    // pageHeaderTextSecondaryColor: homeDTO?.PageHeaderTextSecondaryColor ?? "",
    // mainImage: !!homeDTO?.MainImage
    //   ? JSON.parse(homeDTO?.MainImage)
    //   : new ImageModel(),
    // aboutUs: homeDTO?.AboutUs ?? "",
    // aboutUsImage: !!homeDTO?.AboutUsImage
    //   ? JSON.parse(homeDTO?.AboutUsImage)
    //   : new ImageModel(),
    // peopleSay1Text: homeDTO?.PeopleSay1Text ?? "",
    // PeopleSay1Name: homeDTO?.PeopleSay1Name ?? "",
    // PeopleSay2Text: homeDTO?.PeopleSay2Text ?? "",
    // PeopleSay2Name: homeDTO?.PeopleSay2Name ?? "",
    // PeopleSay3Text: homeDTO?.PeopleSay3Text ?? "",
    // PeopleSay3Name: homeDTO?.PeopleSay3Name ?? "",
    // TeamMembers:
    //   homeDTO?.TeamMembers?.map(
    //     (member) =>
    //       new TeamMemberModel({
    //         Image: !!member.Image ? JSON.parse(member.Image) : new ImageModel(),
    //         Name: member.Name,
    //         Description: member.Description,
    //       })
    //   ) ?? [],
  };

  return result;
};
