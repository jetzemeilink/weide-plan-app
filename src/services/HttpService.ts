import axios, {AxiosStatic } from 'axios'

export class HttpService {
  protected http: AxiosStatic = axios;

  protected get(url: string): Promise<any> {
    return this.http.get(url);
  }

  protected post(url: string, data: any): Promise<any> {
    return this.http.post(url, data);
  }
}