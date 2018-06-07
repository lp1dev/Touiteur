import { NgModule } from "@angular/core";
import { Config } from "./config";
import { HttpModule } from "@angular/http";
import { HttpService } from "./http.service";
import { LocalNotifications } from '@ionic-native/local-notifications';
import { WebSocketService } from "./websocket.service";

@NgModule({
  providers: [ Config, HttpService, WebSocketService, LocalNotifications ],
  imports: [ HttpModule ]
})
export class SharedModule { }
