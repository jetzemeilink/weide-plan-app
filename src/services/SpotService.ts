import { Spot } from "../types/interface/view"
import { MainApi } from "./MainApi"

export class SpotService extends MainApi {
  public getSpots(): Promise<Spot[]> {
    return this.get('address')
  }
}