import { HttpService } from "./HttpService"

export class LoginService extends HttpService{

  public login(email: string, password: string): Promise<string> {
    return this.post('login_check', {email, password})
  }
}