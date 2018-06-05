import { Component } from "@angular/core";
import { UserService } from "../service";
import { User } from "../models";
import { DomSanitizer } from "@angular/platform-browser";
import { NavController } from "ionic-angular";

@Component({
  selector: 'profile-page',
  templateUrl: 'template.html'
})
export class ProfilePage {
  user: User

  constructor(
    public userService: UserService, 
    public sanitizer: DomSanitizer,
    public navCtrl: NavController
  ) {
    userService
      .subject
      .subscribe(user => {
        console.log('Profile User', user)
        this.user = user
      })
  }
  logout() {
    this.userService.logout()
    this.navCtrl.goToRoot({})
  }
  get avatar() {
    if (this.user && this.user.avatar) {
      return this.sanitizer.bypassSecurityTrustUrl(this.user.avatar)
    } 
    return null
  }
}