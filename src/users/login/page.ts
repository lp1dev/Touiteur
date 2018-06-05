import { Component } from "@angular/core";
import { UserService } from "../service";
import { User } from "../models";
import { ToastController, NavController } from "ionic-angular";
import { SignupPage } from "../signup/page";

@Component({
  selector: 'login-page',
  templateUrl: 'template.html'
})
export class LoginPage {
  user: User = {
    login: '',
    password: ''
  }

  constructor(public userService: UserService, 
  public toastCtrl: ToastController,
  public navCtrl: NavController
) {

  }
  login () {
    const toast = this.toastCtrl.create({
      message: 'Login Successful',
      duration: 3000,
      position: 'buttom'
    })
    this
      .userService
      .login(this.user)
      .subscribe(response => {
        console.log(response)
        toast.present()
        this.navCtrl.goToRoot({})
      }, error => {
        toast.setMessage(error.json().error)
        toast.present()
      })
  }
  signup () {
    this.navCtrl.push(SignupPage)
  }
}