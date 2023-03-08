import Repository from 'shared/infrastructure/repositiory/Repository';

import { HomeDTO } from './models/HomeDTO';

export default class HomeService {
  private _repo = new Repository();

  public async getData() {
    return await this._repo.get<HomeDTO>({
      url: process.env.REACT_APP_API_URL ?? "",
      params: new URLSearchParams({
        action: "webcontent",
        type: "gethome",
      }),
    });
  }
}
