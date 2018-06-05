import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers } from "@angular/http";
import { Config } from "./config";

@Injectable()
export class HttpService {
  token: string

  constructor(public http: Http, public config: Config) {
  }
  get(resource) {
    let options = new RequestOptions()
    if (this.token) {
      options.headers = new Headers({
        Authorization: this.token
      })
    }
    return this
            .http
            .get(this.config.API_URL+ resource, options)

  }
  post(resource, data) {
    let options = new RequestOptions()
    if (this.token) {
      options.headers = new Headers({
        Authorization: this.token
      })
    }
    return this
            .http
            .post(this.config.API_URL+ resource, data, options)
  }
}