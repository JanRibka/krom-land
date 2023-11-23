import { HttpStatusCode } from "axios";
import AppNotification from "shared/components/notification/AppNotification";
import ResultDataDTO from "shared/DTOs/ResultDataDTO";
import Repository from "shared/infrastructure/repositiory/Repository";

import DialogContentFormModel from "./actionRegistrationDialog/models/DialogContentFormModel";
import VoucherModel from "./vouchers/models/VoucherModel";

export default class ActionsService {
  private _repo = new Repository();

  public async create(data: DialogContentFormModel) {
    const dataEncoded = btoa(encodeURIComponent(JSON.stringify(data)));
    const formData = new FormData();
    let result = false;

    formData.append("registrationData", dataEncoded);

    const response = await this._repo.post<any, ResultDataDTO<string>>({
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "registrations",
        type: "create",
      }),
      data: formData,
    });

    if (response.status === HttpStatusCode.Ok) {
      const dataType = typeof response.data;

      if (dataType === "string") {
        AppNotification("Chyba", String(response.data), "danger");
      } else if (dataType === "object") {
        if (response.data?.Success) {
          AppNotification("Úspěch", "Registrace byla úspěšná", "success");
          result = true;
        } else {
          AppNotification("Chyba", response.data?.ErrMsg ?? "", "danger");
        }
      } else {
        AppNotification("Úspěch", "Registrace byla úspěšná", "success");
        result = true;
      }
    } else {
      AppNotification("Chyba", "Chyba při zpracování registrace", "danger");
    }

    return result;
  }

  public async sendVoucher(data: VoucherModel) {
    const dataEncoded = btoa(encodeURIComponent(JSON.stringify(data)));
    let result = false;
    const formData = new FormData();

    formData.append("voucherData", dataEncoded);

    const response = await this._repo.post<any, ResultDataDTO<any>>({
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "vouchers",
        type: "create",
      }),
      data: formData,
    });

    if (response.status === HttpStatusCode.Ok) {
      const dataType = typeof response.data;

      if (dataType === "string") {
        AppNotification("Chyba", String(response.data), "danger");
      } else if (dataType === "object") {
        if (response.data?.Success) {
          AppNotification("Úspěch", "Voucher odeslán", "success");
          result = true;
        } else {
          AppNotification("Chyba", response.data?.ErrMsg ?? "", "danger");
        }
      } else {
        AppNotification("Úspěch", "Voucher odeslán", "success");
        result = true;
      }
    } else {
      AppNotification("Chyba", "Chyba při odesílání voucheru", "danger");
    }

    return result;
  }
}
