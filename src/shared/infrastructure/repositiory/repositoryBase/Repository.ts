import axios from "axios";

import IPostRequest from "./IPostRequest";
import IPostResponse from "./IPostResponse";
import IRequest from "./IRequest";
import RepositoryBase from "./RepositoryBase";

export default class Repository extends RepositoryBase {
  public post<TRequest, TResult>(
    postRequest: IPostRequest<TRequest>
  ): Promise<IPostResponse<TResult>> {
    return this.postRequest<TResult>(postRequest, postRequest.data);
  }

  private async postRequest<TResult>(
    request: IRequest,
    data: any
  ): Promise<IPostResponse<TResult>> {
    return axios.post(this.getUrl(request), data, {
      cancelToken: request.cancelToken,
      params: request.params,
      headers: { ...request.headers },
    });
  }
}
