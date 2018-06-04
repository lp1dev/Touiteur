import { Component, OnInit } from '@angular/core';
import { Message } from './messages-mock'
import { NavController, NavParams } from 'ionic-angular';
import { MessagesService } from './messages.service';

@Component({
  selector: 'messages-list',
  templateUrl: 'messages.html',
  
})
export class MessagesPage implements OnInit{
  selectedItem: any
  messages: Array<Message>

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public messagesService: MessagesService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('message')
    this.messages = []
  }

  ngOnInit() {
    this
      .messagesService
      .loadMessages()

    this
      .messagesService
      .observable
      .subscribe((messages) => this.messages = messages)
  }

  itemTapped(event, message) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MessagesPage, {
      message: message
    });
  }
}
