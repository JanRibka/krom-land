import { News } from "features/home/models/News";
import TeamMemberModel from "features/home/models/TeamMemberModel";
import { Testimonial } from "features/home/models/Testimonial";
import ImageModel from "shared/models/ImageModel";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface HomeSlice {
  title: string;
  description: string;
  pageHeaderTextMain: string;
  pageHeaderTextMainColor: string;
  pageHeaderTextSecondary: string;
  pageHeaderTextSecondaryColor: string;
  mainImage: ImageModel | null;
  aboutUs: string;
  aboutUsImage: ImageModel | null;
  news: News[] | null;
  newsImage: ImageModel | null;
  teamMembers: TeamMemberModel[] | null;
  testimonials: Testimonial[] | null;
}

export const initialState: HomeSlice = {
  title: "",
  description: "",
  pageHeaderTextMain: "",
  pageHeaderTextMainColor: "",
  pageHeaderTextSecondary: "",
  pageHeaderTextSecondaryColor: "",
  mainImage: null,
  aboutUs: "",
  aboutUsImage: null,
  news: [],
  newsImage: null,
  teamMembers: [],
  testimonials: [],
};

export const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    homeUpdate: (state, action: PayloadAction<Partial<HomeSlice>>) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
});

export const actions = homeSlice.actions;

export default homeSlice.reducer;

// Selectors
export const selectHome = (state: RootState) => state.home;
export const selectHomeSeo = (state: RootState) => ({
  title: state.home.title,
  description: state.home.description,
});
export const selectHomePageTitle = (state: RootState) => {
  return {
    mainImagePath: state.home.mainImage?.path,
    mainImageAlt: state.home.mainImage?.alt,
    pageHeaderTextMain: state.home.pageHeaderTextMain,
    pageHeaderTextMainColor: state.home.pageHeaderTextMainColor,
    pageHeaderTextSecondary: state.home.pageHeaderTextSecondary,
    pageHeaderTextSecondaryColor: state.home.pageHeaderTextSecondaryColor,
  };
};
export const selectHomeAboutUs = (state: RootState) => {
  return {
    aboutUsImagePath: state.home.aboutUsImage?.path,
    aboutUsImageAlt: state.home.aboutUsImage?.alt,
    aboutUs: state.home.aboutUs,
  };
};
export const selectHomeTeamMembers = (state: RootState) =>
  state.home.teamMembers;
export const selectHomeTestimonials = (state: RootState) => {
  const testimonials1 = state.home.testimonials?.find((t) => t.order === 1);
  const testimonials2 = state.home.testimonials?.find((t) => t.order === 2);
  const testimonials3 = state.home.testimonials?.find((t) => t.order === 3);

  return {
    peopleSay1Text: testimonials1?.text ?? "",
    peopleSay1Name: testimonials1?.name ?? "",
    peopleSay2Text: testimonials2?.text ?? "",
    peopleSay2Name: testimonials2?.name ?? "",
    peopleSay3Text: testimonials3?.text ?? "",
    peopleSay3Name: testimonials3?.name ?? "",
  };
};
export const selectHomeNews = (state: RootState) => {
  return {
    newsItems: state.home.news,
    newsImagePath: state.home.newsImage?.path,
    newsImageAlt: state.home.newsImage?.alt,
  };
};
