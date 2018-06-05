import { NgModule } from "@angular/core";
import { Config } from "./config";
import { HttpModule } from "@angular/http";
import { HttpService } from "./http.service";

@NgModule({
  providers: [ Config, HttpService ],
  imports: [ HttpModule ]
})
export class SharedModule { }
