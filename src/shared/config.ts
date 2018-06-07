import { Injectable } from "@angular/core";

@Injectable()
export class Config {
  API_URL: string = 'http://board.lp1.eu/'
  WS_URL: string = 'ws://lp1.eu:8090'
}