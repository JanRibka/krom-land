import { HttpStatusCode } from "axios";
import AppNotification from "shared/components/notification/AppNotification";
import ResultDataDTO from "shared/DTOs/ResultDataDTO";
import Repository from "shared/infrastructure/repositiory/Repository";
import SendEmailModel from "shared/models/SendEmailModel";

export default class ContactService {
  private _repo = new Repository();

  /**
   * Send email
   * @param user_email
   * @param user_name
   * @param message
   * @param subject
   */
  public async sendEmail(
    email_to: string,
    user_email: string,
    user_name: string,
    subject: string,
    message: string,
  ) {
    const data: SendEmailModel = {
      to: btoa(encodeURIComponent(email_to)),
      user_email: btoa(encodeURIComponent(user_email)),
      user_name: btoa(encodeURIComponent(user_name)),
      subject: btoa(encodeURIComponent(subject)),
      message: btoa(encodeURIComponent(message)),
    };

    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, (data as any)[key].toString());
    });

    const response = await this._repo.post<any, ResultDataDTO<string>>({
      baseUrl: process.env.REACT_APP_API_BASE_URL,
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "email",
        type: "send",
      }),
      data: formData,
    });

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
