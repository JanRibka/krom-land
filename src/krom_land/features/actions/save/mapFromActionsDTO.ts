import { mapKeysToCamelCase } from "shared/helpers/stringHelpers";
import {
  ActionsModel,
  initialState,
} from "shared/infrastructure/store/actions/actionsSlice";
import DocumentModel from "shared/models/DocumentModel";

import ActionsDTO from "../models/ActionsDTO";

export const mapFromActionsDTO = (actionsDTO?: ActionsDTO | null) => {
  const result: ActionsModel = {
    ...initialState,
    Title: actionsDTO?.Title ?? "",
    Description: actionsDTO?.Description ?? "",
    PageHeaderTextMain: actionsDTO?.PageHeaderTextMain ?? "",
    PageHeaderTextMainColor: actionsDTO?.PageHeaderTextMainColor ?? "",
    MainImage: !!actionsDTO?.MainImage
      ? mapKeysToCamelCase(JSON.parse(actionsDTO.MainImage))
      : { alt: "", name: "", path: "" },
    ActionDetails:
      actionsDTO?.ActionDetails.map((item) => ({
        Id: item.Id ?? 0,
        ActionOrder: item.ActionOrder ?? 0,
        MonthName: item.MonthName ?? "",
        Image: !!item?.Image
          ? mapKeysToCamelCase(JSON.parse(item.Image))
          : { alt: "", name: "", path: "" },
        ActionName: item.ActionName ?? "",
        ActionDescritption: item.ActionDescritption ?? "",
        VideoLink: item.VideoLink ?? "",
        Price: item.Price ?? "",
        IsPriceRemark: item.IsPriceRemark === "1" ? true : false,
        PriceRemark: item.PriceRemark ?? "",
        Place: item.Place ?? "",
        Date: item.Date ?? "",
        CapacityFull: item.CapacityFull === "1" ? true : false,
        DisplayTShirtSize: item.DisplayTShirtSize === "1" ? true : false,
      })) ?? [],
    DocumentsToDownload:
      actionsDTO?.DocumentsToDownload.map((item) => ({
        Id: item.Id ?? 0,
        Document: !!item.Document
          ? JSON.parse(item.Document)
          : ({ Name: "", Path: "" } as DocumentModel),
        Delete: item.Delete ?? false,
      })) ?? [],
  };

  return result;
};
