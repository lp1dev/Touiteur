import { Component } from "@angular/core";
import { Message } from "../messages/messages-mock";
import { MessagesService } from "../messages/messages.service";
import { NavController } from "ionic-angular";
import { MessagesPage } from "../messages/messages";

@Component({
  selector: 'post-page',
  templateUrl: 'post.html',
})
export class PostPage {
  message: Message

  constructor(public navCtrl: NavController,
    public messagesService: MessagesService) {
    this.message = { 
      author: 'Lp1',
      avatar: 'https://avatars3.githubusercontent.com/u/4246023?s=460&v=4',
      content: '',
      date: null,
      type: 0
    }
  }

  send() {
    this.message.type = Number(this.message.type)
    this.message.date = new Date().toString()
    console.log('sending message', this.message)
    this.messagesService.addMessage(this.message)
    this.navCtrl.push(MessagesPage)
  }
}