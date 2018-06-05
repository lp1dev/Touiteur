import { NgModule } from "@angular/core";
import { SignupPage } from "./signup/page";
import { LoginPage } from "./login/page";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { IonicModule } from "ionic-angular";
import { ImagePicker } from '@ionic-native/image-picker';
import { Base64 } from '@ionic-native/base64';
import { UserService } from "./service";
import { ProfilePage } from "./profile/page";

@NgModule({
  imports: [ 
    BrowserModule, 
    HttpModule, 
    IonicModule
  ],
  declarations: [ SignupPage, LoginPage, ProfilePage ],
  entryComponents: [ SignupPage, LoginPage, ProfilePage ],
  exports: [ SignupPage, LoginPage, ProfilePage ],
  providers: [ ImagePicker, Base64, UserService ]
})
export class UsersModule { }
