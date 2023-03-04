import { HttpStatusCode } from "axios";
import AppNotification from "shared/components/notification/AppNotification";
import ResultDataDTO from "shared/models/ResultDataDTO";
import SendEmailModel from "shared/models/SendEmailModel";

import Repository from "./repositoryBase/Repository";

const _repo = new Repository();

export default class RepositoryKL {
  /**
   * Send email
   * @param email
   * @param message
   * @param subject
   */
  public async sendEmail(
    user_email: string,
    user_name: string,
    subject: string,
    message: string
  ) {
    const data: SendEmailModel = {
      to: btoa(encodeURIComponent(process.env.REACT_APP_SEND_EMAIL_TO ?? "")),
      user_email: btoa(encodeURIComponent(user_email)),
      user_name: btoa(encodeURIComponent(user_name)),
      subject: btoa(encodeURIComponent(subject)),
      message: btoa(encodeURIComponent(message)),
    };

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, (data as any)[key].toString());
    });

    const response = await _repo.post<any, ResultDataDTO<string>>({
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "email",
        type: "send",
      }),
      data: formData,
    });
    console.log(response);
    if (response.status === HttpStatusCode.Ok) {
      const dataType = typeof response.data;

      if (dataType === "string") {
        AppNotification("Chyba", String(response.data), "danger");
      } else if (dataType === "object") {
        if (response.data?.Success) {
          AppNotification("Úspěch", "Zpráva byla úspěšně odslaná", "success");
        } else {
          AppNotification("Chyba", response.data?.ErrMsg ?? "", "danger");
        }
      } else {
        AppNotification("Úspěch", "Zpráva byla úspěšně odslaná", "success");
      }
    } else {
      AppNotification("Chyba", "Zprávu se nepodařilo odeslat", "danger");
    }
  }
}
