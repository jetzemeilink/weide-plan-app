import { MainApi } from "./MainApi"

export class AddressService extends MainApi {
  constructor() {
    super();
  }

  public getAddress(): Promise<any> {
    return this.httpInstance.get('/address/4');
  }
}