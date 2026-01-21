import WebLogosDTO from "shared/DTOs/WebLogosDTO";
import { mapKeysToCamelCase } from "shared/helpers/stringHelpers";
import { WebLogosModel } from "shared/infrastructure/store/webLogos/webLogosSlice";
import ImageModel from "shared/models/ImageModel";

export const mapFromWebLogosDTO = (webLogosDTO?: WebLogosDTO | null) => {
  const result: WebLogosModel = {
    HeaderLogo: !!webLogosDTO?.HeaderLogo
      ? mapKeysToCamelCase(JSON.parse(webLogosDTO.HeaderLogo))
      : ({ alt: "", name: "", path: "" } as ImageModel),
  };

  return result;
};
