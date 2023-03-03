import AppNotification from "shared/components/notification/AppNotification";
import HttpStatusCode from "shared/enums/HttpStatusCode";
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
    message: string
  ) {
    const data: SendEmailModel = {
      to: btoa(process.env.REACT_APP_SEND_EMAIL_TO ?? ""),
      user_email: btoa(user_email),
      user_name: btoa(user_name),
      message: btoa(message),
    };
    // TODO: S btoa nelze použít čárka

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
    console.log("response", response);
    if (response.status === HttpStatusCode.OK) {
      AppNotification("Úspěch", "Zpráva byla úspěšně odslaná", "success");
      //TODO" Pokud vrátí chybu, musí se zahlástit pomocí notifikace
    } else {
      AppNotification("Chyba", "Zprávu se nepodařilo odeslat", "danger");
    }
  }
}
