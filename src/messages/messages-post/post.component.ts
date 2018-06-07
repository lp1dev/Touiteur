import { Component } from "@angular/core";
import { Message } from "../../messages/models";
import { MessagesService } from "../../messages/service";
import { NavController } from "ionic-angular";
import { Base64 } from "@ionic-native/base64";
import { ImagePicker } from "@ionic-native/image-picker";
import { MessagesPage } from "../page";

@Component({
  selector: 'post-page',
  templateUrl: 'post.html',
})
export class PostPage {
  message: Message

  constructor(
    public navCtrl: NavController,
    public messagesService: MessagesService,
    public base64: Base64,
    public imagePicker: ImagePicker
  ) {
    this.message = { 
      author: '',
      content: '',
      date: null,
      type: 0
    }
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
            this.message.image = b64
          })
          .catch(error => console.error(error))
      }
    }, (err) => { })
  }

  send() {
    this.message.type = this.message.image ? 1 : 0
    this.message.date = new Date().toString()
    console.log('sending message', this.message)
    this.messagesService
        .addMessage(this.message)
        .subscribe(response => {
          this.navCtrl.setRoot(MessagesPage)
          this.navCtrl.popToRoot({})
        }, error => console.error(error))
  }
}