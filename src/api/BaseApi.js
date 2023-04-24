import AxiosClient from "./AxiosClient";

class BaseApi {
  constructor(uri) {
    this.uri = uri;
  }
  store(resource) {
    return AxiosClient({
      url: `${this.uri}/create`,
      method: 'POST',
      data: resource,
    });
  }
}

export default BaseApi;
