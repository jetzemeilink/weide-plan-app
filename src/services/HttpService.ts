import axios, {Axios, AxiosResponse, AxiosStatic, HeadersDefaults } from 'axios'

export class HttpService {
  protected httpInstance: Axios;

  constructor(baseUrl?: string) {
      this.httpInstance = axios.create({
        baseURL:  baseUrl || 'https://127.0.0.1:8000/api/v1',
       });

       this.initializeResponseInterceptor();
  }

  private initializeResponseInterceptor(): void {
    this.httpInstance.interceptors.response.use(this.handleResponse, this.handleError)
  }

  private handleResponse = ({data}: AxiosResponse): any => data; 
  protected handleError = (error: any) => Promise.reject(error);

  protected get(url: string): Promise<any> {
    return this.httpInstance.get(url)
  }

  protected post(url: string, requestData: any): Promise<any> {
    return this.httpInstance.post(url, requestData)
  }
}