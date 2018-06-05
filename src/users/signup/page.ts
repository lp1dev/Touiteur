import { Component } from "@angular/core";
import { ImagePicker } from "@ionic-native/image-picker";
import { Base64 } from "@ionic-native/base64";
import { User } from "../models";
import { UserService } from "../service";
import { ToastController, NavController } from "ionic-angular";

@Component({
  selector: 'signup-page',
  templateUrl: 'template.html'
})
export class SignupPage {
  user: User = {
    login: '',
    password: ''
  }

  constructor(public imagePicker: ImagePicker, 
    public base64: Base64,
    public userService: UserService,
    public toastCtrl: ToastController,
    public navCtrl: NavController
  ) {
  }

  b64encode(filePath: string) {
    return this.base64.encodeFile(filePath)
  }

  selectPicture() {
    const options = {}
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
        this
          .b64encode(results[i])
          .then(b64 => {
            console.log('b64', b64)
            this.user.avatar = b64
          })
          .catch(error => console.error(error))
      }
    }, (err) => { })
  }

  signup() {
    const toast = this.toastCtrl.create({
      message: 'User was added successfully',
      duration: 3000,
      position: 'buttom'
    })
    this
      .userService
      .signUp(this.user)
      .subscribe((response) => {
        console.log(response)
        toast.present()
        this.navCtrl.pop()
      }, error => {
        console.error(error.json())
        toast.setMessage(error.json().error)
        toast.present()
      })
  }
}
