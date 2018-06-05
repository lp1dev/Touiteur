import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesService } from './service';

@Component({
  selector: 'messages-list',
  templateUrl: 'template.html',
  
})
export class MessagesPage implements OnInit{
  selectedItem: any

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public messagesService: MessagesService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('message')
  }

  ngOnInit() {
    this
      .messagesService
      .loadMessages()
  }

  itemTapped(event, message) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MessagesPage, {
      message: message
    });
  }
}
