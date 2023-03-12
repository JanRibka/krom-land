import {
  ActionsModel,
  initialState,
} from "shared/infrastructure/store/actions/actionsSlice";
import DocumentModel from "shared/models/DocumentModel";

import ActionDetailModel from "../models/ActionDetailModel";
import ActionsDTO from "../models/ActionsDTO";

export const mapFromActionsDTO = (actionsDTO?: ActionsDTO | null) => {
  const result: ActionsModel = {
    ...initialState,
    Title: actionsDTO?.Title ?? "",
    Description: actionsDTO?.Description ?? "",
    MainImagePath: actionsDTO?.MainImagePath ?? "",
    MainImageAlt: actionsDTO?.MainImageAlt ?? "",
    ActionDetails:
      actionsDTO?.ActionDetails.map(
        (item) =>
          new ActionDetailModel({
            ActionOrder: item.ActionOrder ?? 0,
            MonthName: item.MonthName ?? "",
            ActionImagePath: item.ActionImagePath ?? "",
            ActionImageAlt: item.ActionImageAlt ?? "",
            ActionName: item.ActionName ?? "",
            ActionDescritption: item.ActionDescritption ?? "",
            VideoLink: item.VideoLink ?? "",
            Price: item.Price ?? "",
            Place: item.Place ?? "",
            Date: item.Date ?? "",
          })
      ) ?? [],
    DocumentsToDownload:
      actionsDTO?.DocumentsToDownload.map(
        (item) =>
          new DocumentModel({
            Path: item.DocumentPath,
            Name: item.DocumentName,
          })
      ) ?? [],
  };

  return result;
};
