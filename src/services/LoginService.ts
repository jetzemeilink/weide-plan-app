import { LoginResponse } from "../types/interface/response/LoginResponse"
import { HttpService } from "./HttpService"

export class LoginService extends HttpService{


  public login(email: string, password: string): Promise<LoginResponse> {
      return this.post('/login_check', {email, password});
  }
}