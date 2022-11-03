import { MainApi } from "./MainApi"

export class AddressService extends MainApi {
  constructor() {
    super();
  }

  public getAddress(): Promise<any> {
    return this.get('/address/4');
  }
}