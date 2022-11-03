import { HttpService } from "./HttpService";
import { AxiosRequestConfig } from 'axios';
import { useSecurityStore } from '../stores/SecurityStore'

export class MainApi extends HttpService {
  private securityStore = useSecurityStore();

    public constructor() {
      super("https://127.0.0.1:8000/api/v1/")

      this.initializeRequestIntercepter();
  }

  private initializeRequestIntercepter(): void {
    this.httpInstance.interceptors.request.use(this.handleRequest, this.handleError)
  }

  private handleRequest = (config: AxiosRequestConfig) => {

    //@ts-ignore
    config.headers['Authorization'] = `Bearer ${this.securityStore.userJwtToken}`;

    return config;
  }
}