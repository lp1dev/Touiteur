import { Component } from '@angular/core';
import { Message, Mock } from './messages-mock'
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'messages-list',
  templateUrl: 'messages.html'
})
export class MessagesPage {
  selectedItem: any
  messages: Array<Message>

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('message')
    this.messages = Mock
  }

  itemTapped(event, message) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MessagesPage, {
      message: message
    });
  }
}
