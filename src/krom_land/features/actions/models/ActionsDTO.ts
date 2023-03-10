import DocumentDTO from "shared/models/DocumentDTO";

import ActionDetailDTO from "./ActionDetailDTO";

export default interface ActionsDTO {
  Id: number | null;
  Title: string | null;
  Description: string | null;
  MainImagePath: string | null;
  MainImageAlt: string | null;
  ActionDetails: ActionDetailDTO[];
  DocumentsToDownload: DocumentDTO[];
}
