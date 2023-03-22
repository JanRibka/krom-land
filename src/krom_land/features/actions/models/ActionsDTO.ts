import DocumentDTO from "shared/models/DocumentDTO";

import ActionDetailDTO from "./ActionDetailDTO";

export default interface ActionsDTO {
  Id: number | null;
  Title: string | null;
  Description: string | null;
  PageHeaderTextMain: string | null;
  PageHeaderTextMainColor: string | null;
  MainImage: string | null;
  ActionDetails: ActionDetailDTO[];
  DocumentsToDownload: DocumentDTO[];
}
