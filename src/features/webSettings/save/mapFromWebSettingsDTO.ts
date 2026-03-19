import WebSettingsDTO from "shared/DTOs/WebSettingsDTO";
import { WebSettingsModel } from "shared/infrastructure/store/webSettings/webSettingsSlice";

export const mapFromWebSettingsDTO = (
  webSettingsDTO?: WebSettingsDTO | null
) => {
  const result: WebSettingsModel = {
    FacebookLink: webSettingsDTO?.FacebookLink ?? "",
    InstagramLink: webSettingsDTO?.InstagramLink ?? "",
    TikTokLink: webSettingsDTO?.TikTokLink ?? "",
    SubjectName: webSettingsDTO?.SubjectName ?? "",
    SubjectICO: webSettingsDTO?.SubjectICO ?? "",
    SubjectDIC: webSettingsDTO?.SubjectDIC ?? null,
    AddressName: webSettingsDTO?.AddressName ?? "",
    AddressAddress: webSettingsDTO?.AddressAddress ?? "",
    AddressLink: webSettingsDTO?.AddressLink ?? "",
    ContactName: webSettingsDTO?.ContactName ?? "",
    ContactHours: webSettingsDTO?.ContactHours ?? "",
    ContactTel: webSettingsDTO?.ContactTel ?? "",
    ContactEmail: webSettingsDTO?.ContactEmail ?? "",
  };

  return result;
};
