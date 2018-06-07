import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MessagesService } from './service';
import { Message } from './models';

@Component({
  selector: 'messages-list',
  templateUrl: 'template.html',
  
})
export class MessagesPage implements OnInit{
  selectedItem: any
  messages: Array<Message>
  page: number = 1

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public messagesService: MessagesService
  ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('message')
  }

  ionViewWillEnter() {
    this.messagesService.loadMessages()
  }

  ngOnInit() {
    this
      .messagesService
      .subject
      .subscribe(messages => {
        this.messages = messages
      })
  }

  refresh(refresher) {
    this
      .messagesService
      .loadMessages()
      .subscribe(messages => {
        this.messages = messages
        refresher.complete()
      })
  }

  doInfinite(infiniteScroll) {
    this
      .messagesService
      .loadMessagesPart(this.page + 1)
      .subscribe(response => {
        const messages = response.json()
        if (messages.length) {
          this.page++
        }
        messages.forEach(message => this.messages.push(message))
        infiniteScroll.complete()
      }, error => console.error(error))
  }

  itemTapped(event, message) {
    this.navCtrl.push(MessagesPage, {
      message: message
    })
  }
}
