import { Component } from "@angular/core";
import { Message } from "../messages/messages-mock";

@Component({
  selector: 'post-page',
  templateUrl: 'post.html',
})
export class PostPage {
  message: Message

  constructor() {
    this.message = { 
      author: 'Lp1',
      content: '',
      date: null,
      type: 0
    }
  }

  send() {
    this.message.type = Number(this.message.type)
    this.message.date = new Date().toString()
    console.log('sending message', this.message)
  }
}