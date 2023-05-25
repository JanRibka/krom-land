import WebLogosDTO from "shared/DTOs/WebLogosDTO";
import { WebLogosModel } from "shared/infrastructure/store/webLogos/webLogosSlice";
import ImageModel from "shared/models/ImageModel";

export const mapFromWebLogosDTO = (webLogosDTO?: WebLogosDTO | null) => {
  const result: WebLogosModel = {
    HeaderLogo: !!webLogosDTO?.HeaderLogo
      ? JSON.parse(webLogosDTO.HeaderLogo)
      : new ImageModel(),
  };

  return result;
};
